
<template>
<div>

  <b-sidebar
    id="menu-sidebar"
    shadow
    backdrop backdrop-variant="light"
    aria-labelledby="menu-slidebar"
  >

    <div class="text-center mt-4">
      <b-navbar-brand href="https://www.doctum.edu.br/?home">
        <img src="../assets/doctum_logo.png" class="ml-4" width="80%" alt="doctum">
      </b-navbar-brand>
      <p class="text-muted mt-3 mb-0">Estudante</p>
      <b-list-group class="mt-3">
        
          
            <b-list-group-item class="item-menu-sidebar" href="/">Início</b-list-group-item>
            <b-list-group-item class="item-menu-sidebar" href="/register">Novo</b-list-group-item>
            <b-list-group-item class="item-menu-sidebar" href="/students">Lista</b-list-group-item>
          
        
      </b-list-group>
    </div>
  </b-sidebar>

  </div>
</template>

<script>
export default {
  name: 'SidebarFixed',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.item-menu-sidebar:hover {
  background: #0879FA;
  color: aliceblue;
}
</style>
