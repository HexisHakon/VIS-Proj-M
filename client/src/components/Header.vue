<template>
    <div class="header">
        <div class="name">David Glombik</div>
        <div class="separator-wrapper">
            <div class="separator"></div>
            </div>
        <div class="account-lvl">Player</div>
        <div id="profile-picture-border" class="profile-picture-border">
        <div id="profile-picture" class="profile-picture-border">
            <img src="../assets/pb.png" class="image">
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  components: {
  }
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: right;
    align-items: center;
    height: 10vh;
    min-height: 50px;
    max-height: 150px;
    background-color: rgb(var(--HeaderBG));
    gap: 50px;
    filter: drop-shadow(0 0 3px black);
    z-index: 1;
}
.name {
    font-weight: 700;
    font-size: 1.4em;
}
.separator-wrapper{
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 1px;
    overflow: hidden;
}
.separator {
    position: absolute;
    height: 20%;
    width: 100%;
    background-color: rgb(var(--Font));
    box-shadow: 0 0 5px 5px rgb(var(--Font));
}
.account-lvl {
    font-weight: 100;
    font-size: 1.4em;
    font-style: italic;
}
#profile-picture-border{
    margin-right: 20px;
    height: 65%;
    width: auto;
    aspect-ratio: 1/1;
    background: linear-gradient(-45deg, rgba(var(--PB_Dark)),rgba(var(--PB_Green)), rgba(var(--PB_Dark)))
}

#profile-picture{
    height: 95%;
}

.profile-picture-border {
    border-radius: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.image{
    height: 100%;
}
</style>
