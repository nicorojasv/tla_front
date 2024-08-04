<template>
  <div class="app-container">
    <Sidebar />
    <Header />
    <main class="content">
   
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Header from './home/Header.vue';
import Footer from './home/Footer.vue';
import Siderbar from './home/Siderbar.vue';

const router = useRouter();

const goToProfile = () => {
  router.push('/profile'); // Redirige al usuario a la página de perfil, ajusta la ruta según tu configuración
};
</script>

<style scoped>
.home {
  text-align: center;
}
.card-text {
  font-size: 1.2rem;
}
.btn-primary {
  background-color: #3498db;
  border-color: #3498db;
  transition: all 0.3s ease;
}
.btn-primary:hover {
  background-color: #2980b9;
  border-color: #2980b9;
}

/* Estilos específicos para asegurar que el footer esté al final */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
