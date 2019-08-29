<template>
  <div class="th">
    <el-page-header @back="goBack" content="订单编辑" style="margin: 20px;">
    </el-page-header>
    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="订单号">
        <el-input type="text" v-model="ruleForm.no" autocomplete="off" disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="支付状态">
        <!-- <el-input type="text" v-model="ruleForm.isPayed" autocomplete="off" ></el-input> -->
        <el-select v-model="ruleForm.isPayed" placeholder="请选择订单状态">
          <el-option label="已支付" value="true"></el-option>
          <el-option label="未支付" value="false"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收件人">
        <el-input type="text" v-model="ruleForm.receiver" autocomplete="off" disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="所在区域">
        <el-input v-model="ruleForm.regions" type="text" autocomplete="off" disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="ruleForm.address" type="text" autocomplete="off" disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input type="text" v-model="ruleForm.price" autocomplete="off" disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="订单ID">
        <el-input type="text" v-model="ruleForm._id" autocomplete="off" disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import api from '../api/more_api'

export default {
  data() {
    return {
      ruleForm: {}
    }
  },
  computed: {
    orderId() {
      return this.$store.state.orderEditId
    }

  },

  methods: {
    submitForm(formName) {
      let id = this.orderId;
      let params = this.ruleForm;
      this.$axios({
        method: 'put',
        url: `http://api.cat-shop.penkuoer.com/api/v1/admin/orders/${id}`,
        data: params,
      }).then(res => {
          // console.log(res)
          alert('修改成功!')
          this.$router.go(-1)
        },
        err => {
          alert('商品修改失败,请重试!')
        })
    },
    initOrder() {
      let id = this.orderId;
      // console.log(id)
      this.$axios({
        method: 'get',
        url: `http://api.cat-shop.penkuoer.com/api/v1/admin/orders/${id}`,
        // data:{isPayed:'true'}
      }).then(res => {
          // console.log(res.data)
          if(res.data.isPayed){
            res.data.isPayed='已支付'
          }else{
            res.data.isPayed='未支付'
          }
          this.ruleForm = res.data;
        },
        err => {console.log(err)})
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
