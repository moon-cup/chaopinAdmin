<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%;">
      <el-table-column prop="no" label="订单号">
      </el-table-column>
      <el-table-column prop="isPayed" label="订单状态">
      </el-table-column>
      <el-table-column prop="receiver" label="收件人">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
          <el-button @click="change(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="order_delete(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="midle">
      <el-pagination background layout="prev, pager, next" :total="total" :current-page="idx" @current-change="getPager">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import api from '../api/more_api'

export default {
  inject:['reload'],
  methods: {
    change(row) {
      // console.log(row)
      this.$store.state.orderEditId = row._id;
      this.$router.push('/orderEdit')
    },
    handleClick(row) {
      if (row.isPayed == true) {
        row.isPayed = '已支付'
      } else {
        row.isPayed = '未支付'
      }

      const h = this.$createElement;
      this.$msgbox({
        title: '订单详情',
        message: h('p', null, [
          h('span', null, '订单编号: '),
          h('span', { style: 'color: teal' }, `${row.no}`),
          h('p', null, [h('span', null, '订单ID: '),
            h('span', { style: 'color: teal' }, `${row._id}`)
          ]),
          h('p', null, [h('span', null, '收件人: '),
            h('span', { style: 'color: teal' }, `${row.receiver}`)
          ]),
          h('p', null, [h('span', null, '价格: '),
            h('span', { style: 'color: teal' }, `￥${row.price}`)
          ]),
          h('p', null, [h('span', null, '收货地址: '),
            h('span', { style: 'color: teal' }, `${row.address}`)
          ]),
          h('p', null, [h('span', null, '支付状态: '),
            h('span', { style: 'color: teal' }, `${row.isPayed}`)
          ]),
        ]),

        showCancelButton: false,
        confirmButtonText: '关闭',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = false;
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 1);
            }, 1);
          } else {
            done();
          }
        }
      })
    },
    
    order_delete(row){
      let _this=this;
       this.$axios({
        method: 'delete',
        url: `http://api.cat-shop.penkuoer.com/api/v1/admin/orders/${row._id}`
      }).then(res => {
        // console.log(res)
        alert('操作成功')
        this.tableData.pop(row);
        // console.log(this.pager,this.idx)
        if (this.tableData.length == 0) {
          this.idx = this.idx - 1;
        }
        _this.reload();
        this.getPager(this.idx);
      })
    },
    order(params) {
      api.getOrders(params).then(res => {
        let data = res.orders;
        // console.log(data)     
        for (var i in data) {
          let str = data[i].regions + data[i].address
          data[i].address = str;
          if(data[i].isPayed){
            data[i].isPayed = '已支付'
          }else{
            data[i].isPayed = '未支付'
          }
        }
        this.tableData = data;
        if (this.tableData.length == 0) {
          this.tableData.push({ no: '抱歉,暂无订单!' })
        }
        this.total = res.pages * 10;
      })
    },
    getPager(pager,evt) {
      // console.log(pager,evt)
      this.$store.state.yema=pager;
      this.params.page =pager;
      this.order(this.params);
    }
  },
  computed:{
    idx:function(){
      return this.$store.state.yema
    }
  },
  data() {
    return {
      tableData: [],
      total: 10,
      params: {
        per: 6, //   每一页显示的数量,默认10
        page: '', //  当前页码,默认1
      },

    }
  },
  created() {
    this.params.page=this.idx;
    this.order(this.params);
  },

}

</script>
<style scoped>
.midle {
  width: 425px;
  margin: 30px auto;
}

</style>
