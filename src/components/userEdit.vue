<template>
  <div class="th">
    <el-page-header @back="goBack" content="编辑" style="margin: 20px;">
    </el-page-header>
    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="头像">
        <el-input type="text" v-model="ruleForm.avatar" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input type="text" v-model="ruleForm.nickName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="ruleForm.password" type="text" autocomplete="off"></el-input>
      </el-form-item>
      <!-- <el-form-item label="地址">
        <el-input v-model="ruleForm.address" type="text" autocomplete="off" disabled="disabled"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import api from '../api/more_api'
import axios from 'axios'
export default {
  data() {
    return {
      ruleForm: {}
    }
  },
  computed: {
    userEditId() {
      return this.$store.state.userEditId
    }

  },
  // inject:['reload'],
  methods: {
    submitForm(formName) {
      let _this=this;
      let id = this.userEditId;
      let params = this.ruleForm;
      let password = this.ruleForm.password;
      let obj = {
        get1: function() {
          return axios({
            method: 'put',
            url: `http://api.cat-shop.penkuoer.com/api/v1/admin/users/${id}`,
            data: params,
          })
        },
        get2: function() {
          return axios({
            method: 'put',
            url: `http://api.cat-shop.penkuoer.com/api/v1/admin/users/reset_pwd/${id}`,
            data: {password},
          })
        }
      };
      axios.all([obj.get1(),obj.get2()]).then((res)=>{
        alert('修改成功');
        this.$router.go(-1);
        // _this.reload();
      }).catch((err)=>{
        alert('修改失败,请重试')
      })
    },
    initOrder() {
      let id = this.userEditId;
      // console.log(id)
      this.$axios({
        method: 'get',
        url: `http://api.cat-shop.penkuoer.com/api/v1/admin/users/${id}`,
      }).then(res => {
          // console.log(res.data)
          this.ruleForm = res.data;
        },
        err => { console.log(err) })
    },

    goBack() {
      this.$router.go(-1);
    },

  },
  created() {
    this.initOrder()
  }
}

</script>
<style scoped>
.th {
  margin: 50px;
}

</style>
