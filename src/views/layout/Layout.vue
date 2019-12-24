<template>
  <div class="wrap">
    <div class="sidebar-container">
      <el-menu
        default-active="1"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <router-link :to="{ name: 'dashboard' }">
          <el-menu-item index="1">
            <template slot="title">
              <i class="el-icon-s-home" />
              <span>首页</span>
            </template>
          </el-menu-item>
        </router-link>

        <router-link :to="{ name: 'canvas' }">
          <el-menu-item index="2">
            <i class="el-icon-menu" />
            <span slot="title">canvas</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </div>

    <div class="main-container">
      <keep-alive>
        <div class="navbar">
          <i class="el-icon-s-fold" />
          <el-breadcrumb class="app-breadcrumb" separator="/">
            <el-breadcrumb-item>
              <span>首页</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </keep-alive>
      <keep-alive>
        <section class="app-main">
          <keep-alive>
            <router-view />
          </keep-alive>
        </section>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  components: {}
}
</script>

<style lang="scss" scoped>
.sidebar-container {
  width: 210px;
  text-align: left;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: #304156;
  i {
    color: #bfcbd9;
  }
  .el-menu {
    border-right: 0;
  }
}
.main-container {
  position: relative;
  margin-left: 210px;
  min-height: 100%;
}
.navbar {
  line-height: 50px;
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.el-icon-s-fold {
  font-size: 24px;
  margin: 0 10px;
}
.app-breadcrumb {
  display: inline-block;
}

.app-main {
  background: #f0f2f5;
  padding: 32px;
  min-height: calc(100vh - 114px);
}
</style>
