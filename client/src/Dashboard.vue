<template>
  <div class="column-flex dashboard-wrapper heightfix">
    <!-- <Header /> -->
    <div class="row-flex">
        <!--<Sidebar />-->
        <Main />
    </div>
  </div>
</template>

<script>
/* import Header from './components/Header.vue' */
/* import Sidebar from './components/Sidebar.vue' */
import Main from './components/Main.vue'

export default {
  name: 'Dashboard',
  components: {
/*       Header, */
      /* Sidebar, */
      Main
  }
}
</script>

<style>
:root {
--HeaderBG: 30, 32, 41;
--SidebarBG: 26, 28, 36;
--ActiveSidebarBG: 22, 23, 26;
--ActiveSidebarEffect: 154, 166, 199;
--Font: 227, 230, 241;
--MainBG: 21, 23, 30;
--PB_Green: 140, 255, 102, 0.6;
--SpellLvlDisplay: 7, 235, 75;
--PB_Dark: 22, 23, 26, 0.6;
--BlueSide: 57, 144, 225;
--RedSide: 225, 57, 57;
--EventGraphBG: 35, 37, 46;
--SelectedChamp: 218, 227, 25;
}

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(var(--Font));
}

.column-flex {
    display: flex;
    flex-direction: column;
}

.row-flex {
  display: flex;
  flex-direction: row !important;
  flex: 1;
}

.heightfix {
    height: 100%;
}

.roundEdges {
  border-radius: 7px;
}

.box-shadow {
  box-shadow: 0 0 10px 0 #0006;
}
</style>
