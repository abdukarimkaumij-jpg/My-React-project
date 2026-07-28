import "./cart-content.css";
import { useCartContext } from "../../context/CartContext";

function CartContent() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartContext();

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + (item?.product?.price || 0) * (item?.quantity || 1),
    0
  );

  return (
    <section className="cart">
      <div className="container cart__wrapper">

        <div className="cart__products">
          <h2 className="cart__title title">Savatcha</h2>

          {cart.length === 0 ? (
            <p>Savat bo‘sh 😢</p>
          ) : (
            cart.map((item) => {
              // 🔥 UNIVERSAL ID (ENG MUHIM JOY)
              const itemId = item?.id || item?.cart_item_id;

              return (
                <div className="cart__item" key={itemId}>
                  
                  <img
                    src={item?.product?.main_image || "/no-image.png"}
                    alt={item?.product?.name}
                    className="cart__item-img"
                  />

                  <div className="cart__item-info">
                    <h4 className="cart__item-title">
                      {item?.product?.name}
                    </h4>

                    <p className="cart__item-desc">
                      {item?.product?.description || "Product"}
                    </p>

                    <div className="cart__item-bottom">
                      <span className="cart__price">
                        {item?.product?.price}$
                      </span>

                      <div className="cart__counter">
                        <button onClick={() => decreaseQuantity(item)}>
                          -
                        </button>

                        <span>{item?.quantity || 1}</span>

                        <button onClick={() => increaseQuantity(item)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* ✅ DELETE */}
                  <button
                    className="cart__delete"
                    onClick={() => removeFromCart(item)}
                  >
                    ✖
                  </button>

                </div>
              );
            })
          )}
        </div>

        <div className="cart__summary">
          <h3>Buyurtma</h3>

          <div className="cart__summary-row">
            <span className="name">Mahsulotlar</span>
            <span className="number">{cart.length} ta</span>
          </div>

          <div className="cart__summary-row">
            <span className="name">Jami</span>
            <span className="total">{totalPrice}$</span>
          </div>

          <button className="cart__checkout">
            Rasmiylashtirish
          </button>
        </div>

      </div>
    </section>
  );
}

export default CartContent;