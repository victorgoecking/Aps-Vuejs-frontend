<template>
  <div id="app">
    <sidebar />
    <navbar />
    <b-container class="bv-example-row mt-4">
        <b-row class="justify-content-md-center">
          <b-col col md="12">
            <router-view></router-view>
          </b-col>
        </b-row>
    </b-container>
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
