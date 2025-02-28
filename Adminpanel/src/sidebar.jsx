// // import React, { useState } from 'react';
// // import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
// //   BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

// // function Sidebar({ openSidebarToggle, OpenSidebar }) {
// //   // State to manage dropdown visibility
// //   const [isProductsOpen, setIsProductsOpen] = useState(false);
// //   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

// //   // Function to toggle dropdown visibility
// //   const toggleProductsDropdown = () => {
// //     setIsProductsOpen(!isProductsOpen);
// //   };

// //   const toggleCategoriesDropdown = () => {
// //     setIsCategoriesOpen(!isCategoriesOpen);
// //   };

// //   return (
// //     <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
// //       <div className='sidebar-title'>
// //         <div className='sidebar-brand'>
// //           <img src="png.png" alt="Logo" className="sidebar-logo" /> {/* Add your image here */}
// //         </div>
// //         <span className='icon close_icon' onClick={OpenSidebar}>X</span>
// //       </div>

// //       <ul className='sidebar-list'>
// //         <li className='sidebar-list-item'>
// //           <a href="">
// //             <BsGrid1X2Fill className='icon'/> Dashboard
// //           </a>
// //         </li>

// //         {/* Products Section with Dropdown */}
// //         <li className='sidebar-list-item'>
// //           <a href="#" onClick={toggleProductsDropdown}>
// //             <BsFillArchiveFill className='icon'/> Products
// //           </a>
// //           {isProductsOpen && (
// //             <ul className="dropdown-list">
// //               <li><a href="">All Products Details</a></li>
// //               <li><a href="">Orders</a></li>
// //               <li><a href="">Return/Cancel</a></li>
// //               <li><a href="">Amazon/Filpcart</a></li>
// //               <li><a href="">damaged Products</a></li>
// //             </ul>
// //           )}
// //         </li>

// //         {/* Categories Section with Dropdown */}
// //         <li className='sidebar-list-item'>
// //           <a href="#" onClick={toggleCategoriesDropdown}>
// //             <BsFillGrid3X3GapFill className='icon'/> Purchase
// //           </a>
// //           {isCategoriesOpen && (
// //             <ul className="dropdown-list">
// //               <li><a href="">Invoice</a></li>
// //               <li><a href="">Quote</a></li>
// //               <li><a href="">Orders</a></li>
// //             </ul>
// //           )}
// //         </li>
// //         {/* Products Section with Dropdown */}
// //      <li className='sidebar-list-item'>
// //      <a href="#" onClick={toggleProductsDropdown}>
// //     <BsMenuButtonWideFill className='icon'/>Sales
// //   </a>
// //    {isProductsOpen && (
// //     <ul className="dropdown-list">
// //       <li><a href="">Vendors</a></li>
// //       <li><a href="">Debit</a></li>
// //       <li><a href="">Credit</a></li>
// //       <li><a href="">Stock</a></li>
// //       <li><a href="">Refund Details</a></li>BsPeopleFill
// //     </ul>
// //   )}
// // </li>
// //         {/* Products Section with Dropdown */}
// //         <li className='sidebar-list-item'>
// //      <a href="#" onClick={toggleProductsDropdown}>
// //     <BsPeopleFill className='icon'/>Customer
// //   </a>
// //    {isProductsOpen && (
// //     <ul className="dropdown-list">
// //       <li><a href="">Details</a></li>
// //       <li><a href="">Information</a></li>
// //      </ul>
// //   )}
// // </li>
// //         {/* Products Section with Dropdown */}
// //         <li className='sidebar-list-item'>
// //      <a href="#" onClick={toggleProductsDropdown}>
// //     <BsMenuButtonWideFill className='icon'/>Spare
// //   </a>
// //    {isProductsOpen && (
// //     <ul className="dropdown-list">
// //       <li><a href="">Add Spare</a></li>
// //       <li><a href="">Stock</a></li>
// //      </ul>
// //   )}
// // </li>

// //         {/* Products Section with Dropdown */}
// //         <li className='sidebar-list-item'>
// //      <a href="#" onClick={toggleProductsDropdown}>
// //     <BsFillGearFill className='icon'/>Settings
// //   </a>
// //    {isProductsOpen && (
// //     <ul className="dropdown-list">
// //       <li><a href="">About us</a></li>
// //       <li><a href="">Stock</a></li>
// //      </ul>
// //   )}
// // </li>








        

// //         {/* <li className='sidebar-list-item'>
// //           <a href="">
// //             <BsPeopleFill className='icon'/> Customers
// //           </a>
// //         </li>
// //         <li className='sidebar-list-item'>
// //           <a href="">
// //             <BsListCheck className='icon'/> Inventory
// //           </a>
// //         </li>
// //         <li className='sidebar-list-item'>
// //           <a href="">
// //             <BsMenuButtonWideFill className='icon'/> Reports
// //           </a>
// //         </li>
// //         <li className='sidebar-list-item'>
// //           <a href="">
// //             <BsFillGearFill className='icon'/> Setting
// //           </a>
// //         // </li> */}
// //       </ul>
// //     </aside>
// //   );
// // }

// // export default Sidebar;


// import React, { useState } from 'react';
// import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
//   BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

// function Sidebar({ openSidebarToggle, OpenSidebar }) {
//   // State to manage dropdown visibility
//   const [isProductsOpen, setIsProductsOpen] = useState(false);
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

//   // Function to toggle dropdown visibility
//   const toggleProductsDropdown = () => {
//     setIsProductsOpen(!isProductsOpen);
//   };

//   const toggleCategoriesDropdown = () => {
//     setIsCategoriesOpen(!isCategoriesOpen);
//   };

//   return (
//     <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
//       <div className='sidebar-title'>
//         <div className='sidebar-brand'>
//           <img src="png.png" alt="Logo" className="sidebar-logo" /> {/* Add your image here */}
//         </div>
//         <span className='icon close_icon' onClick={OpenSidebar}>X</span>
//       </div>

//       <div className="sidebar-content">
//         <ul className='sidebar-list'>
//           <li className='sidebar-list-item'>
//             <a href="">
//               <BsGrid1X2Fill className='icon'/> Dashboard
//             </a>
//           </li>

//           {/* Products Section with Dropdown */}
//           <li className='sidebar-list-item'>
//             <a href="#" onClick={toggleProductsDropdown}>
//               <BsFillArchiveFill className='icon'/> Products
//             </a>
//             {isProductsOpen && (
//               <ul className="dropdown-list">
//                 <li><a href="">All Products Details</a></li>
//                 <li><a href="">Orders</a></li>
//                 <li><a href="">Return/Cancel</a></li>
//                 <li><a href="">Amazon/Filpcart</a></li>
//                 <li><a href="">Damaged Products</a></li>
//               </ul>
//             )}
//           </li>

//           {/* Categories Section with Dropdown */}
//           <li className='sidebar-list-item'>
//             <a href="#" onClick={toggleCategoriesDropdown}>
//               <BsFillGrid3X3GapFill className='icon'/> Purchase
//             </a>
//             {isCategoriesOpen && (
//               <ul className="dropdown-list">
//                 <li><a href="">Invoice</a></li>
//                 <li><a href="">Quote</a></li>
//                 <li><a href="">Orders</a></li>
//               </ul>
//             )}
//           </li>

//           {/* Sales Section with Dropdown */}
//           <li className='sidebar-list-item'>
//             <a href="#" onClick={toggleProductsDropdown}>
//               <BsMenuButtonWideFill className='icon'/> Sales
//             </a>
//             {isProductsOpen && (
//               <ul className="dropdown-list">
//                 <li><a href="">Vendors</a></li>
//                 <li><a href="">Debit</a></li>
//                 <li><a href="">Credit</a></li>
//                 <li><a href="">Stock</a></li>
//                 <li><a href="">Refund Details</a></li>
//               </ul>
//             )}
//           </li>

//           {/* Customer Section with Dropdown */}
//           <li className='sidebar-list-item'>
//             <a href="#" onClick={toggleProductsDropdown}>
//               <BsPeopleFill className='icon'/> Customer
//             </a>
//             {isProductsOpen && (
//               <ul className="dropdown-list">
//                 <li><a href="">Details</a></li>
//                 <li><a href="">Information</a></li>
//               </ul>
//             )}
//           </li>

//           {/* Spare Section with Dropdown */}
//           <li className='sidebar-list-item'>
//             <a href="#" onClick={toggleProductsDropdown}>
//               <BsMenuButtonWideFill className='icon'/> Spare
//             </a>
//             {isProductsOpen && (
//               <ul className="dropdown-list">
//                 <li><a href="">Add Spare</a></li>
//                 <li><a href="">Stock</a></li>
//               </ul>
//             )}
//           </li>

//           {/* Settings Section with Dropdown */}
//           <li className='sidebar-list-item'>
//             <a href="#" onClick={toggleProductsDropdown}>
//               <BsFillGearFill className='icon'/> Settings
//             </a>
//             {isProductsOpen && (
//               <ul className="dropdown-list">
//                 <li><a href="">About Us</a></li>
//                 <li><a href="">Stock</a></li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </div>
//     </aside>


//   );
// }

// export default Sidebar;


