<template>
  <div class="pl">
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item title="未处理订单" name="1">
        <div>抱歉</div>
        <div>暂无新订单!!!</div>
      </el-collapse-item>
      <el-collapse-item title="用户反馈" name="2">
        <div>抱歉</div>
        <div>暂无新消息!!!</div>
      </el-collapse-item>
      <el-collapse-item title="异常订单" name="3">
        <div>抱歉</div>
        <div>暂无异常!!!</div>
      </el-collapse-item>
      <el-collapse-item title="退换货申请" name="4">
        <div>抱歉</div>
        <div>暂无申请!!!</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  name: 'dealwith',
  data() {
    return {
      activeNames: ['1']
    };
  },
  methods: {
    handleChange(val) {
      // console.log(val);
    }
  }
}
</script>
<style scoped>
  .pl{
    padding: 0px 40px;
  }
</style>

