<template>
  <a href="#" v-on:click="active" class="button-wrapper">
      <div id="active"></div>
      <span id="initial">{{initial}}</span>
      <span>{{buttonName}}</span>
  </a>
</template>

<script>
export default {
  name: 'NavigationButon',
  props: {
      buttonName: String,
      initial: String
  },
  methods: {
      active: function (event) {
          console.log(event)
          alert(event)
      }
  }
}
</script>

<style scoped>
span {
    font-style: italic;
}

#active {
    opacity: 0;
    position: absolute;
    left: 0;
    background-color: rgb(var(--ActiveSidebarEffect));
    width: 2px;
    height: 100%;
    box-shadow: 0 0 25px 2px rgb(var(--ActiveSidebarEffect));
}

.button-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    opacity: 0.25;
    overflow: hidden;
    text-decoration: none;
    color: rgb(var(--Font))
}

#initial {
    font-weight: 900;
    font-size: 2.5rem;
    
}

.button-wrapper:hover {
    background-color: var(--ActiveSidebarBG);
    opacity: 1;
}

.button-wrapper:hover #active {
    opacity: 1;
}
</style>
