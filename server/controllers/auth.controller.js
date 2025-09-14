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
      password, // DB uchun saqlanadi, lekin qaytmaydi
      avatar: null,
      bio: null,
      website: null,
      phone: null,
      timestamp: new Date(),
    };

    await userCollection.insertOne(newUser);

    // passwordni olib tashlash
    const { password: _, ...safeUser } = newUser;

    reply.status(201).send({
      message: "User muvaffaqiyatli roʻyxatdan oʻtdi",
      user: safeUser, // passwordsiz foydalanuvchi
    });
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

    // passwordni olib tashlash
    const { password: _, ...safeUser } = user;

    reply.status(200).send({
      message: "Login muvaffaqiyatli",
      user: safeUser,
    });
  } catch (err) {
    console.error(err);
    reply.code(500).send({ message: "Server xatosi" });
  }
};
