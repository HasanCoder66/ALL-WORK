import Navbar from "./components";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

const Layout = () => {
  
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      {/* <MobileNav nav={nav} closeNav={closeNav} />
      <Navbar openNav={openNav} />
      <Outlet />
      <Footer /> */}
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      
    ],
  },
]);

const App = () => (
  
  <div>
    <RouterProvider router={router} />
  </div>
  // <div className="bg-primary w-full overflow-hidden">
  //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  //     <div className={`${styles.boxWidth}`}>
  //       <Navbar />
  //     </div>
  //   </div>

  //   <div className={`bg-primary ${styles.flexStart}`}>
  //     <div className={`${styles.boxWidth}`}>
  //       <Hero />
  //     </div>
  //   </div>

  //   <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
  //     <div className={`${styles.boxWidth}`}>
  //       <Stats />
  //       <Business />
  //       <Billing />
  //       <CardDeal />
  //       <Testimonials />
  //       <Clients />
  //       <CTA />
  //       <Footer />
  //     </div>
  //   </div>
  // </div>
);

export default App;
