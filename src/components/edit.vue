<template>
  <div class="th">
    <el-page-header @back="goBack" content="商品编辑" style="margin: 20px;">
    </el-page-header>
    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="商品名">
        <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input type="text" v-model="ruleForm.descriptions" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品数量">
        <el-input-number v-model="ruleForm.quantity" :min="1" label="描述文字"></el-input-number>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input-number v-model="ruleForm.price" :min="1" label="描述文字"></el-input-number>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-input type="text" v-model="ruleForm.coverImg" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-select v-model="ruleForm.productCategory" placeholder="请选择商品分类">
          <el-option label="名鞋" value="5d63c6f5b91b9569e466eaa6"></el-option>
          <el-option label="箱包" value="5d63dd7fb91b9569e466eacb"></el-option>
          <el-option label="名表" value="5d63ddc5b91b9569e466eacc"></el-option>
          <el-option label="饰品" value="5d63dddeb91b9569e466eacd"></el-option>
          <el-option label="服装" value="5d63de03b91b9569e466eace"></el-option>
          <el-option label="眼镜" value="5d63de18b91b9569e466eacf"></el-option>
        </el-select>
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
    return {}
  },
  computed: {
    ruleForm() {
      return this.$store.state.editdata
    }

  },
  
  methods: {
    submitForm(formName) {
      let params = this.ruleForm;
      // console.log(params)
      this.$axios({
        method: 'put',
        url: `http://api.cat-shop.penkuoer.com/api/v1/admin/products/${params._id}`,
        data: params,
      }).then(res => {
          alert('商品修改成功!')
          this.$router.go(-1)
        },
        err => {
          alert('商品修改失败,请重试!')
        })
    },
    goBack() {
      this.$router.go(-1);
    },

  },
 
}

</script>
<style scoped>
.th {
  margin: 50px;
}

</style>
