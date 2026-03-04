"use client";

import { useState } from "react";

interface Product {
  id: number;
  name: string;
  color: string;
  quantity: number;
  price: number;
  image: string;
  ref: string;
}

export default function Page() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Denim T-Shirt",
      color: "Blue",
      quantity: 2,
      price: 7500,
      image: "https://via.placeholder.com/60x60?text=T-Shirt",
      ref: "007197456",
    },
    {
      id: 2,
      name: "Denim Pants",
      color: "Blue",
      quantity: 3,
      price: 9000,
      image: "https://via.placeholder.com/60x60?text=Pants",
      ref: "011015233",
    },
    {
      id: 3,
      name: "Sony Smartwatch",
      color: "Black",
      quantity: 1,
      price: 24500,
      image: "https://via.placeholder.com/60x60?text=Watch",
      ref: "004822981",
    },
    {
      id: 4,
      name: "Cognac Oxford",
      color: "Brown",
      quantity: 1,
      price: 4500,
      image: "https://via.placeholder.com/60x60?text=Shoes",
      ref: "035772962",
    },
  ]);

  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex relative overflow-hidden">
      {/* Left side - Cart */}
      <div
        className={`bg-white rounded-md p-6 shadow-md transition-all duration-300 ease-in-out
          ${isOpen ? "w-[calc(100%-20rem)]" : "w-full"}
        `}
        style={{ flexShrink: 0 }}
      >
        <h2 className="text-xl font-semibold mb-6">Your Shopping Cart</h2>

        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between bg-gray-50 p-4 rounded"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-xs text-gray-400">Ref. {product.ref}</p>
                </div>
              </div>

              <p className="text-gray-600">{product.color}</p>

              <div className="flex items-center gap-2">
  {/* Número a la izquierda */}
  <span className="text-sm font-medium w-4 text-center">
    {product.quantity}
  </span>

  {/* + y - en columna */}
  <div className="flex flex-col gap-1">
    <button className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-sm hover:bg-gray-400 transition">
      +
    </button>

    <button className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-sm hover:bg-gray-400 transition">
      -
    </button>
  </div>
</div>

              <p className="font-semibold">
                {(product.price * product.quantity).toLocaleString()} NGN
              </p>

              <button className="text-gray-400 hover:text-red-500 font-bold">
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center font-semibold">
          <button className="text-gray-500 hover:text-gray-900 flex items-center gap-1">
            ← Back to Shop
          </button>
          <p>
            Subtotal:{" "}
            <span className="font-bold">{subtotal.toLocaleString()} NGN</span>
          </p>
        </div>
      </div>

      {/* WRAPPER PANEL + BOTÓN */}
      <div
        className={`fixed top-0 right-0 h-full flex transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-[20rem]"}
        `}
      >
        {/* Botón (siempre visible) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-24 self-center bg-gray-900 border border-yellow-400 rounded-l-full w-8 flex flex-col justify-center items-center gap-1 cursor-pointer z-50"
          aria-label={isOpen ? "Cerrar panel de tarjeta" : "Abrir panel de tarjeta"}
          title={isOpen ? "Cerrar" : "Abrir"}
        >
          <span className="block w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
          <span className="block w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
          <span className="block w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
        </button>

        {/* Panel derecho */}
        <div className="h-full w-80 bg-gray-900 text-yellow-400 p-6 shadow-lg flex flex-col gap-6">
          <h3 className="text-2xl font-semibold mb-4">Card Details</h3>

          <div>
            <p className="mb-2">Select Card Type</p>
            <div className="flex gap-4 items-center">
              <button className="bg-yellow-400 rounded-full w-10 h-6"></button>
              <button className="opacity-50">VISA</button>
              <button className="opacity-50">Verve</button>
            </div>
          </div>

          {/* Card Number */}
          <div className="flex flex-col gap-1">
          <label className="text-sm tracking-wide text-yellow-400">
          Card Number
          </label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="bg-transparent border-b border-white/50 focus:border-yellow-400 outline-none py-2 text-white placeholder-white/40"
          />
          </div>

          {/* Expiry + CW */}
          <div className="flex gap-6 mt-4">
          <div className="flex-1 flex flex-col gap-1">
          <label className="text-sm tracking-wide text-yellow-400">
          Expiry Date
          </label>
          <input
            type="text"
            placeholder="MM / YY"
            className="bg-transparent border-b border-white/50 focus:border-yellow-400 outline-none py-2 text-white placeholder-white/40"
          />
          </div>

          <div className="w-20 flex flex-col gap-1">
            <label className="text-sm tracking-wide text-yellow-400">
            CVV
            </label>
          <input
          type="password"
          placeholder="***"
          className="bg-transparent border-b border-white/50 focus:border-yellow-400 outline-none py-2 text-white placeholder-white/40"
          />
        </div>
        </div>

          <button className="mt-auto bg-yellow-400 text-gray-900 font-bold py-3 rounded hover:bg-yellow-300">
            Checkout
          </button>
        </div>
      </div>
      </div>
  );
}