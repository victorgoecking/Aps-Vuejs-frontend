<template>
  <div id="app">
    <navbar />
    <sidebar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style>

</style>
