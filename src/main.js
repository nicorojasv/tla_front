import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'
import Toast, { POSITION } from 'vue-toastification';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'vue-toastification/dist/index.css'

const app = createApp(App)
const options = {
    // Aquí puedes configurar las opciones globales de Toastification
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    rtl: false
};


app.use(BootstrapVue3)
app.use(router)
app.use(store)
app.use(Toast, options);
app.mount('#app')