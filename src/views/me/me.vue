<template>
  <div id="phone">
    <div class="me-container">
      <div class="me-head">
        与他聊天中...
      </div>
      <div class="me-body">
        <div class="msg-box" v-for="(item,index) in chat_msgs" key="item">
          <div :class="{'msg':true,'msg-left':item.position=='left','msg-right':item.position=='right'}">{{item.msg}}</div>
        </div>
      </div>
      <div class="me-footer" @click="showActions">
        说点什么...
      </div>

      <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible">
      </mt-actionsheet>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'me',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        actions: [{name: 'dada',method:this.test},{name:'sdsd'}],
        sheetVisible: false,
        chat_msgs:[{
            msg:"哈哈哈哈",
            position:"left"
        }]
      }
    },
    methods:{
        test(){
            this.chat_msgs.push({
                msg:"呵呵",
              position:"right"
            })
        },
      showActions(){
            this.sheetVisible=true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "me.less";
</style>
