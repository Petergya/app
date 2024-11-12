import Footer from "@/headerFooter/Footer";
import Navbar from "@/headerFooter/Navbar";

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