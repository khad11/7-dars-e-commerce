//  COMPONENTS
import { Footer, Navbar, ColorContainer } from "../components";

// RRD IMPORT
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <ColorContainer />
      <main className="align-elements ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
