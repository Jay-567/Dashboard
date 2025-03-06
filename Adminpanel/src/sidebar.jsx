// import React, { useState } from 'react';
// import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
//   BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

// function Sidebar({ openSidebarToggle, OpenSidebar }) {
//   // State to manage dropdown visibility
//   const [isProductsOpen, setIsProductsOpen] = useState(false);
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
//   const [isSalesOpen, setIsSalesOpen] = useState(false);
//   const [isCustomerOpen, setIsCustomerOpen] = useState(false);
//   const [isSpareOpen, setIsSpareOpen] = useState(false);
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);

//   // Toggle Functions for Dropdowns
//   const toggleDropdown = (setState) => {
//     setState(prev => !prev);
//   };

//   return (
//     <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
//       <div className="sidebar-header">
//         <div className="sidebar-brand">
//           <img src="/src/png.png" alt="Logo" className="sidebar-logo" />
//         </div>
//         <span className="close-btn" onClick={OpenSidebar}>X</span>
//       </div>

//       <div className="sidebar-content">
//         <ul className="sidebar-list">
//           <li className="sidebar-list-item">
//             <a href="#" className="sidebar-link">
//               <BsGrid1X2Fill className="icon" /> Dashboard
//             </a>
//           </li>

//           {/* Products Section */}
//           <li className="sidebar-list-item">
//             <a href="#" className="sidebar-link" onClick={() => toggleDropdown(setIsProductsOpen)}>
//               <BsFillArchiveFill className="icon" /> Products
//             </a>
//             {isProductsOpen && (
//               <ul className="dropdown-list">
//                 <li><a href="#">All Products Details</a></li>
//                 <li><a href="#">Orders</a></li>
//                 <li><a href="#">Return/Cancel</a></li>
//                 <li><a href="#">Amazon/Flipkart</a></li>
//                 <li><a href="#">Damaged Products</a></li>
//               </ul>
//             )}
//           </li>

//           {/* Categories Section */}
//           <li className="sidebar-list-item">
//             <a href="#" className="sidebar-link" onClick={() => toggleDropdown(setIsCategoriesOpen)}>
//               <BsFillGrid3X3GapFill className="icon" /> Purchase
//             </a>
//             {isCategoriesOpen && (
//               <ul className="dropdown-list">
//                 <li><a href="#">Invoice</a></li>
//                 <li><a href="#">Quote</a></li>
//                 <li><a href="#">Orders</a></li>
//               </ul>
//             )}
//           </li>

//           {/* Sales Section */}
//           <li className="sidebar-list-item">
//             <a href="#" className="sidebar-link" onClick={() => toggleDropdown(setIsSalesOpen)}>
//               <BsMenuButtonWideFill className="icon" /> Sales
//             </a>
//             {isSalesOpen && (
//               <ul className="dropdown-list">
//                 <li><a href="#">Vendors</a></li>
//                 <li><a href="#">Debit</a></li>
//                 <li><a href="#">Credit</a></li>
//                 <li><a href="#">Stock</a></li>
//                 <li><a href="#">Refund Details</a></li>
//               </ul>
//             )}
//           </li>

//           {/* Customer Section */}
//           <li className="sidebar-list-item">
//             <a href="#" className="sidebar-link" onClick={() => toggleDropdown(setIsCustomerOpen)}>
//               <BsPeopleFill className="icon" /> Customer
//             </a>
//             {isCustomerOpen && (
//               <ul className="dropdown-list">
//                 <li><a href="#">Details</a></li>
//                 <li><a href="#">Information</a></li>
//               </ul>
//             )}
//           </li>

//           {/* Spare Section */}
//           <li className="sidebar-list-item">
//             <a href="#" className="sidebar-link" onClick={() => toggleDropdown(setIsSpareOpen)}>
//               <BsMenuButtonWideFill className="icon" /> Spare
//             </a>
//             {isSpareOpen && (
//               <ul className="dropdown-list">
//                 <li><a href="#">Add Spare</a></li>
//                 <li><a href="#">Stock</a></li>
//               </ul>
//             )}
//           </li>

//           {/* Settings Section */}
//           <li className="sidebar-list-item">
//             <a href="#" className="sidebar-link" onClick={() => toggleDropdown(setIsSettingsOpen)}>
//               <BsFillGearFill className="icon" /> Settings
//             </a>
//             {isSettingsOpen && (
//               <ul className="dropdown-list">
//                 <li><a href="#">About Us</a></li>
//                 <li><a href="#">Stock</a></li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </div>
//     </aside>
//   );
// }

// export default Sidebar;



import React, { useState } from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsMenuButtonWideFill, BsPeopleFill, BsFillGearFill } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState({
    products: false,
    categories: false,
    sales: false,
    customer: false,
    spare: false,
    settings: false,
  });

  // Toggle Functions for Dropdowns
  const toggleDropdown = (section) => {
    setIsOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <img src="/src/png.png" alt="Logo" className="sidebar-logo" />
        </div>
        {/* <button className="close-btn" onClick={OpenSidebar}>X</button> */}
      </div>

      <div className="sidebar-content">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link">
              <BsGrid1X2Fill className="icon" /> Dashboard
            </a>
          </li>

          {/* Products Section */}
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link" onClick={() => toggleDropdown('products')}>
              <BsFillArchiveFill className="icon" /> Products
            </a>
            {isOpen.products && (
              <ul className="dropdown-list">
                <li><a href="#">All Products Details</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Return/Cancel</a></li>
                <li><a href="#">Amazon/Flipkart</a></li>
                <li><a href="#">Damaged Products</a></li>
              </ul>
            )}
          </li>

          {/* Categories Section */}
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link" onClick={() => toggleDropdown('categories')}>
              <BsFillGrid3X3GapFill className="icon" /> Purchase
            </a>
            {isOpen.categories && (
              <ul className="dropdown-list">
                <li><a href="#">Invoice</a></li>
                <li><a href="#">Quote</a></li>
                <li><a href="#">Orders</a></li>
              </ul>
            )}
          </li>

          {/* Sales Section */}
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link" onClick={() => toggleDropdown('sales')}>
              <BsMenuButtonWideFill className="icon" /> Sales
            </a>
            {isOpen.sales && (
              <ul className="dropdown-list">
                <li><a href="#">Vendors</a></li>
                <li><a href="#">Debit</a></li>
                <li><a href="#">Credit</a></li>
                <li><a href="#">Stock</a></li>
                <li><a href="#">Refund Details</a></li>
              </ul>
            )}
          </li>

          {/* Customer Section */}
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link" onClick={() => toggleDropdown('customer')}>
              <BsPeopleFill className="icon" /> Customer
            </a>
            {isOpen.customer && (
              <ul className="dropdown-list">
                <li><a href="#">Details</a></li>
                <li><a href="#">Information</a></li>
              </ul>
            )}
          </li>

          {/* Spare Section */}
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link" onClick={() => toggleDropdown('spare')}>
              <BsMenuButtonWideFill className="icon" /> Spare
            </a>
            {isOpen.spare && (
              <ul className="dropdown-list">
                <li><a href="#">Add Spare</a></li>
                <li><a href="#">Stock</a></li>
              </ul>
            )}
          </li>

          {/* Settings Section */}
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link" onClick={() => toggleDropdown('settings')}>
              <BsFillGearFill className="icon" /> Settings
            </a>
            {isOpen.settings && (
              <ul className="dropdown-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Stock</a></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
