import { Router } from 'express';
import { register, login } from '../controllers/AuthController';

const router = Router();

// Auth — sin protección
router.post('/auth/register', register);
router.post('/auth/login', login);

// Las rutas de recetas e ingredientes se agregarán aquí

export default router;