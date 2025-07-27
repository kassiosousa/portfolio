import { useState } from "react";
import SidebarIcon from "../SidebarIcon";
import {
  FaHome,
  FaUser,
  FaFolder,
  FaStar,
  FaTrophy,
  FaGraduationCap,
  FaChartBar,
  FaBars,
  FaTimes
} from "react-icons/fa";

const Sidebar = ({ setActiveSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    const icons = [
        { icon: FaHome, page: "home" },
        { icon: FaUser, page: "about" },
        { icon: FaFolder, page: "projects" },
        { icon: FaStar, page: "history" },
        { icon: FaTrophy, page: "awards" },
        { icon: FaGraduationCap, page: "education" },
        { icon: FaChartBar, page: "reports" },
    ];

    return (
    <>
        <div className="sm:hidden fixed top-4 left-4 z-50">
            <button onClick={toggleMenu} className="text-white text-2xl">
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>

        <aside
            className={`
            fixed md:relative top-0 pt-16 md:pt-8 left-0 w-16 bg-[#151515] py-4 space-y-6 flex flex-col items-center
            ${menuOpen ? "block" : "hidden"} sm:flex
            `}
        >
        {icons.map(({ icon: Icon, page }, idx) => (
          <SidebarIcon
            key={idx}
            icon={
              <Icon
                onClick={() => {
                  setActiveSection(page);
                  closeMenu();
                }}
              />
            }
          />
        ))}
      </aside>
    </>
  );
};

export default Sidebar;

