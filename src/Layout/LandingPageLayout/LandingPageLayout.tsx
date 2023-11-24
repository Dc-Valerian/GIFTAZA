import Header from "../../block/Static/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../block/Static/Footer";

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
