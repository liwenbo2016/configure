<template>
  <div>
    test pages <span class="t">{{text}}</span>
    <icon-svg icon-class="add" class="icon"></icon-svg>
    <i class="cubeic-alert"></i>
    <div v-for="(item, i) of list" :key="i" class="list">{{item.name}}  {{item.time}}</div>
  </div>
</template>

<script>
import {getList, testPost} from '@/api/user'
export default {
  data () {
    return {
      text: 'hello ',
      list: []
    }
  },
  created () {
    getList().then(res => {
      console.log(res)
    })
    testPost().then(res => {
      console.log(res)
      this.list = res.array
    })
  }
}
</script>

<style lang="stylus" scoped>
.t
  color red
  font-size: 12px
.icon
  font-size 17px
.list
  font-size 14px
</style>
