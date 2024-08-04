<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login-container">
    <b-container class="mt-5">
      <b-row class="justify-content-center">
        <b-col cols="12" sm="8" md="6" lg="4">
          <div class="text-center mb-4">
            <img
              src="@/assets/logo.png"
              alt="Logo de la empresa"
              class="logo"
            />
          </div>
          <b-card
            title="Iniciar Sesión"
            class="shadow-sm"
            bg-variant="light"
          >
            <b-form @submit.prevent="onSubmit">
              <b-form-group
                id="input-group-1"
                label="Nombre de usuario:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.username"
                  type="text"
                  placeholder="Ingrese su nombre de usuario"
                  required
                  trim
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Contraseña:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  placeholder="Ingrese su contraseña"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button
                type="submit"
                variant="primary"
                class="w-100 mt-3"
                :disabled="loading"
              >
                Iniciar Sesión
              </b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import AuthRepository from '@/services/AuthRepository';
import { useToast } from 'vue-toastification';

const toast = useToast();
const router = useRouter();
const store = useStore(); 
const form = ref({
  username: '',
  password: ''
});
const loading = ref(false);

const onSubmit = async () => {
  loading.value = true;
  try {
    const response = await AuthRepository.login({
      username: form.value.username, // Correcto: usar form.value.username
      password: form.value.password,
    });
    const token = response.data.token;
    localStorage.setItem(process.env.VUE_APP_TOKEN_NAME, token);
    console.log('Inicio de sesión exitoso:', response.data);
    store.commit('setUser', { username: form.value.username }); // Correcto: usar form.value.username
    // Redirigir a la página de inicio o donde sea necesario
    router.push('/');
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    toast.error('Error en el inicio de sesión');
    // Manejar el error, por ejemplo, mostrar un mensaje al usuario
  } finally {
    loading.value = false;
  }
};
</script>


<style scoped>
.login-container {
  background-image: url('@/assets/fondo.png');
  background-size: cover; /* Ajusta el tamaño de la imagen de fondo */
  background-position: center; /* Centra la imagen de fondo */
  min-height: 100vh; /* Asegúrate de que ocupe toda la altura de la ventana */
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  max-width: 150px;  /* Ajusta este valor según el tamaño que desees */
  height: auto;
  margin-bottom: 20px;
}
.card-title {
  color: #2c3e50;
  font-weight: bold;
}

.form-group label {
  font-weight: 600;
  color: #34495e;
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

.card {
  border-radius: 10px;
}
.card-title {
  color: #2c3e50;
  font-weight: bold;
}
</style>
