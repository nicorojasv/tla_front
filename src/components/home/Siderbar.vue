<template>
    <b-sidebar
      v-model="show"
      class="sidebar"
      id="sidebar"
      position="fixed"
      variant="dark"
      :width="250"
    >
      <b-sidebar-header>
        <img
          src="@/assets/logo.png"
          alt="Logo"
          class="sidebar-logo"
        />
        <b-button @click="toggleSidebar" variant="link" class="close-btn">
          &times;
        </b-button>
      </b-sidebar-header>
  
      <b-sidebar-nav>
        <b-nav>
          <b-nav-item to="/" exact>
            <b-icon icon="house-door" class="mr-2" />
            Inicio
          </b-nav-item>
          <b-nav-item to="/about">
            <b-icon icon="info-circle" class="mr-2" />
            Acerca de
          </b-nav-item>
          <b-nav-item to="/contact">
            <b-icon icon="envelope" class="mr-2" />
            Contacto
          </b-nav-item>
          <b-nav-item to="/profile">
            <b-icon icon="person" class="mr-2" />
            Perfil
          </b-nav-item>
        </b-nav>
      </b-sidebar-nav>
    </b-sidebar>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { BSidebar, BSidebarHeader, BButton, BNav, BNavItem, BIcon } from 'bootstrap-vue-3';
  
  const show = ref(true);
  const router = useRouter();
  
  const toggleSidebar = () => {
    show.value = !show.value;
  };
  </script>
  
  <style scoped>
  .sidebar {
    height: 100%;
    top: 0;
    left: 0;
    background-color: #343a40; /* Color oscuro para el sidebar */
    color: #ffffff;
    padding: 1rem;
  }
  
  .sidebar-logo {
    max-width: 150px;
    height: auto;
    display: block;
    margin: 0 auto 1rem auto;
  }
  
  .close-btn {
    color: #ffffff;
    font-size: 1.5rem;
  }
  
  .b-nav-item {
    color: #ffffff;
    font-size: 1.1rem;
  }
  
  .b-nav-item:hover {
    background-color: #495057;
  }
  
  .b-icon {
    color: #ffffff;
  }
  </style>
  