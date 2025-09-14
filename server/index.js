import Fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";
import connectDB from "./db/config.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const fastify = Fastify({
  logger: true,
});

await fastify.register(cors, {
  origin: "http://localhost:5173",
});

fastify.get("/", async function handler(request, reply) {
  return { hello: "fastify" };
});

// routes
fastify.register(authRoutes, { prefix: "/auth" });

try {
  await fastify.listen({ port: 3000, host: "0.0.0.0" });
  connectDB();
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
