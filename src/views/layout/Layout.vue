<template>
    <div class="wrap">
        <div class="sidebar-container">
            <el-menu default-active="1" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-s-tools"></i>
                        <span>导航一</span>
                    </template>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
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
        width: 235px;
        text-align: left;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        background: #304156;
    }
    .sidebar-container i {
        color: #bfcbd9;
    }
</style>