<template>
  <div id="phone">
    <div class="me-container">
      <div class="me-head">
        与他聊天中...
      </div>
      <div class="me-body" id="chatContent">
        <div class="msg-box" v-for="(item,index) in chat_msgs" key="item">
          <div :class="{'msg':true,'msg-left':item.type=='me','msg-right':item.type=='user'}">{{item.content}}
          </div>
        </div>
      </div>
      <div :class="{'me-footer':true,'me-footer-disabled':footer_disabled}" @click="showActions">
        {{footer_text}}
      </div>
      <action-sheet :show="action_show" :data="action_data" v-on:itemClick="receiveFromChild"/>

    </div>

  </div>
</template>

<script>
  import ActionSheet from '../../components/ActionSheet/action_sheet.vue'
  const DEFAULT_TEXT = 'hahaha'
  import chat_data from '../../../static/chat.json'
  export default {
    name: 'me',
    data () {
      return {
        footer_text: DEFAULT_TEXT,
        chat_msgs: [],
        action_show: false,
        action_data: [],
        footer_disabled: true
      }
    },
    components: {
      'action-sheet': ActionSheet
    },
    mounted(){

      let start_chat = chat_data["0000"];
      this.chat_from_me(start_chat)
    },
    methods: {
      chat_from_me(msg_data){
        this.chat_delay(msg_data.msg);
        this.action_data = chat_data[msg_data.res].msg
      },
      chat_from_user(msg_data){
        this.chat_delay(msg_data);
      },
      /**
       *
       * @param key 子组件action item传递的下一个对话的key值
       * @param index action sheet 点击的index
       */
      receiveFromChild(key, index){
        if (key == 'mask') {
          this.action_show = false
        }
        this.action_show = false;
        let user_msg = [];
        let cur_user_msg = this.action_data[index];
        user_msg.push(cur_user_msg)
        this.chat_from_user(user_msg)
        this.chat_from_me(chat_data[key])
      },
      chat_push(msg){

        this.chat_msgs.push(msg)
        let chatContent = document.getElementById("chatContent");
        setTimeout(() => {
          chatContent.scrollTo(0, chatContent.scrollHeight)
        },0)
      },
      chat_delay(msg_arr){
        const len = msg_arr.length;
        if (msg_arr[0].type == 'me') {
          this.footer_disabled = true;
          for (let i = 0; i < len; i++) {
            this.footer_text = '正在输入...';
            setTimeout(() => {
              this.chat_push(msg_arr[i]);
            }, (i + 1) * 1000);
          }
          setTimeout(() => {
            this.footer_text = DEFAULT_TEXT;
            this.footer_disabled = false;

          }, len * 1000)
        } else {
          this.chat_push(msg_arr[0])
        }

      },
      showActions(){
        if (!this.footer_disabled) {
          this.action_show = true;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "me.less";
</style>
