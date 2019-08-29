<template>
  <el-container>
    <el-header>
      潮品商城后台
    </el-header>
    <div class="box">
      <router-view>
    </router-view>
    </div>
    <el-footer>
      <span class="footer-txt">
        <span id="footer_0_tCopyRight">©2019 潮品商贸有限公司 &nbsp;&nbsp; <a href="javascript:;">粤A2-20044005号</a>&nbsp;&nbsp;<a href="JavaScript:;">粤公网安备 44030702002388号</a></span></span>
    </el-footer>
  </el-container>
  
</template>
<script>
export default {
  name: 'index',
  data() {
    return {

    };
    methods:{

    }
  },

}

</script>
<style scoped>
  .box{
    min-height: 669px;
  }
.footer-txt a {
  color: #333;
  text-decoration: none;
}

.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}



.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body>.el-container {
  margin-bottom: 40px;
}

</style>
