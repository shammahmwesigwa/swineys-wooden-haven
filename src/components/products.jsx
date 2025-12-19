// import React, { useState } from 'react'
// import './products.css'
// import { Heart, HeartOff } from 'lucide-react'

// const Products = () => {
//   const [count, setCount] = useState(0)

//   const handleClick = () => {
//     setCount(prev => prev + 1)
//   }

//   return (
    
//     <div className="bg-grey h-100 w-screen pt-300px ">
//       <div className='fixed backdrop-blur-3xl w-screen '>
//       <h1 className="sticky pl-170 font-stretch-125%">SWINEYS WOODEN HAVEN</h1>
//       <q>THE HOME OF QUALITY PRODUCTS</q>
//       </div>


//       <div className="grid grid-cols-4 gap-6 mt-100px  ">
        

//         <div className="spoon bg-amber-200  hover:scale-105 hover:shadow-2x ">
//           <img src="./OIP (1).jpg" alt="spoon" className="rot pl-0.5" />
//           <marquee>top quality spoon</marquee>

//           {/* Like button */}
//           <Heart className="lon animate-pulse" onClick={handleClick}>
//             </Heart>
          

//           {/* Unlike button */}
//           <button className="yon">
//             <HeartOff />
//           </button>

//           <button>send order</button>

//           {/* State output */}
//           <p>{count}</p>
//        </div>
//        <div className='spoon'>
//         <img src="./OIP (2).jpg" alt="" className='rot'/>
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'><Heart /></Heart>
//         <button className='yon'><HeartOff /></button>
        
//         <button>send order</button>
//        </div>
//         <div className='spoon'>
//         <img src="./OIP (3).jpg" alt="" className='rot'/>
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse '><Heart /></Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div>
//         <div className='spoon'>
//         <img src="./OIP (4).jpg" alt="" className='rot'/>
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'><Heart /></Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (5).jpg" alt="" className='rot' />
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'><Heart /></Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (6).jpg" alt="" className='rot' />
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'><Heart /></Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (7).jpg" alt="" className='rot' />
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'><Heart /></Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div>
//         <div className='spoon'>
//         <img src="./OIP (8).jpg" alt="" className='rot' />
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (9).jpg" alt=""  className='rot'/>
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (10).jpg" alt=""className='rot' />
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (11).jpg" alt="" className='rot'/>
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (12).jpg" alt="" className='rot' />
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (13).jpg" alt="" className='rot' />
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (14).jpg" alt="" className='rot'/>
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className=''>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (15).jpg" alt=""  className='rot'/>
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (16).jpg" alt="" className='rot' />
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div>
//         <div className='spoon'>
//         <img src="./OIP (17).jpg" alt="" className='rot' />
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div>
//         <div className='spoon'>
//         <img src="./OIP (18).jpg" alt="" className='rot' />
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div>
//         <div className='spoon'>
//         <img src="./OIP (19).jpg" alt="" className='rot'/>
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (20).jpg" alt="" className='rot' />
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (21).jpg" alt="" className='rot' />
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (22).jpg" alt="" className='rot'/>
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (23).jpg" alt="" className='rot'/>
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (24).jpg" alt="" className='rot' />
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP (25).jpg" alt=""  className='rot'/>
//         <p>top quality spoon</p>
//         <Heart className='lon animate-pulse'>like</Heart>
//         <button className='yon'>unlike</button>
//         <button>send order</button>
//        </div> <div className='spoon'>
//         <img src="./OIP.jpg" alt="" className='rot'/>
//         <p>top quality spoon</p>
        
//         <Heart className='lon animate-pulse'>unlike</Heart>
//         <button className='yon'>send order</button>
//        </div> 
//        </div>







// <Heart/>

//     </div>
//   )
// }

// export default Products


// "

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, HeartOff } from "lucide-react";
import './products.css';

const productList = [
  { id: 1, name: "spoon", price: 10, img: "./OIP (1).jpg" },
  { id: 2, name: "cup", price: 15, img: "./OIP (2).jpg" },
  { id: 3, name: "cup", price: 20, img: "./OIP (3).jpg" },
  { id: 4, name: "mugs", price: 25, img: "./OIP (4).jpg" },
  { id: 5, name: "wine galsses", price: 30, img: "./OIP (5).jpg" },
   { id: 5, name: "cups", price: 30, img: "./OIP (6).jpg" },
   { id: 5, name: "cup", price: 30, img: "./OIP (7).jpg" },
   { id: 5, name: "small glass", price: 30, img: "./OIP (8).jpg" },
   { id: 5, name: "cup", price: 30, img: "./OIP (9).jpg" },
   { id: 5, name: "bowl", price: 30, img: "./OIP (10).jpg" },
   { id: 5, name: "wine class", price: 30, img: "./OIP (11).jpg" },
   { id: 5, name: "wine glass", price: 30, img: "./OIP (12).jpg" },
   { id: 5, name: "wine glass", price: 30, img: "./OIP (13).jpg" },
   { id: 5, name: "cup", price: 30, img: "./OIP (14).jpg" },
   { id: 5, name: "wine glass", price: 30, img: "./OIP (15).jpg" },
   { id: 5, name: "wine glass", price: 30, img: "./OIP (15).jpg" },
   { id: 5, name: "wine glass", price: 30, img: "./OIP (16).jpg" },
   { id: 5, name: "wine glass", price: 30, img: "./OIP (17).jpg" },
   { id: 5, name: "tray", price: 30, img: "./OIP (18).jpg" },
   { id: 5, name: "tray", price: 30, img: "./OIP (19).jpg" },
   { id: 5, name: "bowl and tray", price: 30, img: "./OIP (20).jpg" },
   { id: 5, name: "coasters", price: 30, img: "./OIP (21).jpg" },
   { id: 5, name: "dinner plates", price: 30, img: "./OIP (22).jpg" },
   { id: 5, name: "motar and pestal", price: 30, img: "./OIP (23).jpg" },
   { id: 5, name: "moter and pestal", price: 30, img: "./OIP (24).jpg" },
   { id: 5, name: "motar and pestal", price: 30, img: "./OIP (25).jpg" },
               { id: 5, name: "tea kettle and cups", price: 30, img: "./OIP (38).jpg" }, 
                { id: 5, name: "cups", price: 30, img: "./OIP (39).jpg" },
                 { id: 5, name: "mugs", price: 30, img: "./OIP (40).jpg" },
   
];

const Products = () => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => setLiked(prev => ({ ...prev, [id]: !prev[id] }));

  const orderProduct = (product) => {
    navigate("/contact", { state: { product } });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4 ">SWINEYS WOODEN HAVEN</h1>
      <q>THE HOME OF QUALITY PRODUCTS</q>

      <div className="grid grid-cols-4 gap-6 mt-10 h-screen w-screen ">
        {productList.map(product => (
          <div key={product.id} className="spoon bg-amber-200 hover:scale-105 hover:shadow-2xl p-4 rounded-xl ">
            <img src={product.img} alt={product.name} className="rot mb-2" />
            <p className="font-semibold">{product.name}</p>
            <p className="text-green-700 font-bold">${product.price}</p>

            <div className="flex items-center gap-2 mt-2">
              <button onClick={() => toggleLike(product.id)}>
                {liked[product.id] ? <HeartOff /> : <Heart />}
              </button>

              <button
                className="bg-green-500 text-white px-3 py-1 rounded"
                onClick={() => orderProduct(product)}
              >
                Send Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
