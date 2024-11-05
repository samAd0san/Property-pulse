import '@/assets/styles/globals.css'

const Layout = ({ children }) => {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}

export default Layout;