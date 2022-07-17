<template>
  <div class="side-wrapper">
      <div class="side-wrapper bg roundEdges box-shadow" :id="this.$store.state.matchData.teams[0].win ? 'win-blue' : 'loss-blue'">
        <div class="active active-left"></div>
        <div id="blueside" class="circle"></div>
        <span>BLAUES TEAM</span>
      </div>
      <div class="side-wrapper bg roundEdges box-shadow" :id="this.$store.state.matchData.teams[1].win ? 'win-red' : 'loss-red'">
        <div class="active active-right"></div>
        <div id="redside" class="circle"></div>
        <span>ROTES TEAM</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerSides',
  components: {
  }
}
</script>

<style scoped>
.side-wrapper {
  display: flex;
  gap: 10px;
  font-weight: 700;
  font-size: 2rem;
  margin-top: 5px;
}
.circle {
  height: 30%;
  width: auto;
  margin-right: 10px;
  aspect-ratio: 1/1;
  border-radius: 100%;
  box-shadow: 0 0 0 4px #1e2029, 0 0 0 5px rgb(var(--Font));
}
#blueside {
  background-color: rgb(var(--BlueSide));
}
#redside {
  background-color: rgb(var(--RedSide));
}
.active {
    opacity: 0;
    position: absolute;
    background-color: rgb(var(--ActiveSidebarEffect));
    width: 2px;
    height: 100%;
    box-shadow: 0 0 25px 2px rgb(var(--ActiveSidebarEffect));
}
.active-left {
  left: 0;
}
.active-right {
  right: 0;
}
.bg {
  position: relative;
  display: flex;
  flex: 1;
  background-color: rgb(var(--HeaderBG));
  justify-content: center;
  align-items: center;
  min-height: 75px;
  height: 10vh;
  max-height: 125px;
  overflow: hidden
}
.bg:hover {
  cursor: pointer;
}
.bg:hover .active {
    opacity: 1;
}
#win-blue {
  background-color: hsla(209, 74%, 55%, 0.6)
}
#loss-blue{
  background-color: hsla(209, 74%, 55%, 0.1)
}
#win-red {
  background-color: hsla(0, 74%, 55%, 0.6)
}
#loss-red{
  background-color: hsla(0, 74%, 55%, 0.1)
}
</style>
