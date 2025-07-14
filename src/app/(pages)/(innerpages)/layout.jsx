import Footer from "@/app/ui/Footer/Footer";
import Header from "@/app/ui/Header/Header";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
