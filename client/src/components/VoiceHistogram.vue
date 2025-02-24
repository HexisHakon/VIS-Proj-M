<template>
    <div id="histogram-wrapper">
        <div id="button-wrapper">
            <button @click="createHistogram()"><img src="../assets/Chart.webp"></button>
            <button @click="renderRelativeChart()"><img src="../assets/ChartPercentage.webp"></button>
        </div>
        <div id="histogram-container">
            <svg id="d3-histogram-container">
            </svg>
        </div>
    </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'VoiceHistogram',
  components: {
  },
  props: {
      selectedPlayers: Array
      },
  data() {
      return {
          histogramDataBlue: [],
          histogramDataRed: []
      }
  },
  methods: {
      fillHistogramBlueRed() {
          this.histogramDataBlue = [[],[],[],[],[]];
          this.histogramDataRed = [[],[],[],[],[]];
          for(let index in this.selectedPlayers){
            if(!this.selectedPlayers[index]) continue
            if(index<5){
                this.histogramDataBlue[index].push(...this.$store.state.histogramData[index])
            } else {
                this.histogramDataRed[index-5].push(...this.$store.state.histogramData[index])
            }
          }
      },
      renderChart() {
          let data = Array.from(Array(Math.ceil((this.$store.state.matchData.gameDuration / 60.0)*6) + 1).keys()).map(x => {
              return {
                  x: x,
                  "p1": this.histogramDataBlue[0][x] ? this.histogramDataBlue[0][x].y : 0,
                  "p2": this.histogramDataBlue[1][x] ? this.histogramDataBlue[1][x].y : 0,
                  "p3": this.histogramDataBlue[2][x] ? this.histogramDataBlue[2][x].y : 0,
                  "p4": this.histogramDataBlue[3][x] ? this.histogramDataBlue[3][x].y : 0,
                  "p5": this.histogramDataBlue[4][x] ? this.histogramDataBlue[4][x].y : 0,
                  "p6":  this.histogramDataRed[0][x] ?  this.histogramDataRed[0][x].y : 0,
                  "p7":  this.histogramDataRed[1][x] ?  this.histogramDataRed[1][x].y : 0,
                  "p8":  this.histogramDataRed[2][x] ?  this.histogramDataRed[2][x].y : 0,
                  "p9":  this.histogramDataRed[3][x] ?  this.histogramDataRed[3][x].y : 0,
                  "p10": this.histogramDataRed[4][x] ?  this.histogramDataRed[4][x].y : 0}
          })

          let subgroups = [];
          for(let value in this.selectedPlayers){
              if(!this.selectedPlayers[value]) continue
              subgroups.push(`p${parseInt(value) + 1}`)
          }

          let stackedData = d3.stack().keys(subgroups)(data)

          const height = document.getElementById('histogram-container').getBoundingClientRect().height;
          const width = document.getElementById('histogram-container').getBoundingClientRect().width;
          const xScale = d3
          .scaleBand()
          .domain(Array.from(Array(Math.ceil((this.$store.state.matchData.gameDuration / 60.0)*6) + 1).keys()))
          .range([1,width])

          let maxYValue = /* 120 */ Math.max(...data.map(x => parseFloat(x.p1 + x.p2 + x.p3 + x.p4 + x.p5 + x.p6 + x.p7 + x.p8 + x.p9 + x.p10)))
          const yScale = d3
          .scaleLinear()
          .domain([0,maxYValue])
          .range([height, 0])

          document.querySelector('#d3-histogram-container').innerHTML = ""
          const container = d3.select('#d3-histogram-container')
          .classed('chart-container', true)
          .style('height', `${height}px`)
          .style('width', `${width}px`)

            let fillRange = [];
            for(let index in this.histogramDataBlue){
                if(this.histogramDataBlue[index].length == 0) continue
                fillRange.push('#3790e1')
            }
            for(let index in this.histogramDataRed){
                if(this.histogramDataRed[index].length == 0) continue
                fillRange.push('#e13939')
            }

          let fill = d3.scaleOrdinal()
            .domain(subgroups)
            .range(fillRange)

          container.append("g")
          .selectAll("g")
          .data(stackedData)
          .enter().append("g")
            .attr("fill", d => {return fill(d)})
            .selectAll("rect")
            .data(d => {return d})
            .enter().append("rect")
                .attr("x", d => {return xScale(d.data.x)})
                .attr("y", d => {return yScale(d[1])})
                .attr("height", d => {return yScale(d[0]) - yScale(d[1]) - 1})
                .attr("width", xScale.bandwidth() - 1)

          container.append("g")
          .attr("transform","translate(0," + height + ")")
          .call(d3.axisBottom(xScale).tickFormat(function(d,i){return i>0 && i %30 === 0 ? `${d/6} min` : null}))
          .selectAll('text')

            if(this.histogramDataBlue.concat(this.histogramDataRed).length>0){
                container.append("g")
                .call(d3.axisLeft(yScale).tickValues(Array.from({length: Math.ceil(maxYValue/5)}, (e,i) => i*5)))
                .selectAll('text')
            } else {
                container.append("g")
                .call(d3.axisLeft(yScale))
                .selectAll('text')
            }


          container.append("text")
          .attr("text-anchor", "end")
          .attr("x", width)
          .attr("y", height + 35)
          .attr("fill", "white")
          .attr("font-size", "10px")
          .text("Time in 10s intervals")

          container.append("text")
          .attr("text-anchor", "middle")
          .attr("x", 10)
          .attr("y", -10)
          .attr("fill", "white")
          .attr("font-size", "10px")
          .text("Word count")
      },
      renderRelativeChart() {
          let data = Array.from(Array(Math.ceil((this.$store.state.matchData.gameDuration / 60.0)*6) + 1).keys()).map(x => {
            let p1Count = this.histogramDataBlue[0][x] ? this.histogramDataBlue[0][x].y : 0
            let p2Count = this.histogramDataBlue[1][x] ? this.histogramDataBlue[1][x].y : 0
            let p3Count = this.histogramDataBlue[2][x] ? this.histogramDataBlue[2][x].y : 0
            let p4Count = this.histogramDataBlue[3][x] ? this.histogramDataBlue[3][x].y : 0
            let p5Count = this.histogramDataBlue[4][x] ? this.histogramDataBlue[4][x].y : 0
            let p6Count = this.histogramDataRed[0][x] ?  this.histogramDataRed[0][x].y : 0
            let p7Count = this.histogramDataRed[1][x] ?  this.histogramDataRed[1][x].y : 0
            let p8Count = this.histogramDataRed[2][x] ?  this.histogramDataRed[2][x].y : 0
            let p9Count = this.histogramDataRed[3][x] ?  this.histogramDataRed[3][x].y : 0
            let p10Count = this.histogramDataRed[4][x] ?  this.histogramDataRed[4][x].y : 0
            let dataPoint = {
                x: x,
                p1: p1Count,
                p2: p2Count,
                p3: p3Count,
                p4: p4Count,
                p5: p5Count,
                p6: p6Count,
                p7: p7Count,
                p8: p8Count,
                p9: p9Count,
                p10: p10Count,
            max: p1Count + p2Count + p3Count + p4Count + p5Count + p6Count + p7Count + p8Count + p9Count + p10Count}
              return dataPoint
          })

          let subgroups = [];
          for(let value in this.selectedPlayers){
              if(!this.selectedPlayers[value]) continue
              subgroups.push(`p${parseInt(value) + 1}`)
          }

          let stackedData = d3.stack().keys(subgroups)(data)

          const height = document.getElementById('histogram-container').getBoundingClientRect().height;
          const width = document.getElementById('histogram-container').getBoundingClientRect().width;
          const xScale = d3
          .scaleBand()
          .domain(Array.from(Array(Math.ceil((this.$store.state.matchData.gameDuration / 60.0)*6) + 1).keys()))
          .range([1,width])

          let maxYValue = 100
          const yScale = d3
          .scaleLinear()
          .domain([0,maxYValue])
          .range([height, 0])

          document.querySelector('#d3-histogram-container').innerHTML = ""
          const container = d3.select('#d3-histogram-container')
          .classed('chart-container', true)
          .style('height', `${height}px`)
          .style('width', `${width}px`)

            let fillRange = [];
            for(let index in this.histogramDataBlue){
                if(this.histogramDataBlue[index].length == 0) continue
                fillRange.push('#3790e1')
            }
            for(let index in this.histogramDataRed){
                if(this.histogramDataRed[index].length == 0) continue
                fillRange.push('#e13939')
            }

          let fill = d3.scaleOrdinal()
            .domain(subgroups)
            .range(fillRange)

          container.append("g")
          .selectAll("g")
          .data(stackedData)
          .enter().append("g")
            .attr("fill", d => {return fill(d)})
            .selectAll("rect")
            .data(d => {return d})
            .enter().append("rect")
                .attr("x", d => {return xScale(d.data.x)})
                .attr("y", d => {return yScale((d[1]/d.data.max)*maxYValue)})
                .attr("height", d => {return yScale((d[0]/d.data.max)*maxYValue) - yScale((d[1]/d.data.max)*maxYValue) - 1})
                .attr("width", xScale.bandwidth() - 1)

          container.append("g")
          .attr("transform","translate(0," + height + ")")
          .call(d3.axisBottom(xScale).tickFormat(function(d,i){return i>0 && i %30 === 0 ? `${d/6} min` : null}))
          .selectAll('text')

            if(this.histogramDataBlue.concat(this.histogramDataRed).length>0){
                container.append("g")
                .call(d3.axisLeft(yScale).tickValues(Array.from({length: Math.ceil(maxYValue/5) + 1}, (e,i) => i*5)))
                .selectAll('text')
            } else {
                container.append("g")
                .call(d3.axisLeft(yScale))
                .selectAll('text')
            }


          container.append("text")
          .attr("text-anchor", "end")
          .attr("x", width)
          .attr("y", height + 35)
          .attr("fill", "white")
          .attr("font-size", "10px")
          .text("Time in 10s intervals")

          container.append("text")
          .attr("text-anchor", "middle")
          .attr("x", 10)
          .attr("y", -10)
          .attr("fill", "white")
          .attr("font-size", "10px")
          .text("Word count percentage")
      },
      selectStartingPoint() {
        this.$store.commit('updateSelectBarPressed')
        if(this.$store.state.selectBarPressed){
            var svg = d3.select("#d3-histogram-container")
            svg.selectAll('*')
            .remove()
            this.renderChart()
            document.getElementById("selectStartingPoint").classList.add('active-button')
            document.getElementById("selectStartingPoint").classList.remove('button')
        } else {
            document.getElementById("selectStartingPoint").classList.add('button')
            document.getElementById("selectStartingPoint").classList.remove('active-button')
        }
      },
      selectTimespan() {
            for(let x = this.$store.state.selectedIntervalStart; x < this.$store.state.selectedIntervalStart + parseInt(document.getElementById('slider-input').value); x++){
                d3.select('#d3-histogram-container').selectAll('.bar')._groups[0][x].attributes[5].nodeValue = 'rgb(255,255,255)'
            }
      },
      reset() {
          if(this.$store.state.selectedIntervalStart != ''){
            var svg = d3.select("#d3-histogram-container")
            svg.selectAll('*')
            .remove()
            this.renderChart()
            this.$store.commit('updateSelectedIntervalStart',{bar: ''})
            this.$store.commit('updateSelectedIntervalLength', {length: 0})
        }
      },
      createHistogram(){
        this.fillHistogramBlueRed()
        this.renderChart()
      }
  },
  mounted() {
    this.createHistogram()
  },
  updated() {
    this.createHistogram()
  },
  beforeUpdate() {
    var svg = d3.select("svg")
    svg.selectAll('*')
    .remove()
  },
}
</script>

<style scoped>
#histogram-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 20px);
}
#histogram-container {
    width: 90%;
    height: 300px;
    margin-left: 50px;
}
#d3-histogram-container {
    overflow: visible
}
#timespanControls{
    display: flex;
    width: calc(100% - 20px);
    justify-content: left;
    margin-top: 30px;
    gap: 10px;
}
#button-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 5px;
    top: 0;
    left: 0;
    height: 100%;
    width: 50px;
    padding: 5px;

    & > button {
        display: flex;
        flex: 1;
        width: 100%;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 5px;
        background-color: rgb(var(--EventGraphBG));
        filter: brightness(110%);
        box-shadow: 0 3px 3px 0 #0006;
        cursor: pointer;

        &:hover {
            background-color: rgba(var(--EventGraphBG),0.8);
        }

        &:active {
            background-color: rgba(var(--EventGraphBG),0.2);
        }

        & > img {
            width: 80%;
            aspect-ratio: 1;
        }
    }
}
.button {
    background-color: rgb(var(--ActiveSidebarEffect));
    border: none;
    font-family: 'Montserrat';
    font-weight: 600;
    padding: 5px 20px;
}
.button:hover {
    background-color: rgba(var(--ActiveSidebarEffect),0.9)
}
.button:active {
    background-color: rgba(var(--ActiveSidebarEffect),0.5)
}
.active-button {
    background-color: rgb(var(--Font));
    border: none;
    font-family: 'Montserrat';
    font-weight: 600;
    padding: 5px 20px;
}
.active-button:hover {
    background-color: rgba(var(--Font),0.9)
}
.active-button:active {
    background-color: rgba(var(--Font),0.5)
}
#slider {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 10px
}
</style>