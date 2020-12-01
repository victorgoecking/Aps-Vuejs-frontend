
<template>
<div>

  <b-sidebar
    width="220px"
    id="menu-sidebar"
    shadow
    no-header
    backdrop backdrop-variant="light"
    aria-labelledby="menu-slidebar"
  >

    <div class="text-center mt-4">
      <b-navbar-brand href="https://www.doctum.edu.br/?home">
        <img src="../assets/doctum_logo.png" class="ml-4" width="80%" alt="doctum">
      </b-navbar-brand>
      <p class="text-muted mt-3 mb-0">Ambiente do aluno</p>
      <b-list-group>
        <span class="mt-3">
          <b-list-group-item
            class="btn btn-light"
            :disabled="$route.path === `${menu.layout}/${menu.path}`"
            v-for="(menu, index) in menus"
            :key="index"
            @click="handleMenu(`${menu.layout}/${menu.path}`)"
          >
            <b-icon :icon="menu.icon" /> {{ menu.title }}
          </b-list-group-item>
        </span>
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

</style>
