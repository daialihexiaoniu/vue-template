<template>
  <div class="wrap">
    <SideBar />

    <div class="main-container">
      <keep-alive>
        <NavBar />
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
import NavBar from './components/NavBar'
export default {
  name: 'Layout',
  components: {
    SideBar,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  position: relative;
  margin-left: 210px;
  min-height: 100%;
}

.app-main {
  background: #f0f2f5;
  padding: 32px;
  min-height: calc(100vh - 114px);
}
</style>
