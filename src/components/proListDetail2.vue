<template>
  <div>
    <div class="fbox"></div>
    <el-table :data="tableData" stripe style="width: 100%;">
      <el-table-column prop="_id" label="商品id">
      </el-table-column>
      <el-table-column prop="name" label="商品分类">
      </el-table-column>
      <el-table-column prop="descriptions" label="商品描述">
      </el-table-column>
      <el-table-column prop="price" label="商品价格">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="primary" size="small">编辑</el-button>
          <el-button @click="getdetail(scope.row)" type="primary" style="margin-left: 16px;" size="small">详情</el-button>
          <el-button @click="delate(scope.row)" type="primary" size="small">下架</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="midle">
      <el-pagination background layout="prev, pager, next" :total="total" :current-page="indx" @current-change="getPage">
      </el-pagination>
    </div>
    <div>
      <el-drawer title="商品详情" :visible.sync="drawer" :direction="direction">
        <div style="padding:20px;">
          <div style="">
            <img :src="detail.coverImg" style="width: 300px">
          </div>
          <div style="width: 300px;">
            <h4>{{detail.descriptions}}</h4>
            <p>商品编号: {{detail._id}}</p>
            <p>价格: {{detail.price}}</p>
            <p>库存: {{detail.quantity}}</p>
            <el-button @click="$router.push('/editPro')" type="primary" size="small">编辑</el-button>
          </div>
        </div>
      </el-drawer>
    </div>
  </div>
</template>
<script>
import api from '../api/more_api'

export default {

  props: {
    actname: String,
    required: true
  },
  data() {
    return {
      tableData: [],
      total: 10,
      pager: '',
      drawer: false,
      direction: 'ltr',
      detail: [],
    }
  },
  computed:{
    name(){
      return this.$store.state.name
    },
     indx:function(){
      return this.$store.state.yema2
    }
  },
  methods: {
    getdetail(row) {
      this.drawer = true
      // console.log(row)
      this.detail = row;

    },
    getproduct(page) {
      api.getPros({ per: 5,page:page,name:this.name+'类+'}).then(res => {
        // console.log(res)
        this.tableData = res.products
        this.total = res.pages * 10;

      })
    },
    edit(detail) {
      // console.log(detail._id)
      
      this.$store.state.editdata = detail
      this.$router.push('/editPro');

    },
    getPage(page) {
      this.pager = page;
      // console.log(this.pager,page)
      this.$store.state.yema2=page;
      api.getPros({ per: 5, page: page,name:this.name+'类+' }).then(res => {
        // console.log(res)
        this.tableData = res.products
        this.total = res.pages * 10;

      })
    },
    delate(row) {
      // console.log(row._id)
      this.$axios({
        method: 'delete',
        url: `http://api.cat-shop.penkuoer.com/api/v1/admin/products/${row._id}`
      }).then(res => {
        // console.log(res)
        alert('商品下架成功')
        this.tableData.pop(row)
        if (this.tableData.length == 0) {
          this.indx = this.indx - 1;
        }
        this.getPage(this.indx)

      })
    }
  },
  created() {
    this.getproduct(this.indx);
  }
}

</script>
<style scoped>
.midle {
  width: 420px;
  margin: 30px auto;
}

.fbox {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  background: #666;
  opacity: 0.5;
  display: none;
}

</style>
