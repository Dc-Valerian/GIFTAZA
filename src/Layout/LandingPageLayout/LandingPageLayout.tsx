import Header from "../../Static/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Static/Footer";

const LandingPageLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
