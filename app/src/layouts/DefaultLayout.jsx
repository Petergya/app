import Footer from "@/headerFooter/Footer";
import Navbar from "@/headerFooter/Footer";

const DefaultLayout = ({ children }) => {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};

export default DefaultLayout;