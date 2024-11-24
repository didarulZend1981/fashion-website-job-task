import { useEffect } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { TbShoppingBag } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Image from 'next/image'
import Link from "next/link";

const Navbar = () => {
  useEffect(() => {
    const toggleOpen = document.getElementById("toggleOpen");
    const toggleClose = document.getElementById("toggleClose");
    const collapseMenu = document.getElementById("collapseMenu");
    // toggling function:
    function handleClick() {
      if (collapseMenu.style.display === "block") {
        collapseMenu.style.display = "none";
      } else {
        collapseMenu.style.display = "block";
      }
    }
    // Only add event listeners if elements are found:
    toggleOpen?.addEventListener("click", handleClick);
    toggleClose?.addEventListener("click", handleClick);
    // Cleanup function to remove event listeners when component unmounts:
    return () => {
      toggleOpen?.removeEventListener("click", handleClick);
      toggleClose?.removeEventListener("click", handleClick);
    };
  }, []);

  const navLinks = [
    {
      title: "Home",
      pathName: "/",
    },
    {
      title: "Shop",
      pathName: "/",
    },
    {
      title: "Deals",
      pathName: "/",
    },
    {
      title: "What's New",
      pathName: "/",
    },
  ];
  return (
    <header className="bg-[#F5F3FF] py-4 sm:px-10 bg-gradient-red tracking-wide z-50 sticky top-0 z-1000">
      <div className="lg:w-[1340px] w-full mx-auto flex items-center gap-4 justify-between px-3 lg:px-0">
        {/* logo & name */}
        <button id="toggleOpen" className="lg:hidden">
          <RiMenu5Fill className="text-2xl md:text-3xl" />
        </button>
        <a to="/" className="flex items-center gap-1 md:gap-2">
           <Image src="/logo.png" 
           alt="logo" 
           width={144} height={36}
           className="w-8 md:w-full" />

          

        </a>
        {/* toggle menubar for md and mobile devices */}
        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-gradient-red p-3"
          >
            <IoMdClose className="text-4xl md:text-5xl text-[#646464] bg-[#F5F3FF] rounded-full" />
          </button>
          {/* route path */}
          <ul className="lg:flex justify-center lg:gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 w-full bg-[#F5F3FF]">
            <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
              {/* logo & name */}
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.png" alt="logo" className="w-36"
                        width={144} height={36} />
                <span className="text-4xl text-black font-bold">
                  We<span className="text-[#7436F1]">5</span>ive
                </span>
              </Link>
            </li>
            {navLinks.map((navLink, index) => (
              <li key={index} className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  to={navLink?.pathName}
                  className="text-[#646464] block font-bold transition-all"
                >
                  {navLink?.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex">
          {/* navbar right-side button */}
          <div className="flex items-center ml-6">
            <div className="flex lg:border-2 gap-3 lg:rounded-full lg:px-6 lg:py-2 overflow-hidden lg:bg-white">
              <CiSearch className="text-3xl text-[#646464] relative" />
              <input
                type="text"
                placeholder="Search"
                className="w-full text-sm bg-transparent text-[#646464] outline-none pr-2 font-semibold lg:block hidden"
              />
            </div>
            <div className="flex items-center ml-6">
              <div className="flex gap-6">
                <span className="relative">
                  <TbShoppingBag className="text-3xl relative" />
                  <span className="absolute left-auto -ml-1 top-0 -right-1 rounded-full bg-black px-1 py-0 text-xs text-[#646464]">
                    0
                  </span>
                </span>
                <MdAccountCircle className="text-3xl  relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
