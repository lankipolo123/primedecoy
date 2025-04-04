import Link from "next/link";
import { NAV_ITEMS } from "../NavigationBar/data";


export const NavItems = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {NAV_ITEMS.map((item) => (
        <div key={item.name} className="group relative">
          <Link 
            href={item.href}
            className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
          >
            {item.name}
          </Link>
          
          {item.subItems && (
            <div className="absolute hidden group-hover:block mt-0 w-48 bg-white shadow-lg rounded-md z-10">
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};