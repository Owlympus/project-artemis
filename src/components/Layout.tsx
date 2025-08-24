import Header from "./Layout/Header";
import {Outlet} from "react-router";
import Footer from "./Layout/Footer";

const Layout = () => {
  return (
    <>
      <main className="flex flex-col relative min-h-screen">
        <section className={"flex flex-col flex-1 bg-[#f2e7dd] rounded-xl p-2 m-2"}>
          <Header />
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Layout;
