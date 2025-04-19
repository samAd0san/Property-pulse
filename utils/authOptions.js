import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
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
            // 2. Check if the user exists in the database
            // 3. If not, create a new user in the database
            // 4. return true to allow sign in
        },

        // session callback function that modifies the session object
        async session({ session }) {
            // 1. Get User from the databse
            // 2. Assign user id to from database to session 
            // 3. Return the session
        }
    }
}