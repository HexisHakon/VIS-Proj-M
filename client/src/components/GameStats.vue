<template>
  <div v-if="!(id1==null)" class="panel-wrapper">
    <div class="gamestats-wrapper roundEdges">
      <div class="panel roundEdges box-shadow">
        <div id="blueSide" class="grid-wrapper">
          <div class="r1 c1 left player-description">Kills</div>
          <div class="r2 c1 left player-description">Tode</div>
          <div class="r3 c1 left player-description">Assists</div>
          <div class="r4 c1 left player-description">Creep Score</div>
          <div class="r5 c1 left player-description">Vision Score</div>
          <div class="r6 c1 left player-description">Level</div>
          <!---->
          <div class="columnWrapper" @click="getSelectedChamp($event)">
            <div class="r-all c2" id="1" :style="this.$store.state.selectedPlayer[0] ? 'background-color: rgba(57, 144, 225, 0.6)' : 'background-color: rgba(0, 0, 0, 0)'">
              <div class="active"></div>
            </div>
            <img :src="id1_img" class="champ-img flex-center r8 c2"/>
            <span class="player-name flex-center c2 r7">{{id1}}</span>
            <span class="flex-center c2 r1 stats">{{id1_k}}</span>
            <span class="flex-center c2 r2 stats">{{id1_d}}</span>
            <span class="flex-center c2 r3 stats">{{id1_a}}</span>
            <span class="flex-center c2 r4 stats">{{id1_cs}}</span>
            <span class="flex-center c2 r5 stats">{{id1_vs}}</span>
            <span class="flex-center c2 r6 stats">{{id1_lvl}}</span>
          </div>
          <div class="columnWrapper" @click="getSelectedChamp($event)">
            <div class="r-all c3" id="2" :style="this.$store.state.selectedPlayer[1] ? 'background-color: rgba(57, 144, 225, 0.6)' : 'background-color: rgba(0, 0, 0, 0)'">
              <div class="active"></div>
            </div>
            <img :src="id2_img" class="champ-img flex-center r8 c3"/>
            <span class="player-name flex-center c3 r7">{{id2}}</span>
            <span class="flex-center c3 r1 stats">{{id2_k}}</span>
            <span class="flex-center c3 r2 stats">{{id2_d}}</span>
            <span class="flex-center c3 r3 stats">{{id2_a}}</span>
            <span class="flex-center c3 r4 stats">{{id2_cs}}</span>
            <span class="flex-center c3 r5 stats">{{id2_vs}}</span>
            <span class="flex-center c3 r6 stats">{{id2_lvl}}</span>
          </div>
          <div class="columnWrapper" @click="getSelectedChamp($event)">
            <div class="r-all c4" id="3" :style="this.$store.state.selectedPlayer[2] ? 'background-color: rgba(57, 144, 225, 0.6)' : 'background-color: rgba(0, 0, 0, 0)'">
              <div class="active"></div>
            </div>
            <img :src="id3_img" class="champ-img flex-center r8 c4"/>
            <span class="player-name flex-center c4 r7">{{id3}}</span>
            <span class="flex-center c4 r1 stats">{{id3_k}}</span>
            <span class="flex-center c4 r2 stats">{{id3_d}}</span>
            <span class="flex-center c4 r3 stats">{{id3_a}}</span>
            <span class="flex-center c4 r4 stats">{{id3_cs}}</span>
            <span class="flex-center c4 r5 stats">{{id3_vs}}</span>
            <span class="flex-center c4 r6 stats">{{id3_lvl}}</span>
          </div>
          <div class="columnWrapper" @click="getSelectedChamp($event)">
            <div class="r-all c5" id="4" :style="this.$store.state.selectedPlayer[3] ? 'background-color: rgba(57, 144, 225, 0.6)' : 'background-color: rgba(0, 0, 0, 0)'">
              <div class="active"></div>
            </div>
            <img :src="id4_img" class="champ-img flex-center r8 c5"/>
            <span class="player-name flex-center c5 r7">{{id4}}</span>
            <span class="flex-center c5 r1 stats">{{id4_k}}</span>
            <span class="flex-center c5 r2 stats">{{id4_d}}</span>
            <span class="flex-center c5 r3 stats">{{id4_a}}</span>
            <span class="flex-center c5 r4 stats">{{id4_cs}}</span>
            <span class="flex-center c5 r5 stats">{{id4_vs}}</span>
            <span class="flex-center c5 r6 stats">{{id4_lvl}}</span>
          </div>
          <div class="columnWrapper" @click="getSelectedChamp($event)">
            <div class="r-all c6" id="5" :style="this.$store.state.selectedPlayer[4] ? 'background-color: rgba(57, 144, 225, 0.6)' : 'background-color: rgba(0, 0, 0, 0)'">
              <div class="active"></div>
            </div>
            <img :src="id5_img" class="champ-img flex-center r8 c6"/>
            <span class="player-name flex-center c6 r7">{{id5}}</span>
            <span class="flex-center c6 r1 stats">{{id5_k}}</span>
            <span class="flex-center c6 r2 stats">{{id5_d}}</span>
            <span class="flex-center c6 r3 stats">{{id5_a}}</span>
            <span class="flex-center c6 r4 stats">{{id5_cs}}</span>
            <span class="flex-center c6 r5 stats">{{id5_vs}}</span>
            <span class="flex-center c6 r6 stats">{{id5_lvl}}</span>
          </div>
        </div>
      </div>
      <div class="panel roundEdges box-shadow">
        <div id="redSide" class="grid-wrapper">
          <div class="r1 c6 right player-description">Kills</div>
          <div class="r2 c6 right player-description">Tode</div>
          <div class="r3 c6 right player-description">Assists</div>
          <div class="r4 c6 right player-description">Creep Score</div>
          <div class="r5 c6 right player-description">Vision Score</div>
          <div class="r6 c6 right player-description">Level</div>
          <!---->
          <div class="columnWrapper" @click="getSelectedChamp($event)">
            <div class="r-all c1" id="6" :style="this.$store.state.selectedPlayer[5] ? 'background-color: rgba(225, 57, 57, 0.6)' : 'background-color: rgba(0, 0, 0, 0)'">
              <div class="active"></div>
            </div>
            <img :src="id6_img" class="champ-img flex-center r8 c1"/>
            <span class="player-name flex-center c1 r7">{{id6}}</span>
            <span class="flex-center c1 r1 stats">{{id6_k}}</span>
            <span class="flex-center c1 r2 stats">{{id6_d}}</span>
            <span class="flex-center c1 r3 stats">{{id6_a}}</span>
            <span class="flex-center c1 r4 stats">{{id6_cs}}</span>
            <span class="flex-center c1 r5 stats">{{id6_vs}}</span>
            <span class="flex-center c1 r6 stats">{{id6_lvl}}</span>
          </div>
          <div class="columnWrapper" @click="getSelectedChamp($event)">
            <div class="r-all c2" id="7" :style="this.$store.state.selectedPlayer[6] ? 'background-color: rgba(225, 57, 57, 0.6)' : 'background-color: rgba(0, 0, 0, 0)'">
              <div class="active"></div>
            </div>
            <img :src="id7_img" class="champ-img flex-center r8 c2"/>
            <span class="player-name flex-center c2 r7">{{id7}}</span>
            <span class="flex-center c2 r1 stats">{{id7_k}}</span>
            <span class="flex-center c2 r2 stats">{{id7_d}}</span>
            <span class="flex-center c2 r3 stats">{{id7_a}}</span>
            <span class="flex-center c2 r4 stats">{{id7_cs}}</span>
            <span class="flex-center c2 r5 stats">{{id7_vs}}</span>
            <span class="flex-center c2 r6 stats">{{id7_lvl}}</span>
          </div>
          <div class="columnWrapper" @click="getSelectedChamp($event)">
            <div class="r-all c3" id="8" :style="this.$store.state.selectedPlayer[7] ? 'background-color: rgba(225, 57, 57, 0.6)' : 'background-color: rgba(0, 0, 0, 0)'">
              <div class="active"></div>
            </div>
            <img :src="id8_img" class="champ-img flex-center r8 c3"/>
            <span class="player-name flex-center c3 r7">{{id8}}</span>
            <span class="flex-center c3 r1 stats">{{id8_k}}</span>
            <span class="flex-center c3 r2 stats">{{id8_d}}</span>
            <span class="flex-center c3 r3 stats">{{id8_a}}</span>
            <span class="flex-center c3 r4 stats">{{id8_cs}}</span>
            <span class="flex-center c3 r5 stats">{{id8_vs}}</span>
            <span class="flex-center c3 r6 stats">{{id8_lvl}}</span>
          </div>
          <div class="columnWrapper" @click="getSelectedChamp($event)">
            <div class="r-all c4" id="9" :style="this.$store.state.selectedPlayer[8] ? 'background-color: rgba(225, 57, 57, 0.6)' : 'background-color: rgba(0, 0, 0, 0)'">
              <div class="active"></div>
            </div>
            <img :src="id9_img" class="champ-img flex-center r8 c4"/>
            <span class="player-name flex-center c4 r7">{{id9}}</span>
            <span class="flex-center c4 r1 stats">{{id9_k}}</span>
            <span class="flex-center c4 r2 stats">{{id9_d}}</span>
            <span class="flex-center c4 r3 stats">{{id9_a}}</span>
            <span class="flex-center c4 r4 stats">{{id9_cs}}</span>
            <span class="flex-center c4 r5 stats">{{id9_vs}}</span>
            <span class="flex-center c4 r6 stats">{{id9_lvl}}</span>
          </div>
          <div class="columnWrapper" @click="getSelectedChamp($event)">
            <div class="r-all c5" id="10" :style="this.$store.state.selectedPlayer[9] ? 'background-color: rgba(225, 57, 57, 0.6)' : 'background-color: rgba(0, 0, 0, 0)'">
              <div class="active"></div>
            </div>
            <img :src="id10_img" class="champ-img flex-center r8 c5"/>
            <span class="player-name flex-center c5 r7">{{id10}}</span>
            <span class="flex-center c5 r1 stats">{{id10_k}}</span>
            <span class="flex-center c5 r2 stats">{{id10_d}}</span>
            <span class="flex-center c5 r3 stats">{{id10_a}}</span>
            <span class="flex-center c5 r4 stats">{{id10_cs}}</span>
            <span class="flex-center c5 r5 stats">{{id10_vs}}</span>
            <span class="flex-center c5 r6 stats">{{id10_lvl}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GameStats',
  components: {
  },
  data() {
    return {
      id1: null,
      id1_k: '',
      id1_d: '',
      id1_a: '',
      id1_cs:'',
      id1_vs:'',
      id1_img: '',
      id1_champName: '',
      id2: '',
      id2_k: '',
      id2_d: '',
      id2_a: '',
      id2_cs:'',
      id2_vs:'',
      id2_img: '',
      id2_champName: '',
      id3: '',
      id3_k: '',
      id3_d: '',
      id3_a: '',
      id3_cs:'',
      id3_vs:'',
      id3_img: '',
      id3_champName: '',
      id4: '',
      id4_k: '',
      id4_d: '',
      id4_a: '',
      id4_cs:'',
      id4_vs:'',
      id4_img: '',
      id4_champName: '',
      id5: '',
      id5_k: '',
      id5_d: '',
      id5_a: '',
      id5_cs:'',
      id5_vs:'',
      id5_img: '',
      id5_champName: '',
      id6: null,
      id6_k: '',
      id6_d: '',
      id6_a: '',
      id6_cs:'',
      id6_vs:'',
      id6_img: '',
      id6_champName: '',
      id7: '',
      id7_k: '',
      id7_d: '',
      id7_a: '',
      id7_cs:'',
      id7_vs:'',
      id7_img: '',
      id7_champName: '',
      id8: '',
      id8_k: '',
      id8_d: '',
      id8_a: '',
      id8_cs:'',
      id8_vs:'',
      id8_img: '',
      id8_champName: '',
      id9: '',
      id9_k: '',
      id9_d: '',
      id9_a: '',
      id9_cs:'',
      id9_vs:'',
      id9_img: '',
      id9_champName: '',
      id10: '',
      id10_k: '',
      id10_d: '',
      id10_a: '',
      id10_cs:'',
      id10_vs:'',
      id10_img: '',
      id10_champName: '',
      id1_lvl: '', 
      id2_lvl: '', 
      id3_lvl: '',  
      id4_lvl: '',  
      id5_lvl: '',  
      id6_lvl: '',  
      id7_lvl: '',  
      id8_lvl: '',  
      id9_lvl: '',  
      id10_lvl: '' 
    }
  },
  methods: {
    getSelectedChamp: function(event) {
      let id = event.target;
      let fallbackCounter = 0;
      while(fallbackCounter < 2 && !id.classList.contains("columnWrapper")){
        id = id.parentNode
        fallbackCounter++
      }
      this.$store.commit('updateSelectedPlayer' , {playerID: id.childNodes[0].id})
      for(let x of document.getElementsByClassName("columnWrapper")){
        if(!this.$store.state.selectedPlayer[x.childNodes[0].id - 1]){
          x.childNodes[0].style.backgroundColor = 'rgba(0, 0, 0, 0)'
        } else {
          if(id.childNodes[0].id>5){
            id.childNodes[0].style.backgroundColor = 'rgba(225, 57, 57, 0.6)'
          } else {
            id.childNodes[0].style.backgroundColor = 'rgba(57, 144, 225, 0.6)'
          }
        }
      }
      
    }
  },
  mounted() {
    this.id1 = this.$store.state.matchData.participants[0].summonerName
    this.id1_champName = this.$store.state.matchData.participants[0].championName
    this.id1_k = this.$store.state.matchData.participants[0].kills
    this.id1_d = this.$store.state.matchData.participants[0].deaths
    this.id1_a = this.$store.state.matchData.participants[0].assists
    this.id1_cs = this.$store.state.matchData.participants[0].totalMinionsKilled
    this.id1_vs = this.$store.state.matchData.participants[0].visionScore
    this.id2 = this.$store.state.matchData.participants[1].summonerName
    this.id2_champName = this.$store.state.matchData.participants[1].championName
    this.id2_k = this.$store.state.matchData.participants[1].kills
    this.id2_d = this.$store.state.matchData.participants[1].deaths
    this.id2_a = this.$store.state.matchData.participants[1].assists
    this.id2_cs = this.$store.state.matchData.participants[1].totalMinionsKilled
    this.id2_vs = this.$store.state.matchData.participants[1].visionScore
    this.id3 = this.$store.state.matchData.participants[2].summonerName
    this.id3_champName = this.$store.state.matchData.participants[2].championName
    this.id3_k = this.$store.state.matchData.participants[2].kills
    this.id3_d = this.$store.state.matchData.participants[2].deaths
    this.id3_a = this.$store.state.matchData.participants[2].assists
    this.id3_cs = this.$store.state.matchData.participants[2].totalMinionsKilled
    this.id3_vs = this.$store.state.matchData.participants[2].visionScore
    this.id4 = this.$store.state.matchData.participants[3].summonerName
    this.id4_champName = this.$store.state.matchData.participants[3].championName
    this.id4_k = this.$store.state.matchData.participants[3].kills
    this.id4_d = this.$store.state.matchData.participants[3].deaths
    this.id4_a = this.$store.state.matchData.participants[3].assists
    this.id4_cs = this.$store.state.matchData.participants[3].totalMinionsKilled
    this.id4_vs = this.$store.state.matchData.participants[3].visionScore
    this.id5 = this.$store.state.matchData.participants[4].summonerName
    this.id5_champName = this.$store.state.matchData.participants[4].championName
    this.id5_k = this.$store.state.matchData.participants[4].kills
    this.id5_d = this.$store.state.matchData.participants[4].deaths
    this.id5_a = this.$store.state.matchData.participants[4].assists
    this.id5_cs = this.$store.state.matchData.participants[4].totalMinionsKilled
    this.id5_vs = this.$store.state.matchData.participants[4].visionScore
    this.id6 = this.$store.state.matchData.participants[5].summonerName
    this.id6_champName = this.$store.state.matchData.participants[5].championName
    this.id6_k = this.$store.state.matchData.participants[5].kills
    this.id6_d = this.$store.state.matchData.participants[5].deaths
    this.id6_a = this.$store.state.matchData.participants[5].assists
    this.id6_cs = this.$store.state.matchData.participants[5].totalMinionsKilled
    this.id6_vs = this.$store.state.matchData.participants[5].visionScore
    this.id7 = this.$store.state.matchData.participants[6].summonerName
    this.id7_champName = this.$store.state.matchData.participants[6].championName
    this.id7_k = this.$store.state.matchData.participants[6].kills
    this.id7_d = this.$store.state.matchData.participants[6].deaths
    this.id7_a = this.$store.state.matchData.participants[6].assists
    this.id7_cs = this.$store.state.matchData.participants[6].totalMinionsKilled
    this.id7_vs = this.$store.state.matchData.participants[6].visionScore
    this.id8 = this.$store.state.matchData.participants[7].summonerName
    this.id8_champName = this.$store.state.matchData.participants[7].championName
    this.id8_k = this.$store.state.matchData.participants[7].kills
    this.id8_d = this.$store.state.matchData.participants[7].deaths
    this.id8_a = this.$store.state.matchData.participants[7].assists
    this.id8_cs = this.$store.state.matchData.participants[7].totalMinionsKilled
    this.id8_vs = this.$store.state.matchData.participants[7].visionScore
    this.id9 = this.$store.state.matchData.participants[8].summonerName
    this.id9_champName = this.$store.state.matchData.participants[8].championName
    this.id9_k = this.$store.state.matchData.participants[8].kills
    this.id9_d = this.$store.state.matchData.participants[8].deaths
    this.id9_a = this.$store.state.matchData.participants[8].assists
    this.id9_cs = this.$store.state.matchData.participants[8].totalMinionsKilled
    this.id9_vs = this.$store.state.matchData.participants[8].visionScore
    this.id10 = this.$store.state.matchData.participants[9].summonerName
    this.id10_champName = this.$store.state.matchData.participants[9].championName
    this.id10_k = this.$store.state.matchData.participants[9].kills
    this.id10_d = this.$store.state.matchData.participants[9].deaths
    this.id10_a = this.$store.state.matchData.participants[9].assists
    this.id10_cs = this.$store.state.matchData.participants[9].totalMinionsKilled
    this.id10_vs = this.$store.state.matchData.participants[9].visionScore

    this.id1_lvl = this.$store.state.matchData.participants[0].champLevel
    this.id2_lvl = this.$store.state.matchData.participants[1].champLevel
    this.id3_lvl = this.$store.state.matchData.participants[2].champLevel
    this.id4_lvl = this.$store.state.matchData.participants[3].champLevel
    this.id5_lvl = this.$store.state.matchData.participants[4].champLevel
    this.id6_lvl = this.$store.state.matchData.participants[5].champLevel
    this.id7_lvl = this.$store.state.matchData.participants[6].champLevel
    this.id8_lvl = this.$store.state.matchData.participants[7].champLevel
    this.id9_lvl = this.$store.state.matchData.participants[8].champLevel
    this.id10_lvl = this.$store.state.matchData.participants[9].champLevel

    axios.get(`${this.$store.state.requestChampionsUrl}${this.$store.state.matchData.participants[0].championName}`).then(result => {
      this.id1_img = this.$store.state.imageBaseUrl + result.data.image.full
    }).catch(err => {
      console.log(`An error occured.\n${err.message}`)
    }) 
    axios.get(`${this.$store.state.requestChampionsUrl}${this.$store.state.matchData.participants[1].championName}`).then(result => {
      this.id2_img = this.$store.state.imageBaseUrl + result.data.image.full
    }).catch(err => {
      console.log(`An error occured.\n${err.message}`)
    }) 
    axios.get(`${this.$store.state.requestChampionsUrl}${this.$store.state.matchData.participants[2].championName}`).then(result => {
      this.id3_img = this.$store.state.imageBaseUrl + result.data.image.full
    }).catch(err => {
      console.log(`An error occured.\n${err.message}`)
    }) 
    axios.get(`${this.$store.state.requestChampionsUrl}${this.$store.state.matchData.participants[3].championName}`).then(result => {
      this.id4_img = this.$store.state.imageBaseUrl + result.data.image.full
    }).catch(err => {
      console.log(`An error occured.\n${err.message}`)
    }) 
    axios.get(`${this.$store.state.requestChampionsUrl}${this.$store.state.matchData.participants[4].championName}`).then(result => {
      this.id5_img = this.$store.state.imageBaseUrl + result.data.image.full
    }).catch(err => {
      console.log(`An error occured.\n${err.message}`)
    }) 
    axios.get(`${this.$store.state.requestChampionsUrl}${this.$store.state.matchData.participants[5].championName}`).then(result => {
      this.id6_img = this.$store.state.imageBaseUrl + result.data.image.full
    }).catch(err => {
      console.log(`An error occured.\n${err.message}`)
    }) 
    axios.get(`${this.$store.state.requestChampionsUrl}${this.$store.state.matchData.participants[6].championName}`).then(result => {
      this.id7_img = this.$store.state.imageBaseUrl + result.data.image.full
    }).catch(err => {
      console.log(`An error occured.\n${err.message}`)
    }) 
    axios.get(`${this.$store.state.requestChampionsUrl}${this.$store.state.matchData.participants[7].championName}`).then(result => {
      this.id8_img = this.$store.state.imageBaseUrl + result.data.image.full
    }).catch(err => {
      console.log(`An error occured.\n${err.message}`)
    }) 
    axios.get(`${this.$store.state.requestChampionsUrl}${this.$store.state.matchData.participants[8].championName}`).then(result => {
      this.id9_img = this.$store.state.imageBaseUrl + result.data.image.full
    }).catch(err => {
      console.log(`An error occured.\n${err.message}`)
    }) 
    axios.get(`${this.$store.state.requestChampionsUrl}${this.$store.state.matchData.participants[9].championName}`).then(result => {
      this.id10_img = this.$store.state.imageBaseUrl + result.data.image.full
    }).catch(err => {
      console.log(`An error occured.\n${err.message}`)
    }) 
  }
}
</script>

<style scoped>
:root {
  --height: 
}
.panel-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px
}
.gamestats-wrapper {
  display: flex;
  min-height: 300px;
  height: 30vh;
  gap: 10px;
}
.separatorWrapper {
  display: flex;
  align-items: center;
  overflow: hidden;
}
.separator {
  background-color: rgb(var(--Font));
  box-shadow: 0 0 1em 1em rgb(var(--Font));
}
.middle {
  height: 100%;
  width: 2px;
}
.middle > .separator {
  height: 50%;
  width: 100%;
}
.panel {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: rgb(var(--HeaderBG));
}
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: 100%;
  padding: 10px;
  overflow: hidden;
}
.left {
  display: flex;
  justify-content: left !important;
  text-align: left !important;
  justify-self: left;
  align-self: center;
}
.right {
  display: flex;
  justify-content: right !important;
  text-align: right !important;
  justify-self: right;
  align-self: center;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.r1 {
  grid-row: 1;
}
.r2 {
  grid-row: 2;
}
.r3 {
  grid-row: 3;
}
.r4 {
  grid-row: 4;
}
.r5 {
  grid-row: 5;
}
.r6 {
  grid-row: 6;
}
.r7 {
  grid-row: 7;
}
.r8 {
  grid-row: 8;
}
.r-all{
  position: relative;
  grid-row: 1 / span 8;
  overflow: hidden;
}
.active {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: rgb(var(--ActiveSidebarEffect));
  box-shadow: 0 0 25px 2px rgb(var(--ActiveSidebarEffect));
  opacity: 0;
  bottom: 5px
}
.c1 {
  grid-column: 1;
}
.c2 {
  grid-column: 2;
}
.c3 {
  grid-column: 3;
}
.c4 {
  grid-column: 4;
}
.c5 {
  grid-column: 5;
}
.c6 {
  grid-column: 6;
}
.player-description {
  font-weight: 700;
  font-size: 0.9rem;
}
.stats {
  font-style: italic;
  font-weight: 100;
  font-size: 0.9rem;
}
.player-name {
  justify-self: center;
  align-self: last baseline;
  font-size: 0.9rem;
  padding: 0 5px
}
.columnWrapper{
  display: contents;
  cursor: pointer;
}
.columnWrapper > div {
  height: calc(100% + 30px);
  transform: translateY(-15px);
}
.columnWrapper:hover > div{
  background-color: rgba(224,224,224,0.3) !important;
}
.columnWrapper:active > div{
  background-color: rgba(224,224,224,0.6) !important;
}
.columnWrapper:hover > div > .active{
  opacity: 1;
}
.champ-img{
  height: 90%;
  align-self: end;
  justify-self: center;
}

</style>
