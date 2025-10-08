import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';


const dummyProducts = [
  {
    id: 1,
    name: 'Product A',
    price: 129.99,
    description: 'Trendy everyday casual watch with lightweight design.',
    image:
      'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe1541fd3/images/Fastrack/Catalog/FV60073WM01_1.jpg?sw=360&sh=360',
  },
  {
    id: 2,
    name: 'Product B',
    price: 149.99,
    description: 'Classic gold finish watch, perfect for formal wear.',
    image:
      'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5487e70b/images/Titan/Catalog/2606WM08_1.jpg?sw=360&sh=360',
  },
  {
    id: 3,
    name: 'Product C',
    price: 119.99,
    description: 'Elegant Men’s watch with modern design.',
    image:
      'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw6c9df22a/images/Titan/Catalog/2656WM01_1.jpg?sw=360&sh=360',
  },
  {
    id: 4,
    name: 'Product D',
    price: 159.99,
    description: 'Trendy everyday casual with lightweight design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7571b2ae/images/Sonata/Catalog/SP80059WM01W_1.jpg?sw=360&sh=360',
  },
  {
    id: 5,
    name: 'Product E',
    price: 149.99,
    description: 'Elegant Men’s watch with modern design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwcf132ceb/images/Fastrack/Catalog/FV60072WM01_1.jpg?sw=360&sh=360',
  },
  {
    id: 6,
    name: 'Product F',
    price: 139.99,
    description: 'Classic gold finish watch, perfect for formal wear.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw06fdd990/images/Sonata/Catalog/SP80063YL01W_1.jpg?sw=360&sh=360',
  },
  {
    id: 7,
    name: 'Product G',
    price: 219.99,
    description: 'Trendy everyday casual with lightweight design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw35638a2a/images/Titan/Catalog/95154QM01_1.jpg?sw=360&sh=360',
  },
  {
    id: 8,
    name: 'Product H',
    price: 119.99,
    description: 'Elegant Men’s watch with modern design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2f56c1b1/images/Sonata/Catalog/SP80055WM01W_1.jpg?sw=360&sh=360',
  },
  {
    id: 9,
    name: 'Product I',
    price: 149.99,
    description: 'Classic gold finish watch, perfect for formal wear.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw45b4db71/images/Sonata/Catalog/SP80075KM03W_1.jpg?sw=360&sh=360',
  },
  {
    id: 10,
    name: 'Product J',
    price: 112.99,
    description: 'Trendy everyday casual with lightweight design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb238d253/images/Fastrack/Catalog/FV60076QM01_1.jpg?sw=360&sh=360',
  },
    {
    id: 11,
    name: 'Product J',
    price: 109.99,
    description: 'Classic gold finish watch, perfect for formal wear.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7a9c70d5/images/Titan/Catalog/2725YM01_1.jpg?sw=360&sh=360',
  },
    {
    id: 12,
    name: 'Product J',
    price: 99.99,
    description: 'Elegant Men’s watch with modern design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3279e3ea/images/Sonata/Catalog/SP80051KD02W_1.jpg?sw=360&sh=360',
  },
    {
    id: 13,
    name: 'Product J',
    price: 115.99,
    description: 'Trendy everyday casual with lightweight design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwac2b839a/images/Sonata/Catalog/SP80077BM02WF_1.jpg?sw=360&sh=360',
  },
    {
    id: 14,
    name: 'Product J',
    price: 105.99,
    description: 'Classic gold finish watch, perfect for formal wear.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4d62c182/images/Sonata/Catalog/SP80029WL02W_1.jpg?sw=360&sh=360',
  },
    {
    id: 15,
    name: 'Product J',
    price: 111.99,
    description: 'Elegant Men’s watch with modern design.',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfb8dc766/images/Titan/Catalog/2644KM02_1.jpg?sw=360&sh=360',
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

      <h1 className="mb-4 text-center fs-1 fw-bold text-secondary">Watches For Women</h1>
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
