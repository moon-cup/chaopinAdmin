<template>
  <div class="box1">
    <div>
      <el-input placeholder="请输入帐号" v-model="userName">
        <template slot="prepend">帐号:</template>
      </el-input>
    </div>
    <div style="padding:10px;"></div>
    <div>
      <el-input placeholder="请输入密码" v-model="password" show-password>
        <template slot="prepend">密码:</template>
      </el-input>
    </div>
    <div class="center">
      <el-button type="success" medium @click='lg()'>登录</el-button>
    </div>
  </div>
</template>
<script>
import api from '../api/more_api'
export default {
  name: 'login',
  data() {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    lg() {
      let params = { userName: this.userName, password: this.password }
      api.getLogin(params).then(res => {
        // console.log(res.code)
        if (res.code == 'success') {
          alert('登录成功');
          localStorage.setItem('token',res.token)
          this.$router.push({ path: '/index' })
        } else {
          alert('用户名或密码错误!')
        }
      });
    }
  }

}

</script>
<style scoped>
.box1 {
  width: 300px;
  height: 200px;
  margin: 50px auto;
  padding: 50px 30px;
  background: #409EFF;
}

.center {
  width: 70px;
  margin: 25px auto 0;
}

.msg {
  text-align: center;
  color: #666;
  font-size: 14px;
}

.msg a {
  text-decoration: none;
  padding: 0 5px;
}

</style>
