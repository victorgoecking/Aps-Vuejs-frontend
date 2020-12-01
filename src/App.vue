<template>
  <div id="app">
    <sidebar-fixed />
    <navbar />
    <router-view></router-view>
    <sidebar />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SidebarFixed from './components/SidebarFixed'
export default {
  components: {
    Navbar,
    Sidebar,
    SidebarFixed
  }
}
</script>

<style>
</style>
