<template>
  <div>list view</div>
</template>
<script>
export default {
  beforeCreate(){
    this.$store.dispatch('requestApplications');
  }
}
</script>
