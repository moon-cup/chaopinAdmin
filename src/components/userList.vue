<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%;">
      <el-table-column prop="userName" label="用户名">
      </el-table-column>
      <el-table-column prop="_id" label="用户编号">
      </el-table-column>
      <el-table-column prop="password" label="用户密码">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
          <el-button @click="change(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="midle">
      <el-pagination background layout="prev, pager, next" :total="total" :current-page="indx" @current-change="getPager">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import api from '../api/more_api'

export default {

  methods: {
    change(row) {
      // console.log(row._id)
      this.$store.state.userEditId = row._id;
      this.$router.push('/userEdit')
    },
    handleClick(row) {
      // console.log(row)
      if (row.adress) {
      }else{
        row.adress = '用户暂未设置地址'
      }
      const h = this.$createElement;
      this.$msgbox({
        title: '用户详情',
        message: h('p', null, [
          h('span', null, '用户名: '),
          h('span', { style: 'color: teal' }, `${row.userName}`),
          h('p', null, [h('span', null, '用户ID: '),
            h('span', { style: 'color: teal' }, `${row._id}`)
          ]),
          h('p', null, [h('span', null, '用户密码: '),
            h('span', { style: 'color: teal' }, `${row.password}`)
          ]),
          h('p', null, [h('span', null, '用户昵称: '),
            h('span', { style: 'color: teal' }, `${row.nickName}`)
          ]),
          h('p', null, [h('span', null, '用户地址: '),
            h('span', { style: 'color: teal' }, `${row.adress}`)
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

    order(params) {
      api.getUsers(params).then(res => {
        let data = res.users;
        for (var i in data) {
          let str = data[i].regions + data[i].address
          data[i].address = str;
        }
        this.tableData = data;
        if(this.tableData.length==0){
          this.tableData.push({no:'抱歉,暂无用户!'})
        }
        this.total = res.pages * 10;
      })
    },
    getPager(pager) {
      this.params.page = pager
      this.$store.state.userYema=pager;
      this.order(this.params);
    }
  },

  data() {
    return {
      tableData: [],
      total: 10,
      params: {
        per: '6', //   每一页显示的数量,默认10
        page: '', //  当前页码,默认1
      },

    }
  },
  computed:{
    indx:function(){
      return this.$store.state.userYema
    }
  },
  created() {
    this.params.page=this.indx;
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
