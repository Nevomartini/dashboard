// @ts-nocheck
const NavLink = ({ link }) => (
  <div className="flex items-center justify-center pb-1 font-semibold text-gray-900 uppercase cursor-pointer text-md md:px-4 md:pt-3 md:pb-4 hover:text-blue-900 smooth">
    {link.title}
  </div>
);
export default NavLink;
