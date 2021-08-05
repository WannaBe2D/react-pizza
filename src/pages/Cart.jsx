import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCartItem, removeCartItem, deleteCartItem, deleteAllCart } from '../redux/actions/cart';
import { Link } from 'react-router-dom';
import EmptyCart from '../components/EmptyCart';

const Cart = React.memo(function Cart() {
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector(({ cart }) => cart);

  const filterItems = items.filter(
    (v, i, a) => a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i,
  );

  const itemTotalPrice = (items) => {
    var sum = 0;
    items.forEach((e) => {
      sum += e.price;
    });
    return sum;
  };

  const handleAddPizzaToCart = (obj) => {
    dispatch(setCartItem(obj));
  };

  const handleRemovePizzaInCart = (obj) => {
    dispatch(removeCartItem(obj));
  };

  const handleDeletePizzaInCart = (obj) => {
    dispatch(deleteCartItem(obj));
  };

  const handleDeleteAllItems = () => {
    dispatch(deleteAllCart());
  };

  return (
    <div className="cart">
      {items.length > 0 ? (
        <>
          <div className="cartHeader">
            <div className="cartLogo">
              <img src="imgAssets/shopCart.svg" alt="shopCart" />
              Корзина
            </div>
            <div onClick={() => handleDeleteAllItems()} className="cartDelete">
              <img src="imgAssets/trash.svg" alt="trash" />
              Очистить корзину
            </div>
          </div>

          {filterItems.map((element, index) => (
            <div key={index} className="cartItems">
              <div className="cartItemsLogo">
                <img width={80} height={80} src={element.image} alt="pizza" />
                <div className="cartItemsDescription">
                  <h2>{element.name}</h2>
                  <p>
                    {element.type} тесто, {element.size} см.
                  </p>
                </div>
              </div>

              <div className="itemCount">
                <img
                  onClick={() => handleRemovePizzaInCart(element)}
                  src="imgAssets/minus.svg"
                  alt="minus"
                />
                <b>{items.filter((x) => JSON.stringify(x) === JSON.stringify(element)).length}</b>
                <img
                  onClick={() =>
                    handleAddPizzaToCart({
                      id: element.id,
                      name: element.name,
                      image: element.image,
                      price: element.price,
                      type: element.type,
                      size: element.size,
                    })
                  }
                  src="imgAssets/plus.svg"
                  alt="plus"
                />
              </div>
              <b>
                {itemTotalPrice(items.filter((x) => JSON.stringify(x) === JSON.stringify(element)))}{' '}
                ₽
              </b>
              <img
                onClick={() => handleDeletePizzaInCart(element)}
                className="itemBtnDelete"
                src="imgAssets/deleteItem.svg"
                alt="itemDelete"
              />
            </div>
          ))}

          <div className="cartDescription">
            <h4>
              Всего пицц: <span>{totalItems} шт.</span>
            </h4>
            <h5>
              Сумма заказа: <span>{totalPrice} ₽</span>
            </h5>
          </div>

          <div className="cartBtn">
            <Link to="/">
              <div className="cartnBtnBack">
                <img src="imgAssets/back.svg" alt="back" />
                <p>Вернуться назад</p>
              </div>
            </Link>
            <div className="cartBtnCheck">
              <p>Оплатить сейчас</p>
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
});
export default Cart;
