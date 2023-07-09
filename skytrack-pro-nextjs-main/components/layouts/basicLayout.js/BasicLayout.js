import { useState, useEffect, Fragment } from "react";
import SideBar from "./sidenav";
import { Transition } from "@headlessui/react";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
     
    <div className="row">
      <div className="col-md-2 ">
          <SideBar showNav={showNav} />
      </div>
      <div className="col-md-10">
      <main
        className={` transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56" : ""
        }`}
      >
        <div className="">{children}</div>
      </main>
      </div>
    </div>
        
      
     
    </>
  );
}
