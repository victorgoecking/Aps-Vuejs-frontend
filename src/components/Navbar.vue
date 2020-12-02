<template>
<div>
    <b-navbar class="" toggleable="lg" type="light" variant="light">
      
      <b-navbar-brand href="#" ><b-button v-b-toggle.menu-sidebar variant="light" size="md"><b-icon class="mt-1" icon="list"></b-icon></b-button></b-navbar-brand>

      <b-navbar-brand href="#" class="ml-auto">
        <img src="../assets/logo_adx.png" class="" width="73" alt="doctum">
      </b-navbar-brand>

      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav> -->

        <!-- <b-navbar-nav>
          <b-nav-item href="/">Início</b-nav-item>
          <b-nav-item-dropdown text="Estudantes" left>
            <b-dropdown-item href="/register">Novo</b-dropdown-item>
            <b-dropdown-item href="/students">Lista</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto mr-0 float-right"> -->
        <b-navbar-brand href="#" class="ml-auto mr-0">
        <div>
          <b-dropdown variant="light" right>
            <template #button-content>
              <b-avatar variant="primary" class="mt-auto mb-auto" size="1.8rem"></b-avatar>
              <!-- <b-icon icon="gear-fill" aria-hidden="true"></b-icon> -->
            </template>
            <b-dropdown-item-button>
              Conectado como User <span class="sr-only">(Click to unlock)</span>
            </b-dropdown-item-button>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-group header="Choose options" class="small">
              <b-dropdown-item-button>
                <b-icon icon="blank" aria-hidden="true"></b-icon>
                Option A <span class="sr-only">(Not selected)</span>
              </b-dropdown-item-button>
              <b-dropdown-item-button>
                <b-icon icon="check" aria-hidden="true"></b-icon>
                Option B <span class="sr-only">(Selected)</span>
              </b-dropdown-item-button>
              <b-dropdown-item-button>
                <b-icon icon="blank" aria-hidden="true"></b-icon>
                Option C <span class="sr-only">(Not selected)</span>
              </b-dropdown-item-button>
            </b-dropdown-group>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button>
              <b-icon icon="exclamation-circle" aria-hidden="true"></b-icon>
              Ajuda
            </b-dropdown-item-button>
            <b-dropdown-item-button>
              <b-icon icon="gear" aria-hidden="true"></b-icon>
              Configurações
            </b-dropdown-item-button>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button variant="danger">
              <b-icon icon="power" aria-hidden="true"></b-icon>
              Sair
              
            </b-dropdown-item-button>
          </b-dropdown>
        </div>
        </b-navbar-brand>
        <!-- </b-navbar-nav> -->
      <!-- </b-collapse> -->
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
