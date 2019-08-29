<template>
  <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="全部商品" name="1">
      <router-view :actname="activeName"></router-view>
    </el-tab-pane>
    <el-tab-pane label="名鞋" name="2">
      <router-view :actname="activeName"></router-view>
    </el-tab-pane>
    <el-tab-pane label="箱包" name="3">
      <router-view :actname="activeName"></router-view>
    </el-tab-pane>
    <el-tab-pane label="名表" name="4">
      <router-view :actname="activeName"></router-view>
    </el-tab-pane>
    <el-tab-pane label="饰品" name="5">
      <router-view :actname="activeName"></router-view>
    </el-tab-pane>
    <el-tab-pane label="服装" name="6">
      <router-view :actname="activeName"></router-view>
    </el-tab-pane>
    <el-tab-pane label="眼镜" name="7">
      <router-view :actname="activeName"></router-view>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: '1',
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab.name, this.activeName);
      switch (this.activeName) {
        case '1':
          this.$router.push('/proListDetail')
          break;
        case '2':
          this.$store.state.name = '鞋'
          this.$router.push('/proListDetail1')
          break;
        case '3':
          this.$store.state.name = '箱包'
          this.$router.push('/proListDetail2')
          break;
        case '4':
          this.$store.state.name = '名表'
          this.$router.push('/proListDetail3')
          break;
        case '5':
          this.$store.state.name = '饰品'
          this.$router.push('/proListDetail4')
          break;
        case '6':
          this.$store.state.name = '服装'
          this.$router.push('/proListDetail5')
          break;
        case '7':
          this.$store.state.name = '眼镜'
          this.$router.push('/proListDetail6')
          break;
      }
    },
  },
  created() {
    this.$router.push('/proListDetail')
  }
}

</script>
