<template>
  <div class="navbar">
    <i class="el-icon-s-fold" />
    <el-breadcrumb class="app-breadcrumb" separator="/">
      <el-breadcrumb-item>
        <span>{{ route.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    route() {
      return this.$route
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  line-height: 50px;
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .el-icon-s-fold {
    font-size: 24px;
    margin: 0 10px;
    cursor: pointer;
  }
  .app-breadcrumb {
    display: inline-block;
  }
}
</style>
