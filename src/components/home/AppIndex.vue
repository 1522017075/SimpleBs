<template>
  <div style="margin-top: 40px">
    <side-menu id="side-menu"></side-menu>
    <div class="home">
      <div id="header-div">
        <div style="width:600px">
          <MyInfoManage></MyInfoManage>
        </div>
        <carousel></carousel>
      </div>
      <update-card id="update-card"></update-card>
    </div>
  </div>
</template>

<script>
    import Carousel from './Carousel'
    import UpdateCard from './UpdateCard'
    import SideMenu from './SideMenu'
    import MyInfoManage from "./MyInfoManage";

    export default {
        name: 'AppIndex',
        components: {Carousel, UpdateCard, SideMenu, MyInfoManage}
    }
</script>

<style scoped>
  .home {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -20px;
  }

  #header-div {
    padding-bottom: 20px;
    padding-left: 5px;
    background-color: white;
  }

  #side-menu {
    position: fixed;
    margin-left: 50%;
    left: -680px;
    top: 100px;
  }
</style>
