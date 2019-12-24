<template>
  <div class="wrap">
    <SideBar />

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
import SideBar from './components/Sidebar'
export default {
  name: 'Layout',
  components: {
    SideBar
  }
}
</script>

<style lang="scss" scoped>
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
