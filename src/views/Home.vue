<template>
  <div class="home">
    <h3>项目初始化</h3>
    <h3>{{ msg }}</h3>
    <mt-button type="primary" @click="$router.push('/test')">To test</mt-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'vue + axios + mint-ui + scss + rem'
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios({
        url: 'getlunbo',
        method: 'get',
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    text-align: center;
    font-size: 20px;
  }
</style>
