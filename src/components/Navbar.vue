<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <img src="../assets/logo_adx.png" width="65" alt="adx">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Início</b-nav-item>
          <b-nav-item-dropdown text="Estudantes" right>
            <b-dropdown-item href="/register">Novo</b-dropdown-item>
            <b-dropdown-item href="/students">Lista</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        <b-navbar-brand right href="#"><b-button v-b-toggle.sidebar-menu variant="dark" size="sm"><b-icon icon="gear-fill"></b-icon></b-button></b-navbar-brand>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
