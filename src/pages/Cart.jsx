import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCartItem, removeCartItem, deleteCartItem, deleteAllCart } from '../redux/actions/cart';

function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ cart }) => cart);

  const filterItems = items.filter(
    (v, i, a) => a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i,
  );
  React.useEffect(() => {
    console.log(items);
  }, [items]);

  const totalPrice = (items) => {
    var sum = 0;
    items.map((e) => {
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
            <img onClick={() => handleRemovePizzaInCart(element)} src="imgAssets/minus.svg" />
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
            />
          </div>
          <b>{totalPrice(items.filter((x) => JSON.stringify(x) === JSON.stringify(element)))} ₽</b>
          <img
            onClick={() => handleDeletePizzaInCart(element)}
            className="itemBtnDelete"
            src="imgAssets/deleteItem.svg"
            alt="itemDelete"
          />
        </div>
      ))}
    </div>
  );
}

export default Cart;
