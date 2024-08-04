import axios from 'axios';

// Obteniendo variables de entorno usando process.env en Vue CLI
const { VUE_APP_API_BASE_URL, VUE_APP_TOKEN_NAME } = process.env;

const axiosInstance = axios.create({
    baseURL: VUE_APP_API_BASE_URL,
});

// Interceptor para incluir el token en las solicitudes
axiosInstance.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem(VUE_APP_TOKEN_NAME);
        if (token) {
            request.headers['Authorization'] = `Token ${token}`;
        }
        return request;
    },
    (error) => Promise.reject(error)
);

// Interceptor para manejar respuestas
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Puedes agregar manejo de errores aquí, por ejemplo, logout si el token es inválido
        return Promise.reject(error);
    }
);

export default axiosInstance;
