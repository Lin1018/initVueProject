<template>
  <div class="hello">
    <h3>项目初始化</h3>
    <h3>{{ msg }}</h3>
    <mt-button type="primary" @click="$router.push('/test')">To test</mt-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'vue + mint-ui + scss + rem'
    }
  }
}
</script>

<style lang="scss" scoped>
  .hello {
    text-align: center;
    font-size: 20px;
  }
</style>
