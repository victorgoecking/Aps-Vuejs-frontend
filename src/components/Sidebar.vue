<template>
  <div>
    <b-sidebar id="sidebar-menu" aria-labelledby="sidebar-menu-title" no-header shadow bg-variant="dark" text-variant="light" backdrop backdrop-variant="dark">
      <template #default="{ hide }">
        <div class="p-3">
          <div class="d-flex align-items-center flex-column">
            <b-avatar variant="primary" text="VG" class="mb-3 mt-3" size="6rem"></b-avatar>
            <h4 id="sidebar-menu-title">LOGO</h4>
            <div class="divider-menu mb-3 mt-3"></div>
          </div>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Início</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Estudantes</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Cadastrar</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Fechar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.nav-item > .nav-link{
  color: #FFF
}

.nav-item > .nav-link:hover{
  color: #CCC
}

.divider-menu{
  border: 1px solid #FFF;
  width: 100%;
}
</style>
