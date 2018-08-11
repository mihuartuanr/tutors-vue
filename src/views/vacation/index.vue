<template>
  <div class="apply">
    <div class="controller">
      <button class="create btn">新建申请</button>
    </div>
    <div ref="hacker-list">
      <ul class="list"></ul>
    </div>
    <div style="display:none;">
      <li id="hacker-item" class="list-item">
        <h3 class="item-name type"></h3>
        <p class="item-row">
          <span class="item-col">申请人：</span>
          <span class="item-col  username"></span>
        </p>
        <p class="item-row">
          <span class="item-col">申请时间：</span>
          <span class="item-col  approvetime"></span>
        </p>
      </li>
    </div>
  </div>
</template>

<script>
import List from "list.js";

export default {
  mounted() {
    const options = {
        item: "hacker-item",
        valueNames: ["type", "username", "approvetime"]
      },
      values = [
        {
          type: "病假申请",
          username: "Stockholm",
          approvetime: "2018-03-14"
        },
        {
          type: "事假申请",
          username: "LLAZL",
          approvetime: "2018-05-03"
        },
        {
          type: "年假申请",
          username: "Stockholm",
          approvetime: "2018-07-22"
        }
      ];

    var hackerList = new List(this.$refs["hacker-list"], options, values);
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/index.scss";
@import "@/styles/list.scss";
</style>
