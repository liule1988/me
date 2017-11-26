<template>
  <div>
    <div :class="{'action-sheet':true,'show':show}">
      <div class="head">{{data.title}}</div>
      <div class="question"
           v-for="item in data.questions"
           @click="handleClick(item.key)">{{item.q}}
      </div>
    </div>
    <div :class="{'action-mask':true,'action-mask-show':show}"></div>
  </div>
</template>

<script>
  export default{
    data(){
      return {}
    },
    props: ['data', 'show'],
    methods: {
      handleClick(key){
        this.$emit('itemClick')
      }
    }
  }
</script>

<style lang="less" scope>
  @import "action_sheet.less";
</style>
