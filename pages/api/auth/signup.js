import { DbConnection } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";

async function SignupHandler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { firstname, lastname, email, password } = data;

  if (
    !firstname ||
    !lastname ||
    !password ||
    !email ||
    !email.includes("@") ||
    password.trim().length < 5
  ) {
    res.status(422).json({ message: "Invalid credentials" });
  }

  const client = await DbConnection();

  const db = client.db();

  const existingUser = await db.collection("users").findOne({email: email});

  if(existingUser) {
      res.status(422).json({message: "user exists already"});
      client.close();
      return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "created user" });
  
}

export default SignupHandler;
