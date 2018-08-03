<template>
  <div id="app">
    <navigation-bar class="header" title="我是标题" :refresh="refresh"></navigation-bar>
    <router-view class='main-context'></router-view>
    <tab-bar class="footer" :tabBars="tabBars"></tab-bar>
  </div>
</template>
<script>
import TabBar from "@/views/layout/TabBar";
import NavigationBar from "@/views/layout/NavigationBar";
const tabBars = [
  {
    label: "提交",
    eventType: "click",
    disabled: false,
    callBack(vm) {
      console.log("点击，提交");
    }
  },
  {
    label: "取消",
    eventType: "dblclick",
    disabled: false,
    callBack(vm) {
      console.log("双击，取消");
    }
  }
];
export default {
  data() {
    return {
      tabBars
    };
  },
  components: {
    "navigation-bar": NavigationBar,
    "tab-bar": TabBar
  },
  methods: {
    refresh() {
      console.log("refresh success");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixins.scss";

#app {
  @include flex($direction: column);
}

.main-context {
  flex-grow: 1;
  overflow: hidden;
  overflow-y: auto;
}
</style>
