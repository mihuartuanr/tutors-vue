<template>
  <footer class="tab-bar" v-if="isRender">
    <div class="tab-button" v-for="tab in tabBars" :key="tab.label">
      <template>
        <tab-button :el="$parent" :disabled="tab.disabled" :event="tab.eventType" :callBack="tab.callBack">
          <span>{{tab.label}}</span>
        </tab-button>
      </template>
    </div>
  </footer>
</template>
<script>
  const tabButton = {
    render(createElement) {
      return createElement(
        'button',
        {
          "class": this.className,
          on: {
            [this.event]: this.tabClick,
          },
        },
        this.$slots.default, //指代<span>{{tab.label}}</span>
      )
    },
    props: ['event', 'callBack', 'disabled','el'],
    computed: {
      className() {
        return this.disabled ? 'tab-label disabled' : 'tab-label';
      }
    },
    methods: {
      tabClick() {
        if (this.disabled) return;
        this.callBack && this.callBack(this.el)
      }
    }
  }
  export default {
    components: {
      'tab-button': tabButton
    },
    props: ['tabBars'],
    computed: {
      isRender() {
        const isRender = _.isArray(this.tabBars) && this.tabBars.length !== 0;
        return isRender;
      },
    },
  }
</script>
<style lang="scss" scoped>
  @import '@/styles/constants.scss';
  @import '@/styles/mixins.scss';
  @import '@/styles/tab-bar.scss'
</style>
