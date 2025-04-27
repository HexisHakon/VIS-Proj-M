<template>
  <div class="main-wrapper heightfix">
    <PlayerSides />
    <GameStats />
    <Positioning :selectedPlayersArray="this.$store.state.selectedPlayer" />
  </div>
</template>

<script>
import PlayerSides from './PlayerSides.vue'
import GameStats from './GameStats.vue'
import Positioning from './Positioning.vue'

export default {
  name: 'Main',
  components: {
    PlayerSides,
    GameStats,
    Positioning
  }
}
</script>

<style scoped>
.main-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 14;
    padding: 0 10px;
    background-color: rgb(var(--MainBG));
    overflow-y: scroll;
    height: 100vh;
}
</style>
