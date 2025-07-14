import Footer1 from "@/app/ui/Footer/Footer1";
import Header from "@/app/ui/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer1 />
    </>
  );
};

export default Layout;
