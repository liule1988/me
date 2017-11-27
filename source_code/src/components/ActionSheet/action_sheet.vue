<template>
  <div>
    <div :class="{'action-sheet':true,'show':show}">
      <div class="head">的撒大大</div>
      <div class="question"
           v-for="(item,index) in data"
           @click="handleClick(item.res,index)">{{item.content}}
      </div>
    </div>
    <div :class="{'action-mask':true,'action-mask-show':show}" @click="handleClick('mask')"></div>
  </div>
</template>

<script>
  export default{
    data(){
      return {}
    },
    props: ['data', 'show','disabled'],
    methods: {
      handleClick(key,index){
        this.$emit('itemClick',key,index)
      }
    }
  }
</script>

<style lang="less" scope>
  @import "action_sheet.less";
</style>
