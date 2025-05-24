import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const initialProducts = [
  {
    id: 1,
    name: "redmi9a",
    price: 12000000,
    description: 'smartphone entry-level yang menawarkan layar 6.53 inci dengan resolusi 720x1600, prosesor Mediatek Helio G25, kamera belakang 13MP, dan kamera depan 5MP..' ,
    image: "/assets/download.jpg",
  },
  {
    id: 2,
    name: "Samsung a15",
    price: 8500000,
    description: 'layar Super AMOLED 6.5 inci, chipset MediaTek Helio G99 atau Dimensity 6100+ (tergantung varian 4G atau 5G), kamera belakang 50MP, dan baterai 5000 mAh. .',
    image: "/assets/rr.jpg",
  },
  {
    id: 3,
    name: "iphone 16",
    price: 9500000,
    description: 'seri smartphone terbaru dari Apple yang hadir dengan berbagai peningkatan signifikan, termasuk desain yang lebih ramping, layar Super Retina XDR dengan teknologi Dynamic Island, chip A18 yang lebih bertenaga, dan sistem kamera ganda yang lebih canggih.',
    image: "/assets/ip.jpg",
  },
    {
    id: 4,
    name: "google pixel",
    price: 9500000,
    description: 'Ponsel Pixel besutan Google biasanya dikenal karena kualitas dan desain kameranya, terutama model Pro kelas atas dan Pixel 9 Pro Fold yang dapat dilipat. Namun, jangan remehkan perangkat lunaknya; perangkat lunak ini sering kali menjadi bagian penting yang membedakannya dari ponsel Android lainnya..',
    image: "/assets/gg.jpg",
  },
    {
    id: 5,
    name: "ip 7+",
    price: 9500000,
    description: 'iPhone 7 Plus adalah smartphone yang diluncurkan oleh Apple pada tahun 2016. iPhone 7 Plus memiliki layar Retina IPS LCD 5.5 inci, prosesor Apple A10 Fusion, kamera belakang 12MP dengan lensa dual, dan baterai 2915 mAh. .',
    image: "/assets/7.jpg",
  },
    {
    id: 6,
    name: "8+",
    price: 9500000,
    description: ' iPhone 8 Plus adalah smartphone yang diluncurkan oleh Apple pada tahun 2017. iPhone 8 Plus memiliki layar 5.5 inci, kamera ganda, dan desain yang masih relevan di tahun 2025. iPhone 8 Plus memiliki berbagai varian memori internal, seperti 64GB dan 256GB. .',
    image: "/assets/8.jpg",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>Jual Beli Skincare</h1>
      <button className="cart-toggle" onClick={() => setShowCart(!showCart)}>
        {showCart ? "Tutup Keranjang" : "Lihat Keranjang"}
      </button>
      {showCart && <Cart cart={cart} removeFromCart={removeFromCart} />}
      <ProductList products={initialProducts} addToCart={addToCart} />
    </div>
  );
}

export default App;
