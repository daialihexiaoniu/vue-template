<template>
  <div class="sidebar-container">
    <div class="naver-container">
      <div>主题名称</div>
    </div>
    <el-menu
      :default-active="$route.path"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      class="menu-container"
    >
      <router-link v-for="(item, index) in router" :key="index" :to="item.path+'/'+item.children[0].path">
        <el-menu-item :index="item.path+'/'+item.children[0].path">
          <template slot="title">
            <i :class="item.children[0].meta.icon" />
            <span>{{ item.children[0].meta.title }}</span>
          </template>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  computed: {
    router() {
      return this.$router.options.routes
    }
  }
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

  .naver-container {
    position: fixed;
    background-color: #1e2e42;
    z-index: 1002;
    height: 50px;
    line-height: 50px;
    top: 0;
    left: 0;
    width: 210px;
    font-size: 17px;
    color: aliceblue;
    transition-duration: 0.28s;

    div {
      width: 100%;
      text-align: center;
    }

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-top: 10px;
    }
  }
  .menu-container {
    margin-top: 50px;
  }
}
</style>
