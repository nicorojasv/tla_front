<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="header">
    <img src="@/assets/logoblanco.png" alt="Logo" class="logo" />
    <b-container>
      <b-collapse id="nav-collapse" is-nav class=" d-flex align-items-right ">
        <b-navbar-nav class="ml-3 d-flex align-items-center">
          <b-nav-item-dropdown right>
            <template #button-content>
              <b-avatar
                src="https://via.placeholder.com/40" 
                class="avatar"
                size="sm"
              ></b-avatar>
              <span class="ml-2 user-name">Usuario</span>
            </template>
            <b-dropdown-item @click="logout" class="dropdown-item">
              <i class="fas fa-sign-out-alt mr-2"></i>Cerrar sesión
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const logout = () => {
  store.commit('setUser', null); // Remueve el usuario del estado de Vuex
  localStorage.removeItem(process.env.VUE_APP_TOKEN_NAME); // Elimina el token del almacenamiento local
  router.push('/login'); // Redirige al usuario a la página de inicio de sesión
};
</script>

<style scoped>
.header {
  background: linear-gradient(to right, #2c3e50, #3498db);
  padding: 0.5rem 1rem; /* Ajusta el padding según sea necesario */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  max-width: 120px;
  height: auto;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.brand-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ecf0f1;
  letter-spacing: 0.5px;
  margin-left: 0.5rem; /* Espacio entre el logo y el nombre de la marca, si se usa */
}

.navbar-nav .nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 4px;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-item-dropdown .dropdown-menu {
  background-color: #34495e;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
  color: #ecf0f1;
  transition: background-color 0.3s ease;
  padding: 0.5rem 1rem;
}

.dropdown-item:hover {
  background-color: #2c3e50;
  color: #ffffff;
}

.avatar {
  border: 2px solid #ecf0f1;
  transition: border-color 0.3s ease;
}

.avatar:hover {
  border-color: #3498db;
}

.user-name {
  font-size: 0.9rem;
  font-weight: 500;
}

@media (max-width: 991.98px) {
  .navbar-nav {
    padding: 1rem 0;
  }

  .navbar-nav .nav-link {
    padding: 0.5rem 0;
  }
}
</style>