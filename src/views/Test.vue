<template>
  <div class="test">
    <h3>Test页面</h3>
    <mt-button type="primary" @click="$router.push('/')">To home</mt-button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .test {
    text-align: center;
    font-size: 20px;
  }
</style>
