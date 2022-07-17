import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios'
import Dashboard from './Dashboard.vue'
import 'es6-promise'
import 'babel-polyfill'
import sentiment from 'sentiment'

axios.get('https://ddragon.leagueoflegends.com/api/versions.json').then(result => {
    const patchVersion = result.data[0]

    // EUW1_5774555921, EUW1_5774426295, EUW1_5774756103
    const requestMatchUrl = "http://localhost:5500/routes/api/matches/EUW1_5774555921";
    const requestMatchTimelineUrl = requestMatchUrl + "/timeline";
    const requestItemUrl = `http://ddragon.leagueoflegends.com/cdn/${patchVersion}/data/en_US/item.json`;
    const imageBaseUrl = `http://ddragon.leagueoflegends.com/cdn/${patchVersion}/img/champion/`
    const requestChampionsUrl = "http://localhost:5500/routes/api/champions/"
    const voiceDataUrl = "http://localhost:5500/routes/api/voicedata/thehakon";
    const stopWordsUrl = "http://localhost:5500/routes/api/stopwords";
    const sentimentsUrl = "http://localhost:5500/routes/api/sentiments";

    /* .catch(err => {
        console.log(err)
    }) */

    axios.get(requestMatchUrl).then(matchResult => {
        const thisMatchData = matchResult.data.info
        axios.get(requestItemUrl).then(itemResult => {
            const thisItemData = itemResult.data
            axios.get(requestMatchTimelineUrl).then(timelineResult => {
                const thisTimelineResult = timelineResult.data.info
                axios.get(voiceDataUrl).then(result => {
                    const thisVoiceData = result.data;
                    const histogramData = [[],[],[],[],[],[],[],[],[],[]];
                    for(let index in thisVoiceData){
                        for(let sentence of thisVoiceData[index]){
                            if(!sentence.alternatives[0].result) continue
                            for(let word of sentence.alternatives[0].result){
                                let cell = Math.floor(((word.end + word.start) / 2.0) / 10.0)
                                if(histogramData[index][cell]){
                                    histogramData[index][cell].y += 1;
                                } else {
                                    histogramData[index].push({x: cell,y: 1})
                                }
                            }
                        }
                    }
                    axios.get(stopWordsUrl).then(result => {
                        const stopWords = result.data
                        axios.get(sentimentsUrl).then(result => {
                            const sentiments = result.data
                            const wordListArray = createWordcloudData(thisVoiceData, stopWords, sentiments, thisMatchData.gameDuration)
                            const store = createStore({
                                state () {
                                    return {
                                        matchData: thisMatchData,
                                        currentPatchVersion: patchVersion, 
                                        itemData: thisItemData,
                                        matchDataTimeline: thisTimelineResult,
                                        selectedPlayer: [true,true,true,true,true,true,true,true,true,true],
                                        imageBaseUrl,
                                        requestChampionsUrl,
                                        voiceData: thisVoiceData,
                                        histogramData: histogramData,
                                        stopwords: stopWords,
                                        wordListArray: wordListArray[0],
                                        selectBarPressed: false,
                                        selectedIntervalStart: '',
                                        selectedIntervalLength: 1,
                                        selectedIntervalWords: [''],
                                        sentiments: wordListArray[1]
                                    }
                                },
                                mutations: {
                                    updateMatchData (state) {
                                        state.matchData = thisMatchData
                                    },
                                    updateItemData (state) {
                                        state.itemData = thisItemData
                                    },
                                    updateMatchTimeline (state) {
                                        state.matchDataTimeline = thisTimelineResult
                                    },
                                    updateSelectedPlayer (state, {playerID}) {
                                        let newArray = []
                                        for(let index in state.selectedPlayer){
                                            if(index == (playerID - 1)){
                                                newArray.push(!state.selectedPlayer[index])
                                                continue
                                            }
                                            newArray.push(state.selectedPlayer[index])
                                        }
                                        state.selectedPlayer = newArray;
                                    },
                                    updateSelectedEvent (state, {eventID}){
                                        state.updateSelectedEvent = eventID
                                    },
                                    updateSelectBarPressed (state) {
                                        state.selectBarPressed = !state.selectBarPressed
                                    },
                                    updateSelectedIntervalStart (state, {bar}){
                                        state.selectedIntervalStart = bar
                                    },
                                    updateSelectedIntervalLength (state, {length}){
                                        state.selectedIntervalLength = length
                                    },
                                    updateSelectedIntervalWords (state, {words}){
                                        state.selectedIntervalWords = words
                                    }
                                }
                            })
                            const app = createApp(Dashboard)
                            app.use(store)
                            app.mount('#app')
                        })
                    })
                })
            })
        })
    })
})

function createWordcloudData(voiceData, stopwords, sentimentJSON, gameDuration){
    // const sent = new sentiment()
    let wordListArray = [[],[],[],[],[],[],[],[],[],[]]
    let sentimentsArray = createSentimentData(voiceData, sentimentJSON, gameDuration)
    for(let playerID = 0; playerID<10; playerID++){
        if(voiceData[playerID].length == 0) continue
        // let auxArray = [];
        for(let sentence of voiceData[playerID]){
            if(!sentence.alternatives[0].result) continue

            /* if(auxArray[0] && auxArray[0].x != Math.floor((sentence.alternatives[0].result[sentence.alternatives[0].result.length - 1].end + sentence.alternatives[0].result[0].start)/20)){
                let sum = 0;
                for(let entry of auxArray){
                    sum += entry.y
                }
                sentimentsArray[playerID].push({x:auxArray[0].x,y:sum/auxArray.length})
                auxArray = [];
            }
            auxArray.push({x:Math.floor((sentence.alternatives[0].result[sentence.alternatives[0].result.length - 1].end + sentence.alternatives[0].result[0].start)/20),y:sent.analyze(sentence.alternatives[0].text).comparative}) */
            for(let word of sentence.alternatives[0].result){
                if(stopwords.includes(word.word)) continue
                wordListArray[playerID].push(word.word)
            }
        }
    }

    return [wordListArray,sentimentsArray]
}

function createSentimentData(voiceData, sentimentJSON, gameDuration){
    let sentimentsArray = [[],[],[],[],[],[],[],[],[],[]];
    let lowerCaseSentiments = Object.keys(sentimentJSON).map(element => element.toLowerCase());
    let cellCount = Math.floor(gameDuration/10) + 1

    for(let playerID = 0; playerID<10; playerID++){
        if(voiceData[playerID].length == 0) continue
        let sentimentAnalysisArray = [];
        let wordArray = new Array(cellCount).fill(0);
        for(let sentence of voiceData[playerID]){
            if(!sentence.alternatives[0].result) continue
            for(let word of sentence.alternatives[0].result){
                var keytoFind = word.word;
                var index = lowerCaseSentiments.indexOf(keytoFind);
                if(wordArray[Math.floor((word.start + word.end)/20)] == 0){ wordArray[Math.floor((word.start + word.end)/20)] = [] }
                wordArray[Math.floor((word.start + word.end)/20)].push([word.word, index>=0 ? sentimentJSON[Object.keys(sentimentJSON)[index]] : 0])
            }
        }
        for(let entryIndex in wordArray){
            let normalizedScore = 0;
            if(wordArray[entryIndex] != 0){
                let scoreSum = 0;
                for(let entry of wordArray[entryIndex]){
                    scoreSum += parseFloat(entry[1]);
                }
                normalizedScore = scoreSum / wordArray[entryIndex].length;
            }
            let normalizedScoreString = normalizedScore.toFixed(6)
            sentimentAnalysisArray.push({x:entryIndex,y:parseFloat(normalizedScoreString)})
        }
        sentimentsArray[playerID] = sentimentAnalysisArray
    }
    return sentimentsArray
}