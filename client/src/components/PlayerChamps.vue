<template>
  <div class="playerChamps-wrapper">
      <div class="bg roundEdges">
        <div class="champBox roundEdges box-shadow" id="_1" @click="this.doSomething($event)">
          <img :src="id1_champImgURL" />
          <div class="champPlayerInfo">
            <span class="champ-name">{{id1_champName}}</span>
            <span class="player-name">{{id1_playerName}}</span>
          </div>
        </div>
        <div class="champBox roundEdges box-shadow" id="_2" @click="this.doSomething($event)">
          <img :src="id2_champImgURL" />
          <div class="champPlayerInfo">
            <span class="champ-name">{{id2_champName}}</span>
            <span class="player-name">{{id2_playerName}}</span>
          </div>
        </div>
        <div class="champBox roundEdges box-shadow" id="_3" @click="this.doSomething($event)">
          <img :src="id3_champImgURL" />
          <div class="champPlayerInfo">
            <span class="champ-name">{{id3_champName}}</span>
            <span class="player-name">{{id3_playerName}}</span>
          </div>
        </div>
        <div class="champBox roundEdges box-shadow" id="_4" @click="this.doSomething($event)">
          <img :src="id4_champImgURL" />
          <div class="champPlayerInfo">
            <span class="champ-name">{{id4_champName}}</span>
            <span class="player-name">{{id4_playerName}}</span>
          </div>
        </div>
        <div class="champBox roundEdges box-shadow" id="_5" @click="this.doSomething($event)">
          <img :src="id5_champImgURL" />
          <div class="champPlayerInfo">
            <span class="champ-name">{{id5_champName}}</span>
            <span class="player-name">{{id5_playerName}}</span>
          </div>
        </div>
      </div>
      <div class="bg roundEdges">
        <div class="champBox roundEdges box-shadow" id="_6" @click="this.doSomething($event)">
          <img :src="id6_champImgURL" />
          <div class="champPlayerInfo">
            <span class="champ-name">{{id6_champName}}</span>
            <span class="player-name">{{id6_playerName}}</span>
          </div>
        </div>
        <div class="champBox roundEdges box-shadow" id="_7" @click="this.doSomething($event)">
          <img :src="id7_champImgURL" />
          <div class="champPlayerInfo">
            <span class="champ-name">{{id7_champName}}</span>
            <span class="player-name">{{id7_playerName}}</span>
          </div>
        </div>
        <div class="champBox roundEdges box-shadow" id="_8" @click="this.doSomething($event)">
          <img :src="id8_champImgURL" />
          <div class="champPlayerInfo">
            <span class="champ-name">{{id8_champName}}</span>
            <span class="player-name">{{id8_playerName}}</span>
          </div>
        </div>
        <div class="champBox roundEdges box-shadow" id="_9" @click="this.doSomething($event)">
          <img :src="id9_champImgURL" />
          <div class="champPlayerInfo">
            <span class="champ-name">{{id9_champName}}</span>
            <span class="player-name">{{id9_playerName}}</span>
          </div>
        </div>
        <div class="champBox roundEdges box-shadow" id="_10" @click="this.doSomething($event)">
          <img :src="id10_champImgURL" />
          <div class="champPlayerInfo">
            <span class="champ-name">{{id10_champName}}</span>
            <span class="player-name">{{id10_playerName}}</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerChamps',
  components: {
  },
  props: {
      id1_champImgURL: String,
      id2_champImgURL: String,
      id3_champImgURL: String,
      id4_champImgURL: String,
      id5_champImgURL: String,
      id6_champImgURL: String,
      id7_champImgURL: String,
      id8_champImgURL: String,
      id9_champImgURL: String,
      id10_champImgURL: String,
      id1_champName: String,
      id2_champName: String,
      id3_champName: String,
      id4_champName: String,
      id5_champName: String,
      id6_champName: String,
      id7_champName: String,
      id8_champName: String,
      id9_champName: String,
      id10_champName: String,
      id1_playerName: String,
      id2_playerName: String,
      id3_playerName: String,
      id4_playerName: String,
      id5_playerName: String,
      id6_playerName: String,
      id7_playerName: String,
      id8_playerName: String,
      id9_playerName: String,
      id10_playerName: String
  },
  data() {
    return {
      
    }
  },
  methods: {
    doSomething: function(event) {
      let id = event.target;
      let fallbackCounter = 0;
      while(fallbackCounter < 3 && !id.classList.contains("champBox")){
        id = id.parentNode
        fallbackCounter++
      }
      const playerId = parseInt(id.id.substring(1,id.id.length))
      this.$store.commit('updateSelectedPlayer' , {playerID: playerId})
      for(let x of document.getElementsByClassName("champBox")){
        x.style.backgroundColor = 'rgb(30, 32, 41)'
      }
      id.style.backgroundColor = 'rgba(218, 227, 25, 0.3)'
    }
  },
}
</script>

<style scoped>
.playerChamps-wrapper {
  display: flex;
  gap: 10px;
  font-weight: 700;
  font-size: 2rem;
}
.bg {
  position: relative;
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  min-height: 70px;
  height: 9vh;
  gap: 10px;
  overflow: hidden;
}
.champBox {
  position: relative;
  display: flex;
  overflow: hidden;
  height: 100%;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  background-color: rgb(var(--HeaderBG));
}
.champBox:hover {
  background-color: rgb(var(--ActiveSidebarBG));
  box-shadow: inset 0 0 6px rgb(var(--ActiveSidebarEffect));
  cursor: pointer
}
.champBox > img {
  aspect-ratio: 1/1;
  height: 90%;
}
.champPlayerInfo {
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: calc(5% + 2px);
}
.champ-name {
  font-size: 0.75rem;
  font-weight: 700;
  text-shadow: 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 1px black, 0 0 1px black, 0 0 1px black
}
.player-name {
  font-size:0.65rem;
  font-weight: 500;
  font-style: italic;
  text-shadow: 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 1px black, 0 0 1px black, 0 0 1px black
}
#_1 {
  background-color: rgba(var(--SelectedChamp), 0.3);
}
</style>