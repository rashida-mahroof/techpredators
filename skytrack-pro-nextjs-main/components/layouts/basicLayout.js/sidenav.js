import { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Title from "@/components/account/Atoms/main-title/title";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="position-fixed h-100 bg-white">
     
        <Title></Title>
      

      <div className="flex flex-column">
        <Link href="/home">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/home"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
             <i class="fa fa-home" aria-hidden="true"></i>
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/analytics">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/analytics"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
            <i class="fa fa-home" aria-hidden="true"></i>
            </div>
            <div>
              <p>Analytics</p>
            </div>
          </div>
        </Link>
        <Link href="/recover">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/recover"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
             <i class="fa fa-home" aria-hidden="true"></i>
            </div>
            <div>
              <p>Invoice</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

 SideBar.displayName = "SideBar";

export default SideBar;
