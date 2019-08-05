<template>
  <div id="app">
    <p class="test">测试文字</p>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import API from './assets/js/api'

export default {
  name: 'App',
  data () {
    return {
      msg: 'xqgao'
    }
  },
  mounted () {
    this.showUser()
  },
  methods: {
    showUser () {
      API.getUser()
        .then(res => {
          console.log('res:', res)
        })
        .catch(err => {
          console.log('err:', err)
        })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .test{
    color: red
  }
}
</style>
