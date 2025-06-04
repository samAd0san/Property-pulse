// Main Page
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'PropertyPulse',
    description: 'Find The Perfect Rental Property',
    keywords: 'rental, property, real estate',
};

const Layout = ({ children }) => {
    return (
        <AuthProvider>
            <html lang='en'>
                <body>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <ToastContainer />
                </body>
            </html>
        </AuthProvider>
    );
}

export default Layout;