<template>
      <section class="login-bgimg">
        <aside class="login">
          <div class="title">欢迎登录</div>
          <div class="login-form">
            <div class="login-form-group">
                <label>用户名：</label>
                <div class="login-input">
                  <input type="text" v-model="loginForm.userName"/>
                </div>
            </div>
            <div class="login-form-group">
              <label>密码：</label>
              <div class="login-input">
                <input type="password" v-model="loginForm.password"/>
              </div>
            </div>
            <div class="login-button">
              <a @click="login">登录</a>
            </div>
          </div>
        </aside>
      </section>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
        name: "login",
        data(){
          return{
             loginForm:{
               userName:null,
               password:null
             }
          }
        },
      methods:{
        ...mapActions([
          'handlstaffeLogin',
          'getUserInfo'
        ]),
       login(){
          let auth=this.handlstaffeLogin(this.loginForm)
          if(auth){
            this.$router.push('/home')
          }
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .login-bgimg{
      width: 100vw;
      height: 100vh;
      background: url("/static/img/loginImg/login_bg.jpg") no-repeat center;
      background-size:100% ;
    }
    .login{
      position: absolute;
      border-radius: 5px;
      transform: translate(0,60%);
      top: 25vh;
      right: 4vw;
      background: white;
      box-shadow: 0px 0px 5px 1px #525050;
    }
    .title{
          margin: 15px;
    }
    .login-form{
      padding: 10px 0 20px;
        input{
          border: none;
          outline: 0;
        }
        label{
          float: left;
          position: relative;
          top: 5px;
        }
      .login-form-group{
        margin-right: 15px;
        margin-left: 15px;
        margin-bottom: 20px;
      }
        .login-input{
          border: 1px solid #ccc;
          width: 190px;
          margin-left: 60px;
          padding: 5px 10px;
          border-radius: 5px;
        }
      .login-button{
        text-align: center;
        a{
          border-radius: 5px;
          margin: 0 15px;
          padding: 5px 0;
          background: #2d8cf0;
          display: block;
          color: white;
          cursor: pointer;
          &:hover{
             background: #2574c7;
          }
        }
      }
    }
</style>
