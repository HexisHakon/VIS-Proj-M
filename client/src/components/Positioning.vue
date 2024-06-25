<template>
  <div class="positioning-wrapper">
    <div class="row-positioning">
      <div class="flex-1 roundEdges">
        <div id="event-graph-panel">
          <span id="barchart-title">No voice activity displayed</span>
          <VoiceHistogram :selectedPlayers="this.selectedPlayersArray"/>
          <Timeline :selectedPlayers="this.selectedPlayersArray"/>
        </div>
      </div>
      <div class="flex-1 roundEdges map-panel">
        <span id="wordcloud-header">Word cloud of terms used by the selected players</span>
        <div class="wordcloud-wrapper" id="wordcloud-full-wrapper">
          <div id="wordcloud-container" v-if="this.$store.state.wordListArray[8].length > 0 && this.wordcloudWidth > 0">
            <Wordcloud :selectedPlayers="this.selectedPlayersArray" :textArray="this.$store.state.wordListArray" :width="this.wordcloudWidth" :height="this.wordcloudHeight" :id="1"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VoiceHistogram from './VoiceHistogram.vue'
import Wordcloud from './Wordcloud.vue'
//import DetailsVoiceBarchart from './DetailsVoiceBarchart.vue'
import Timeline from './Timeline.vue'

export default {
  name: 'Positioning',
  components: {
    VoiceHistogram,
    Wordcloud,
    Timeline,
    //DetailsVoiceBarchart

  },
  props: {
    selectedPlayersArray: Array
  },
  data() {
    return {
      wordList: [],
      wordcloudWidth: 0,
      wordcloudHeight: 0,
      eventTileWrapperWidth: 0,
    }
  },
  methods: {
    changeSelectedPlayers() {
      let names = ''
      for(let index in this.selectedPlayersArray){
        if(!this.selectedPlayersArray[index]) continue
        names += (/* this.$store.state.matchData.participants[index].summonerName */ index<5?`B${parseInt(index)+1} / `:`R${parseInt(index)%5 + 1} / `)
      }
      names = names.slice(0,names.length - 3)
      document.getElementById("barchart-title").innerHTML = `Voice activity from ${names}`
    }
  },
  mounted() {
    // this.eventTileWrapperWidth = document.getElementById('event-tile-wrapper').getBoundingClientRect().width;
    this.wordcloudWidth = parseInt((document.getElementById('wordcloud-full-wrapper').getBoundingClientRect().width).toFixed(3));
    this.wordcloudHeight = parseInt((document.getElementById('wordcloud-full-wrapper').getBoundingClientRect().height).toFixed(3));
    
    /* for(let x of this.$store.state.matchData.participants){
        document.getElementById(x.summonerName).addEventListener('input', () => {
          if(document.getElementById(x.summonerName).checked){
            this.$store.commit('updateSelectedPlayer' , {playerID: x.participantId})
          } else {
            this.$store.commit('updateSelectedPlayer' , {playerID: 1})
          }
        })
      } */
  },
  updated() {
    this.changeSelectedPlayers()
  },
}
</script>

<style scoped>
.positioning-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
}
.flex-1{
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--HeaderBG));
  overflow: hidden;
}
.row-positioning {
  display: flex;
  flex: 1;
  gap: 10px;
}
#first-row {
  min-height: 65vh;
}
.image {
  height: 90%;
  aspect-ratio: 1/1;
  background-image: url("../assets/map.png");
  background-size: cover;
  box-shadow: inset 0 0 15px 2px black;
  border: 1px solid black;
}
.map-panel {
  flex:none !important;
  width: 20%;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
  position: relative;
  z-index: 1;
}
#event-graph-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
}
#timeline-blurred {
  width: 90%;
  height: 100%;
  background-color: #fff3;
  box-shadow: 0 0 25px 5px white;
}
#blur-wrapper {
  display: flex;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
}
#minute-wrapper {
  width: 90%;
  position: absolute;
  top: -4px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
}
#minute-1 {
  background-color: #04bf65;
}
.minute-indicator {
  display: flex;
  flex: 1;
  height: 10px;
  border-top-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: white;
  border: none;
}
.minute-indicator:hover{
  background-color: grey;
  cursor: pointer;
  box-shadow: inset 0 0 0 2px #000;
}
.minute-tag {
  font-family: 'Montserrat';
  position: absolute;
  font-size: 0.8em;
  font-style: italic;
  font-weight: 100;
  white-space: nowrap;
  top: -20px;
  margin-left: -20px;
  color: white
}
.dimensions {
  width: 50%;
  aspect-ratio: 1/1;
  background-size: cover;
  margin-bottom: 10px
}
.wordcloud-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    flex: 1;
}
.eventCount {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 900;
  font-family: 'Montserrat';
}
#barchart-title {
  margin-bottom: 30px;
  font-size: 0.9rem;
}
#checkboxes {
  display: flex;
  justify-content: space-evenly;
  width: 90%
}
#wordcloud-container {
  height: 100%;
  width: 100%;
}
#wordcloud-header {
  font-size: 0.9rem;
}
</style>