import GoogleProvider from 'next-auth/providers/google';
import connectDB from '@/config/database';
import User from '@/models/User';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                // To avoid auto sign-in, with the same account
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
    ],
    callbacks: {
        // Invoked on successfull sign in
        async signIn({ profile }) {
            // 1. Connect to the database
            connectDB();
            // 2. Check if the user exists in the database
            const userExists = await User.findOne({ email: profile.email });
            // 3. If not, create a new user in the database
            if (!userExists) {
                const username = profile.name.slice(0,20);

                await User.create({
                    email: profile.email,
                    username,
                    image: profile.image,
                });
            }
            // 4. return true to allow sign in
            return true;
        },

        // session callback function that modifies the session object
        async session({ session }) {
            // 1. Get User from the databse
            const user = await User.findOne({ email: session.user.email });
            // 2. Assign user id to from database to session 
            session.user.id = user._id.toString();
            // 3. Return the session
            return session;
        }
    }
}