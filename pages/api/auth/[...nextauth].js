import NextAuth from "next-auth";
import { verifyPaswword } from "../../../lib/auth";
import Providers from "next-auth/providers";
import { DbConnection } from "../../../lib/db";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await DbConnection();

        const usersList = client.db().collection("users");

        const user = await usersList.findOne({ email: credentials.email });

        if (!user) {
          client.close();
          throw new Error("no user found");
        }

        const validUser = await verifyPaswword(
          credentials.password,
          user.password
        );

        if (!validUser) {
          client.close();
          throw new Error("user does not exists");
        }
        client.close();
        return { email: user.email };
      },
    }),
  ],
});
