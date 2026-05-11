// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// import { connectDB } from "@/lib/db";
// import User from "@/models/user.model";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],

//   session: {
//     strategy: "jwt",
//   },

//   callbacks: {
//     async signIn({ user }) {
//       await connectDB();

//       const existingUser = await User.findOne({ email: user.email });

//       if (!existingUser) {
//         const newUser = await User.create({
//           name: user.name,
//           email: user.email,
//           image: user.image,
//         });

//         // attach mongo id
//         user.id = newUser._id.toString();
//       } else {
//         user.id = existingUser._id.toString();
//       }

//       return true;
//     },

//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id as string;
//       }
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth-options";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
