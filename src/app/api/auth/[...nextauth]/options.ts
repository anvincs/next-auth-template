import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Your Username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Your Password",
        },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // database lookup etc.
        // Docs : https://next-auth.js.org/configuration/providers/credentials

        const user = { id: "1", name: "Anvin", password: "12345" };
        // hard coded user for now

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.

          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],

  // pages: {
  //     signIn: '/auth/signin',
  //     signOut: '/auth/signout',
  //     error: '/auth/error', // Error code passed in query string as ?error=
  //     verifyRequest: '/auth/verify-request', // (used for check email message)
  //     newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  //   }
  // Can customise if required
  // if we provide pages, it will override the default pages provided by next-auth
};
