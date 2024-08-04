import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HomeView.vue';
import Login from '@/components/LoginView.vue';
import { checkSession } from '@/services/AuthRepository'; // Ajusta la ruta si es necesario
import store from '@/store'; // Ajusta la ruta si es necesario

// Define tus rutas aquí
const routes = [
    {
        path: '',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true } // Marca las rutas que requieren autenticación
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

// Crea una instancia del enrutador
const router = createRouter({
    history: createWebHistory('/'), // Ajusta la base URL si es necesario
    routes
});

// Configura el hook global antes de cada navegación
router.beforeEach(async (to, from, next) => {
    let storedAuthentication = store.getters['auth/authentication'];

    if (!storedAuthentication) {
        storedAuthentication = await checkSession();
    }

    // Redirige al usuario a la página de inicio de sesión si no está autenticado y la ruta requiere autenticación
    if (to.meta.requiresAuth && !storedAuthentication) {
        return next('/login');
    }

    // Continúa con la navegación
    return next();
});

export default router;
