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
          <span class="item-col">申请人</span>
          <span class="item-col  username"></span>
        </p>
        <p class="item-row">
          <span class="item-col">申请时间</span>
          <span class="item-col  approvetime"></span>
        </p>
        <ul class="taskbases">
          <li v-for="(item,index) in values" :key="index" class="taskbase-item">
            <div class="taskbase-row">
              <section class="info">
                <div class="user ellipsis">
                  <span class="department">{{item.department}}</span>
                  <span class="username">{{item.username}}</span>
                </div>
                <div class="status">{{item.status}}</div>
              </section>
              <section class="commet">
                <span>意见：</span>
                <span class="context">{{item.context}}</span>
              </section>
            </div>
          </li>
        </ul>
      </li>
    </div>
  </div>
</template>

<script>
import List from "list.js";

const values1 = [
  {
    department: "病假申请",
    username: "Stockholm",
    status: "1",
    context: "2018-03-14"
  },
  {
    department: "事假申请",
    username: "LLAZL",
    status: "2",
    context: "2018-05-03"
  },
  {
    department: "年假申请",
    username: "Stockholm",
    status: "3",
    context: "2018-07-22"
  }
];
export default {
  data() {
    return {
      values: values1
    };
  },
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
