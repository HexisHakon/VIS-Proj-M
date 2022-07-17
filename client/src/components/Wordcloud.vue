<template>
    <div :id="'chart' + this.id" style="height: 100%; width: 100%">
    </div>
</template>

<script>
import * as d3 from 'd3'
import d3Cloud from "d3-cloud"


export default {
  name: 'Wordcloud',
  components: {
  },
  props: {
      selectedPlayers: Array,
      textArray: Array,
      width: Number,
      height: Number,
      id: Number
  },
  data() {
      return {
          wordList: [],
          wordListRed: [],
          wordListBlue: [],
      }
  },
  methods: {
    fillWordList() {
        this.wordList = [];
        this.wordListRed = [];
        this.wordListBlue = [];
        for(let index in this.selectedPlayers){
            if(!this.selectedPlayers[index]) continue;
            this.wordList.push(...this.textArray[index])
            if(index<5){
                this.wordListBlue.push(...this.textArray[index])
            } else {
                this.wordListRed.push(...this.textArray[index])
            }
        }
    },
    drawWordCloud(wordsArray, {
        size = group => group.length, // Given a grouping of words, returns the size factor for that word
        word = d => d, // Given an item of the data array, returns the word
        marginTop = 0, // top margin, in pixels
        marginRight = 0, // right margin, in pixels
        marginBottom = 0, // bottom margin, in pixels
        marginLeft = 0, // left margin, in pixels
        width = document.getElementById('chart'+this.id).getBoundingClientRect().width, // outer width, in pixels
        height = document.getElementById('chart'+this.id).getBoundingClientRect().height, // outer height, in pixels
        maxWords = 250, // maximum number of words to extract from the text
        fontFamily = "Montserrat", // font family
        fontScale = 12, // base font size
        padding = 0, // amount of padding between the words (in pixels)
        rotate = 0, // a constant or function to rotate the words
        invalidation // when this promise resolves, stop the simulation
        } = {}) {
        const data = d3.rollups(wordsArray, size, w => w)
            .sort(([, a], [, b]) => d3.descending(a, b))
            .slice(0, maxWords)
            .map(([key, size]) => ({text: word(key), size}));

        let blueData = d3.rollups(this.wordListBlue.filter(word => data.map(x => x.text).includes(word)), size, w => w)
            .slice(0, maxWords)
            .map(([key, size]) => ({text: word(key), size}))
        
        let redData = d3.rollups(this.wordListRed.filter(word => data.map(x => x.text).includes(word)), size, w => w)
            .slice(0, maxWords)
            .map(([key, size]) => ({text: word(key), size}))


        const svg = d3.create("svg")
            .attr("viewBox", [0, 0, width, document.getElementById('chart'+this.id).getBoundingClientRect().height])
            .attr("width", width)
            .attr("font-family", fontFamily)
            .attr("text-anchor", "middle")
            .attr("style", "max-width: 100%; height: 100%; height: intrinsic;");

        let defs = svg.append("defs")

        for(let word of data){
            let wordCountBlue = 0
            let wordCountRed = 0

            if(blueData.filter(wort => wort.text == word.text).length > 0){
                wordCountBlue = blueData.filter(wort => wort.text == word.text)[0].size
            }
            if(redData.filter(wort => wort.text == word.text).length > 0){
                wordCountRed = redData.filter(wort => wort.text == word.text)[0].size
            }

            let sum = wordCountBlue + wordCountRed
            let gradient = defs.append("linearGradient")
            .attr("id",`word-${word.text}`)
            .attr("x1", 0)
            .attr("x2", "100%")
            .attr("y1", 0)
            .attr("y2", 0)
            
            gradient.append("stop")
            .classed("start",true)
            .attr("offset",`${wordCountBlue / sum}`)
            .attr("stop-color","rgb(57, 144, 225)")
            .attr("stop-opacity", 1)
            
            gradient.append("stop")
            .classed("end",true)
            .attr("offset",`${wordCountBlue / sum}`)
            .attr("stop-color","rgb(225, 57, 57)")
            .attr("stop-opacity", 1)

        }


        const g = svg.append("g").attr("transform", `translate(${marginLeft},${marginTop})`).attr("style","position:relative;z-index:0");

        const cloud = d3Cloud()
            .size([width - marginLeft - marginRight, document.getElementById('chart'+this.id).getBoundingClientRect().height - marginTop - marginBottom])
            .words(data)
            .padding(padding)
            .rotate(rotate)
            .font(fontFamily)
            .fontSize(d => Math.sqrt(d.size) * fontScale)
            .on("word", ({size, x, y, rotate, text}) => {
                g.append("text")
                    .attr("font-size", size)
                    .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
                    .attr("fill", `url(#word-${text})`)
                    .text(text);
            });

        cloud.start();
        invalidation && invalidation.then(() => cloud.stop());
        return svg.node();
    }
  },
  mounted() {
      this.fillWordList()
      document.getElementById(`chart${this.id}`).appendChild(this.drawWordCloud(this.wordList, {
                width: this.width,
                height: this.height,
                }))
  },
  updated() {
      this.fillWordList()
      document.getElementById(`chart${this.id}`).innerHTML = ''
      document.getElementById(`chart${this.id}`).appendChild(this.drawWordCloud(this.wordList, {
                width: this.width,
                height: this.height,
                }))
  },
      
}
</script>

<style scoped>
#wordcloud-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
}
</style>