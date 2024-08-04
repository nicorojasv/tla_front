import axiosInstance from './axios';

class AuthRepository {
    async login(data) {
        return axiosInstance.post('/auth-token/', data);
    }

    async getUser() {
        return axiosInstance.get('/api/users/me');
    }
}

const repository = new AuthRepository();

export default repository;

// Si necesitas checkSession como una función independiente
export async function checkSession() {
    try {
        const response = await repository.getUser();
        return response.status === 200;
    } catch (error) {
        return false;
    }
}
