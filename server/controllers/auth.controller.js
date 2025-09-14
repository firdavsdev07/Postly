import connectDB from "../db/config.js";

export const registerUser = async (req, reply) => {
  const { email, fullName, username, password } = req.body;
  try {
    const db = await connectDB();
    const userCollection = db.collection("user");
    const existingUser = await userCollection.findOne({ username });
    if (existingUser) {
      return reply.code(400).send({ message: "Bu username allaqachon band" });
    }
    const newUser = {
      email,
      fullName,
      username,
      password,
      avatar: null,
      bio: null,
      avatar: null,
      website: null,
      phone: null,
      timestamp: new Date(),
    };
    await userCollection.insertOne(newUser);
    reply
      .status(201)
      .send({ message: "User muvaffaqiyatli roʻyxatdan oʻtdi", user: newUser });
  } catch (err) {
    reply.status(500).send(err.message);
    console.error(err.message);
  }
};

export const loginUser = async (req, reply) => {
  try {
    const { username, password } = req.body;
    const db = await connectDB();
    const userCollection = db.collection("user");
    const user = await userCollection.findOne({ username, password });
    if (!user) {
      return reply.code(401).send({ message: "Login yoki parol notoʻgʻri" });
    }
    reply.status(200).send({
      message: "Login muvaffaqiyatli",
      user: { username: user.username, email: user.email },
    });
  } catch (err) {
    console.error(err);
    reply.code(500).send({ message: "Server xatosi" });
  }
};
