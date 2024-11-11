import Navbar from "@/headerFooter/Navbar";

const DefaultLayout = ({ children }) => {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
};

export default DefaultLayout;