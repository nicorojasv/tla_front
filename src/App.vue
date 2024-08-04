<template>
  <div id="app">
    <router-view v-if="isAuthenticated" />
    <Login v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from './components/LoginView.vue';

export default {
  name: 'App',
  components: {
    Login
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  watch: {
    isAuthenticated(val) {
      if (val) {
        this.$router.push('/'); // Redirige a la página de inicio si está autenticado
      }
    }
  }
}
</script>
