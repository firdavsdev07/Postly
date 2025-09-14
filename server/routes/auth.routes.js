import * as authController from "../controllers/auth.controller.js";

async function authRoutes(fastify, options) {
  fastify.post("/register", authController.registerUser); // POST /auth/register
  fastify.post("/login", authController.loginUser); // POST /auth/login
}

export default authRoutes;
