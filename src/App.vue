<template>
  <div id="app">
    <navigation-bar title="我是标题" :refresh="refresh"></navigation-bar>
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import TabBar from "@/views/layout/TabBar";
import NavigationBar from "@/views/layout/NavigationBar";
export default {
  components: {
    'navigation-bar': NavigationBar,
    'tab-bar':TabBar,
  },
  methods:{
    refresh(){
      console.log('refresh success');
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
