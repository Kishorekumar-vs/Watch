import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';


const dummyProducts = [
  {
    id: 1,
    name: 'Product A',
    price: 129.99,
    description: 'Classic gold finish watch, perfect for formal wear.',
    image:
      'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc4e387ff/images/Titan/Catalog/5065DL02_1.jpg?sw=360&sh=360',
  },
  {
    id: 2,
    name: 'Product B',
    price: 149.99,
    description: 'Trendy everyday casual with lightweight design.',
    image:
      'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb3422dcf/images/Titan/Catalog/1843QM02_1.jpg?sw=360&sh=360',
  },
  {
    id: 3,
    name: 'Product C',
    price: 119.99,
    description: 'Elegant Men’s watch with modern design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0d9eb436/images/Titan/Catalog/1696NC12_1.jpg?sw=360&sh=360',
  },
  {
    id: 4,
    name: 'Product D',
    price: 109.99,
    description: 'Classic gold finish watch, perfect for formal wear.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8fc37a35/images/Titan/Catalog/1696KC02_1.jpg?sw=360&sh=360',
  },
  {
    id: 5,
    name: 'Product E',
    price: 105.99,
    description: 'Trendy everyday casual with lightweight design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd90e5315/images/Titan/Catalog/1696KC05_1.jpg?sw=360&sh=360',
  },
  {
    id: 6,
    name: 'Product F',
    price: 129.99,
    description: 'Elegant Men’s watch with modern design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8fc37a35/images/Titan/Catalog/1696KC02_1.jpg?sw=360&sh=360',
  },
  {
    id: 7,
    name: 'Product G',
    price: 149.99,
    description: 'Classic gold finish watch, perfect for formal wear.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb249b527/images/Titan/Catalog/1843SM05_1.jpg?sw=360&sh=360',
  },
  {
    id: 8,
    name: 'Product H',
    price: 101.99,
    description: 'Trendy everyday casual with lightweight design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwff24f66c/images/Titan/Catalog/1843WL01_1.jpg?sw=360&sh=360',
  },
  {
    id: 9,
    name: 'Product I',
    price: 119.99,
    description: 'Elegant Men’s watch with modern design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw64efcb3a/images/Titan/Catalog/1696QC06_1.jpg?sw=360&sh=360',
  },
  {
    id: 10,
    name: 'Product J',
    price: 111.99,
    description: 'Classic gold finish watch, perfect for formal wear.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8fac1b4f/images/Titan/Catalog/1696QC09_1.jpg?sw=360&sh=360',
  },
    {
    id: 11,
    name: 'Product J',
    price: 167.99,
    description: 'Trendy everyday casual with lightweight design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwbd8e8365/images/Titan/Catalog/90110WL04_1.jpg?sw=360&sh=360',
  },
    {
    id: 12,
    name: 'Product J',
    price: 112.99,
    description: 'Elegant Men’s watch with modern design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb289751c/images/Titan/Catalog/2734QM01_1.jpg?sw=360&sh=360',
  },
    {
    id: 13,
    name: 'Product J',
    price: 113.99,
    description: 'Trendy everyday casual with lightweight design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2b8de2ca/images/Xylys/Catalog/40064KL02E_1.jpg?sw=360&sh=360',
  },
    {
    id: 14,
    name: 'Product J',
    price: 112.99,
    description: 'Classic gold finish watch, perfect for formal wear.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8bfda116/images/Titan/Catalog/2654WL01_1.jpg?sw=360&sh=360',
  },
    {
    id: 15,
    name: 'Product J',
    price: 114.99,
    description: 'Elegant Men’s watch with modern design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwec67bd37/images/Xylys/Catalog/40024KM01E_1.jpg?sw=360&sh=360',
  },
];

const CART_STORAGE_KEY = 'myCart';

const ProductPage = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    setNotification(`${product.name} added to cart`);
    setTimeout(() => setNotification(null), 2000);

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0 },
    });
  };

  const buyNow = (product) => {
    alert(`Proceeding to buy: ${product.name} for $${product.price.toFixed(2)}`);
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const reduceQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="container py-5">

      {notification && (
        <div
          className="alert alert-success text-center fw-bold position-fixed top-0 start-50 translate-middle-x mt-3 shadow"
          style={{ zIndex: 1050, width: 'fit-content' }}
        >
          {notification}
        </div>
      )}

      <h1 className="mb-4 text-center fs-1 fw-bold text-secondary">Premium Watches</h1>
      <div className="row g-4">
        {dummyProducts.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4">
            <div className="card product-card h-100">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center fw-bold fs-4">{product.name}</h5>
                <p className="card-text text-end fw-bold">Price: ${product.price.toFixed(2)}</p>
                <p className="text-dark ms-3 fw-semibold">{product.description}</p>
                <div className="mt-auto d-flex flex-column gap-2">
                  <button
                    className="btn btn-danger fw-bold"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart 🛒
                  </button>
                  <button
                    className="btn btn-dark fw-bold"
                    onClick={() => buyNow(product)}
                  >
                    Buy Now ⚡
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-5" />

      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{item.name}</strong> × {item.quantity} = $
                {(item.quantity * item.price).toFixed(2)}
              </div>
              <div>
                <button
                  className="btn btn-outline-success btn-sm me-2"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-warning btn-sm me-2"
                  onClick={() => reduceQuantity(item.id)}
                >
                  -
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductPage;
