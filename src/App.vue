<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--    </div>-->
    <Header />
    <Home />

<!--    <router-view/>-->
  </div>
</template>

<script>
  import Header from '@/components/Header/Header';
  import Home from '@/views/Home';

  export default {
    components:{
      Header,
      Home
    }
  }
</script>

<style lang="scss">

</style>
