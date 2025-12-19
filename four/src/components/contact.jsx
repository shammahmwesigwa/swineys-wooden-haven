
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
 import{ShoppingCart}   from "lucide-react"
export default function OrderPage() {
  const location = useLocation();
  const product = location.state?.product || { name: "", price: 0, img: "" };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);

  const total = product.price * quantity;

  const sendWhatsApp = () => {
    if (!name || !phone || !address) {
      alert("Please fill in all required fields.");
      return;
    }

    const whatsappNumber = "256758066428";
    const message = `
New Order <ShoppingCart/>
Name: ${name}
Phone: ${phone}
Address: ${address}

Product: ${product.name}
Price: $${product.price}
Quantity: ${quantity}
Total: ${total}
thank shammah always for having made this website
`;

    const url = `https://wa.me/${256758066428}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 h-screen w-screen">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-8 mt-20">
        
        <div className="md:w-1/2 flex flex-col items-center">
          {product.img && (
            <img
              src={product.img}
              alt={product.name}
              className="w-64 h-64 object-cover rounded-xl mb-4 shadow-lg"
            />
          )}
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-green-600 font-semibold text-xl">${product.price}</p>
        </div>

      
        <div className="md:w-1/2 flex flex-col gap-4 bg-pink-500">
          <h1 className="text-3xl font-bold mb-4 text-center bg-amber-400  rounded-4xl ">Place Your Order</h1>

          <input
            type="text"
            placeholder="Full Name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

     
          <textarea
            placeholder="Delivery Address"
            className="input h-24"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            type="number"
            min="1"
            className="input"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          <div className="bg-blue-800 rounded-xl p-4 mt-2 ">
            <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
            <p><strong>Product:</strong> {product.name}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Quantity:</strong> {quantity}</p>
            <hr className="my-2 opacity-50" />
            <p className="text-2xl font-bold">Total: ${total}</p>
          </div>

         
        </div>
         
      </div>

      <style>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 0.75rem;
          border: 1px solid #d1d5db;
          background: white;
          color: #111827;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .input::placeholder {
          color: #9ca3af;
        }

        .input:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.3);
        }
      `}</style>
      <button
            onClick={sendWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-amber-300 font-bold py-3 rounded-xl text-lg mt-80 mr-96 ml-20 transition  "
          >
            Send Order via WhatsApp
          </button>
    </div>
  );
}
