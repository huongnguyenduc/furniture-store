import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'john',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const payload = {
          username: credentials?.username,
          password: credentials?.password,
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const user = await res.json();
        if (!res.ok) {
          throw new Error(user.content);
        }
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user.content.token;
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
    // ...add more providers here
  ],
  //   secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  pages: {
    signIn: '/login',
    signOut: '/logout',
    newUser: '/signup',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user,
          //   refreshToken: account.refresh_token,
        };
      }

      return token;
    },

    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      //   session.refreshToken = token.refreshToken;
      //   session.accessTokenExpires = token.accessTokenExpires;
      return session;
    },
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === 'development',
});
