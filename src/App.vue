<template>
  <navigation-menu></navigation-menu>
  <br>
  <div class="">
    <div class="app">
      <router-view />
    </div>
    <footer-page></footer-page>
  </div>

</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue'
import FooterPage from './components/FooterPage.vue';
export default {
  components: {
   NavigationMenu,
    FooterPage
  },
  name: "App",
};
</script>

<style lang="scss">


</style>
