<template>
  <div class="sidebar-wrapper heightfix box-shadow">
      <div class="sidebar box-shadow">
        <NavigationButton buttonName="Dashboard" initial="D"/>
        <NavigationButton buttonName="Player" initial="P"/>
        <NavigationButton buttonName="Gold" initial="G"/>
        <NavigationButton buttonName="Positioning" initial="P"/>
        <NavigationButton buttonName="Itemization" initial="I"/>
        <NavigationButton buttonName="Champions" initial="C"/>
      </div>
  </div>
</template>

<script>
import NavigationButton from './NavigationButton.vue'

export default {
  name: 'Sidebar',
  components: {
    NavigationButton
  }
}
</script>

<style scoped>
.sidebar-wrapper {
    display: flex;
    flex: 1;
    background-color: rgb(var(--SidebarBG));
    z-index: 0;
}
.sidebar {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
}
</style>
