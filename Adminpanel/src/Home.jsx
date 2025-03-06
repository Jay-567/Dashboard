// import React, { useState } from 'react';
// import { BsFillArchiveFill, BsFillBellFill, BsPeopleFill, BsFillCartFill, BsFacebook, BsInstagram, BsAmazon, BsFillBagFill } from 'react-icons/bs';
// import './home.css';


// function Home() {
//   // State to manage clicked card color
//   const [activeCard, setActiveCard] = useState(null);

//   // Function to handle card click
//   const handleCardClick = (cardName) => {
//     setActiveCard(cardName);
//   };

//   return (
//     <main className='main-container'>
      
//       {/* Search Bar Section */}
//       <div className="search-bar-container">
//         <input type="text" placeholder="Search..." className="search-bar" />
//       </div>

//       {/* Main Stats Cards Section */}
//       <div className="main-cards-container">
//         <div className="main-cards">
//           {/* Cards */}
//           <div 
//             className={`card ${activeCard === 'products' ? 'active-card' : ''}`}
//             onClick={() => handleCardClick('products')}
//           >
//             <div className="card-inner">
//               <h3>Total Products</h3>
//               <BsFillArchiveFill className="card_icon" />
//             </div>
//             <h3>300</h3>
//           </div>

//           <div 
//             className={`card ${activeCard === 'orders' ? 'active-card' : ''}`}
//             onClick={() => handleCardClick('orders')}
//           >
//             <div className="card-inner">
//               <h3>Total Orders</h3>
//               <BsFillCartFill className="card_icon" />
//             </div>
//             <h3>33</h3>
//           </div>

//           <div 
//             className={`card ${activeCard === 'customers' ? 'active-card' : ''}`}
//             onClick={() => handleCardClick('customers')}
//           >
//             <div className="card-inner">
//               <h3>Total Customers</h3>
//               <BsPeopleFill className="card_icon" />
//             </div>
//             <h3>42</h3>
//           </div>

//           <div 
//             className={`card ${activeCard === 'purchases' ? 'active-card' : ''}`}
//             onClick={() => handleCardClick('purchases')}
//           >
//             <div className="card-inner">
//               <h3>Total Purchases</h3>
//               <BsFillArchiveFill className="card_icon" />
//             </div>
//             <h3>33</h3>
//           </div>

//           <div 
//             className={`card ${activeCard === 'sales' ? 'active-card' : ''}`}
//             onClick={() => handleCardClick('sales')}
//           >
//             <div className="card-inner">
//               <h3>Total Sales</h3>
//               <BsFillArchiveFill className="card_icon" />
//             </div>
//             <h3>33</h3>
//           </div>

//           <div 
//             className={`card ${activeCard === 'spare' ? 'active-card' : ''}`}
//             onClick={() => handleCardClick('spare')}
//           >
//             <div className="card-inner">
//               <h3>Spare Parts</h3>
//               <BsFillArchiveFill className="card_icon" />
//             </div>
//             <h3>33</h3>
//           </div>

//           <div 
//             className={`card ${activeCard === 'quotes' ? 'active-card' : ''}`}
//             onClick={() => handleCardClick('quotes')}
//           >
//             <div className="card-inner">
//               <h3>Quotes</h3>
//               <BsFillBellFill className="card_icon" />
//             </div>
//             <h3>33</h3>
//           </div>

//           <div 
//             className={`card ${activeCard === 'amazonOrders' ? 'active-card' : ''}`}
//             onClick={() => handleCardClick('amazonOrders')}
//           >
//             <div className="card-inner">
//               <h3>Amazon Orders</h3>
//               <BsFillBellFill className="card_icon" />
//             </div>
//             <h3>33</h3>
//           </div>

//           <div 
//             className={`card ${activeCard === 'flipkartOrders' ? 'active-card' : ''}`}
//             onClick={() => handleCardClick('flipkartOrders')}
//           >
//             <div className="card-inner">
//               <h3>Flipkart Orders</h3>
//               <BsFillBellFill className="card_icon" />
//             </div>
//             <h3>33</h3>
//           </div>
//         </div>
//       </div>


//       {/* Social Media Icons Section */}
//       <div className="social-media-container">
//         <h4>Follow Us on Social Media</h4>
//         <div className="social-media-links">
//           <a href="https://www.facebook.com/OptroTech" target="_blank" rel="noopener noreferrer">
//             <BsFacebook className="social-icon" />
//             <span>Facebook</span>
//           </a>
//           <a href="https://www.instagram.com/OptroTech" target="_blank" rel="noopener noreferrer">
//             <BsInstagram className="social-icon" />
//             <span>Instagram</span>
//           </a>
//           <a href="https://www.amazon.com/OptroTech" target="_blank" rel="noopener noreferrer">
//             <BsAmazon className="social-icon" />
//             <span>Amazon</span>
//           </a>
//           <a href="https://www.flipkart.com/OptroTech" target="_blank" rel="noopener noreferrer">
//             <BsFillBagFill className="social-icon" />
//             <span>Flipkart</span>
//           </a>
//         </div>
//       </div>

//       {/* Bar Chart Section */}
//       <div className="chart-container">
//         {/* Placeholder for chart */}
//       </div>
//     </main>
//   );
// }

// export default Home;
import React, { useState } from 'react';
import { BsFillArchiveFill, BsFillBellFill, BsPeopleFill, BsFillCartFill, BsFacebook, BsInstagram, BsAmazon, BsFillBagFill } from 'react-icons/bs';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './home.css';

function Home() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardName) => {
    setActiveCard(cardName);
  };

  return (
    <main className='main-container'>
      
      {/* Search Bar Section */}
      <div className="search-bar-container">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>

      {/* Main Stats Cards Section */}
      <div className="main-cards-container">
        <div className="main-cards">
          {/* Cards */}
          {[
            { name: 'products', label: 'Total Products', value: 300, icon: <BsFillArchiveFill /> },
            { name: 'orders', label: 'Total Orders', value: 33, icon: <BsFillCartFill /> },
            { name: 'customers', label: 'Total Customers', value: 42, icon: <BsPeopleFill /> },
            { name: 'purchases', label: 'Total Purchases', value: 33, icon: <BsFillArchiveFill /> },
            { name: 'sales', label: 'Total Sales', value: 33, icon: <BsFillArchiveFill /> },
            { name: 'spare', label: 'Spare Parts', value: 33, icon: <BsFillArchiveFill /> },
            { name: 'quotes', label: 'Quotes', value: 33, icon: <BsFillBellFill /> },
            { name: 'amazonOrders', label: 'Amazon Orders', value: 33, icon: <BsFillBellFill /> },
            { name: 'flipkartOrders', label: 'Flipkart Orders', value: 33, icon: <BsFillBellFill /> },
          ].map((card) => (
            <div 
              key={card.name}
              className={`card ${activeCard === card.name ? 'active-card' : ''}`}
              onClick={() => handleCardClick(card.name)}
            >
              <div className="card-inner">
                <h3>{card.label}</h3>
                <div className="card_icon">{card.icon}</div>
              </div>
              <h3>{card.value}</h3>
            </div>
            
          ))}
        </div>
        
      </div>
      

      {/* Social Media Icons Section */}
      <div className="social-media-container">
        <h4>Follow Us on Social Media</h4>
        <div className="social-media-links">
          {[
            { icon: <BsFacebook />, label: 'Facebook', url: 'https://www.facebook.com/OptroTech' },
            { icon: <BsInstagram />, label: 'Instagram', url: 'https://www.instagram.com/OptroTech' },
            { icon: <BsAmazon />, label: 'Amazon', url: 'https://www.amazon.com/OptroTech' },
            { icon: <BsFillBagFill />, label: 'Flipkart', url: 'https://www.flipkart.com/OptroTech' }
          ].map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="social-media-link">
              <div className="social-icon">{social.icon}</div>
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="chart-container">
        {/* Placeholder for chart */}
      </div>
    </main>
  );
}

export default Home;
