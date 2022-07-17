<template>
    <div id="details-barchart-wrapper">
        <div id="details-barchart-controls">
            <button class="button" type="button" @click="renderChart()" >Create details barchart</button>
        </div>
        <div id="details-barchart-container">
            <svg id="d3-details-barchart-container">
            </svg>
        </div>
    </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'DetailsVoiceBarchart',
  components: {
  },
  props: {
      selectedIntervalStart: Number,
      selectedIntervalLength: Number,
  },
  data() {
      return {
          barchartData: []
      }
  },
  methods: {
      fillDetailsBarchart() {
          this.barchartData = []
          for(let sentence of this.$store.state.voiceData[this.$store.state.selectedPlayer - 1]){
              if(sentence.alternatives[0].result 
                &&  ((Math.floor(((sentence.alternatives[0].result[0].start + sentence.alternatives[0].result[0].end) / 2.0) / 10.0) >= this.selectedIntervalStart && Math.floor(((sentence.alternatives[0].result[0].start + sentence.alternatives[0].result[0].end) / 2.0) / 10.0) < (this.selectedIntervalStart + this.selectedIntervalLength))
                     || (Math.floor(((sentence.alternatives[0].result[sentence.alternatives[0].result.length - 1].start + sentence.alternatives[0].result[sentence.alternatives[0].result.length - 1].end) / 2.0) / 10.0) >= this.selectedIntervalStart && Math.floor(((sentence.alternatives[0].result[sentence.alternatives[0].result.length - 1].start + sentence.alternatives[0].result[sentence.alternatives[0].result.length - 1].end) / 2.0) / 10.0) < (this.selectedIntervalStart + this.selectedIntervalLength))
                    )){
                  for(let word of sentence.alternatives[0].result){
                      if(Math.floor(((word.start + word.end) / 2.0) / 10.0) >= this.selectedIntervalStart && Math.floor(((word.start + word.end) / 2.0) / 10.0) < (this.selectedIntervalStart + this.selectedIntervalLength)){
                          if(this.barchartData[Math.floor(((word.start + word.end) / 2.0) / 10.0) - this.selectedIntervalStart]){
                            this.barchartData[Math.floor(((word.start + word.end) / 2.0) / 10.0) - this.selectedIntervalStart] = [Math.floor(((word.start + word.end) / 2.0) / 10.0), this.barchartData[Math.floor(((word.start + word.end) / 2.0) / 10.0) - this.selectedIntervalStart][1] + 1, this.barchartData[Math.floor(((word.start + word.end) / 2.0) / 10.0) - this.selectedIntervalStart][2].concat(word.word)]
                          } else {
                              this.barchartData.push([Math.floor(((word.start + word.end) / 2.0) / 10.0), 1, [word.word]])
                          }
                      }
                  }
              }
          }
          this.$store.commit('updateSelectedIntervalWords', {words: [...this.barchartData.map(x => x[2]).toString().split(',')]})
      },
      renderChart() {
          d3.select('#d3-details-barchart-container').selectAll('*').remove()
          this.fillDetailsBarchart();
          const height = document.getElementById('details-barchart-container').getBoundingClientRect().height;
          const width = document.getElementById('details-barchart-container').getBoundingClientRect().width;
          const xScale = d3
          .scaleBand()
          .domain([...this.barchartData.map(x=> x[0])])
          .range([1,width])

          let maxYValue = Math.max(...this.barchartData.map(x=> x[1]))
          const yScale = d3
          .scaleLinear()
          .domain([0,maxYValue])
          .range([height, 0])

          const container = d3.select('#d3-details-barchart-container')
          .classed('chart-container', true)
          .style('height', `${height}px`)
          .style('width', `${width}px`)

          let fill = d3.scaleLinear()
            .domain([0,height])

          if(this.$store.state.selectedPlayer<6){
            fill.range(['#808080','#3790e1']);
          } else {
            fill.range(['#808080', '#e13939'])
          }

          const bar = container
          .selectAll('.bar')
          .data([...this.barchartData.map(x => [x[0],x[1]])])
          .enter()
          .append('rect')
          .classed('bar', true)
          .attr('width', xScale.bandwidth())
          .attr('height', d => height - yScale(d[1]))
          .attr('x', d => xScale(d[0]))
          .attr('y', d => yScale(d[1]))
          .attr('fill', d => fill(height - yScale(d[1])))

          container.append("g")
          .attr("transform","translate(0," + height + ")")
          .call(d3.axisBottom(xScale).tickFormat(function(d,i){return `${i+1}`/* return i>0 && i %3 === 0 ? `${d/6} sec` : null */}))

            if(this.barchartData.length>0){
                container.append("g")
                .call(d3.axisLeft(yScale).tickValues(
                    Array.from(Array(Math.max(...this.barchartData.map(x=>x[1]))).keys())
                    .concat(Math.max(...this.barchartData.map(x=>x[1])))
                    .filter(x => x%5 === 0)))
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
          .text("Number of words")

          if(this.barchartData.length == 0){
              container.append("text")
          .attr("text-anchor", "middle")
          .attr("x", width / 2)
          .attr("y", height / 2)
          .attr("fill", "white")
          .attr("font-size", "12px")
          .text("No data available")
          }
      }
  },
  mounted() {
    
  }
}
</script>

<style scoped>
#details-barchart-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 20px);
    gap: 10px;
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
#details-barchart-container {
    width: 95%;
    height: 150px;
}
#d3-details-barchart-container {
    overflow: visible
}
</style>