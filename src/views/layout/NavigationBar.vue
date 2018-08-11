<template>
  <header class="navigation_bar">
    <button @click="goBack" class="navigation_back">
      <i class="arrow"></i>
      <span class="back_tip">关闭</span>
    </button>
    <h2 v-if="hasTitle" class="navigation_title">{{title}}</h2>
    <slot>
      <button class="refresh" @click="onRefresh">刷新</button>
    </slot>
  </header>
</template>
<script>
  /**
   * @title：头部标题；
   * @refresh：刷新处理函数；
   */
  export default {
    props: ['title', 'refresh'],
    computed: {
      hasTitle() {
        return !!(this.title && this.title.trim());
      },
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      onRefresh() {
        this.refresh();
      },
    },
  }
</script>
<style lang="scss" scoped>
@import "@/styles/index.scss";

@import "@/styles/navigation-bar.scss";
</style>

