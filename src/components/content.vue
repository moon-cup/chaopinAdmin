<template>
  <div>
    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">商品上传</el-menu-item>
          <el-menu-item index="2-2">商品列表</el-menu-item>
          <el-menu-item index="2-3">用户管理</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="javaScript:;">订单管理</a></el-menu-item>
        <el-menu-item index="4" @click="stat">{{msg}}</el-menu-item>
      </el-menu>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import api from '../api/more_api'
export default {
  data() {
    return {
      activeIndex: '1',
      msg: '',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      this.$store.state.key=key;
      if (key == 1) {
        this.$router.push('/dealwith')
      } else if (key == '2-1') {
        this.$router.push('/proUpload')
      } else if (key == '2-2') {
        this.$router.push('/proList')
      } else if (key == '2-3') {
        this.$router.push('/userList')
      } else if (key == 3) {
        this.$router.push('/order')
      } else if (key == 4) {
        this.$router.push('/')
      }
    },
    lose() {
      if (localStorage.getItem('token')) {
        this.msg=`已登录，退出`
      }else{
        this.msg='未登录，请登录'
      }
    },
    stat(){
      if(this.msg=='已登录，退出'){
         localStorage.removeItem('token');
      }
      this.$router.push('/')
    }
  },
  created() {
    this.lose()
    this.activeIndex = this.$store.state.key;
  }
}

</script>
<style scoped>
a {
  text-decoration: none;
}

</style>
