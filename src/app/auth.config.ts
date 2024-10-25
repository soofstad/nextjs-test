import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/api/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      console.log(auth)
      console.log(nextUrl)
      if (isLoggedIn) return true;
      return false; // Redirect unauthenticated users to login page
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;