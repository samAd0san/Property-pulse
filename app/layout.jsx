// Main Page
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'PropertyPulse',
    description: 'Find The Perfect Rental Property',
    keywords: 'rental, property, real estate',
};

const Layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    );
}

export default Layout;