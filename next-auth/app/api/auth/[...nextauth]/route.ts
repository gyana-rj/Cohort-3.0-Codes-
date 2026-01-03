import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "gyana@gamil.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;
        console.log(`username: ${username}`);
        console.log(`password: ${password}`);

        // do a db check if the username and password are correct
        const user = {
          name: "gyana",
          id: "1",
          username: "gyana@gmail.com",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    GitHubProvider({
      clientId: "process.env.GITHUB_ID",
      clientSecret: "process.env.GITHUB_SECRET",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
});

export const GET = handler;
export const POST = handler;
