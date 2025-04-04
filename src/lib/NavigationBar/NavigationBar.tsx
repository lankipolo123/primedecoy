import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Define type for nav items
interface SubItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  dropdown: boolean;
  items?: SubItem[];
}

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { name: "Our Expertise", href: "#", dropdown: false },
    { name: "Latest Insight", href: "#", dropdown: false },
    { name: "Find Property", href: "#", dropdown: false },
    { name: "About", href: "#", dropdown: false },
    { name: "Career", href: "#", dropdown: false },
    

    {
      name: "Press Room",
      href: "#",
      dropdown: true,
      items: [
        { name: "Web Design", href: "#" },
        { name: "Development", href: "#" },
      ],
    },
    { name: "Contact us", href: "#", dropdown: false },
  ];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-blue-600">
              <img src="/src/assets/prime-logo.png" className="h-11" alt="Prime Logo" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center ml-auto space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="text-gray-800 hover:text-blue-600 px-4 py-2 text-sm font-medium flex items-center transition-all"
                    >
                      {item.name}
                      <svg
                        className={`ml-2 h-5 w-5 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-800 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                if (isOpen) setActiveDropdown(null);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-6 py-4 space-y-4 bg-white shadow-lg">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full text-left text-gray-700 hover:text-blue-600 py-3 px-4 rounded-md flex justify-between items-center transition-all"
                    >
                      {item.name}
                      <svg
                        className={`h-5 w-5 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-2">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-2 px-4 rounded-md"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block py-3 px-4 rounded-md text-base font-medium transition-all"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
export { NavigationBar };
