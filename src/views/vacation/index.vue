<template>
  <div class="apply">
    <div class="controller">
      <button class="create btn">新建申请</button>
    </div>
    <div ref="hacker-list">
      <ul class="list"></ul>
    </div>
    <div style="display:none;">
      <li id="hacker-item">
        <h3 class="name"></h3>
        <p class="city"></p>
      </li>
    </div>
  </div>
</template>
<script type="template">

</script>

<script>
import List from "list.js";

export default {
  mounted() {
    const options = {
        item: "hacker-item",
        valueNames: ['name', 'city'],
      },
      values = [
        { name: "Jonny", city: "Stockholm" },
        { name: "Jonas", city: "Berlin" }
      ];

    var hackerList = new List(this.$refs["hacker-list"], options, values);
  }
};
</script>
