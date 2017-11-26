<template>
  <div id="phone">
    <div class="me-container">
      <div class="me-head">
        与他聊天中...
      </div>
      <div class="me-body">
        <div class="msg-box" v-for="(item,index) in chat_msgs" key="item">
          <div :class="{'msg':true,'msg-left':item.position=='left','msg-right':item.position=='right'}">{{item.msg}}
          </div>
        </div>
      </div>
      <div class="me-footer" @click="showActions">
        说点什么...

      </div>
      <action-sheet :show="action_show" :data="action_data" v-on:itemClick="test1"/>

    </div>

  </div>
</template>

<script>
  import ActionSheet from '../../components/ActionSheet/action_sheet.vue'
  export default {
    name: 'me',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        actions: [{name: 'dada', method: this.test}, {name: 'sdsd'}],
        sheetVisible: false,
        chat_msgs: [],
        action_show: true,
        action_data: {
          title: '向我问点什么呢？',
          questions: [{
            q: '爱好',
            key: 'hobby'
          }]
        }
      }
    },
    components: {
      'action-sheet': ActionSheet
    },
    mounted(){
        let xx =[{
          msg: "你好哇",
          position: "left",
          type: 'text'
        }, {
          msg: "很高兴认识你",
          position: "left",
          type: 'text'
        }, {
          msg: "现在我们开始对话吧",
          position: "left",
          type: 'text'
        }];
        xx.map(item=>{
            setTimeout()
        })
    },
    methods: {
      chat(msg){
          setTimeout(()=>{this.chat_msgs.push(msg)},1500)
      },
      test(){
        this.chat_msgs.push({
          msg: "呵呵",
          position: "right"
        })
      },
      showActions(){
        this.action_show = true;
        console.log("hahah")
      },
      test1(){
        this.action_show = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "me.less";
</style>
