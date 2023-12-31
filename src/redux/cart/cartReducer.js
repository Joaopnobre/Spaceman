import CartActionTypes from "./cartActionTypes";

const initialState = {
  products: [],
  productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // verificar se o produto já está no carrinho

    case CartActionTypes.ADD_PRODUCT:
      {
        const productIsAlreadyInCart = state.products.some(
          (product) => product.id === action.payload.id
        );
        // se ele estiver no carrinho aumentar em 1
        if (productIsAlreadyInCart) {
          return {
            ...state,
            products: state.products.map((product) =>
              product.id === action.payload.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
          };
        }
      }
      // se não estiver, adicioná-lo
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case CartActionTypes.INCREASE_PRODUCT_QUANTITY:{
      console.log('Ação de aumento disparada:', action.payload);
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    }
    // case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
    //   return {
    //     ...state,
    //     products: state.products
    //       .map((product) =>
    //         product.id === action.payload
    //           ? { ...product, quantity: product.quantity - 1 }
    //           : product
    //       )
    //       .filter((product) => product.quantity > 0),
    //   };
      case CartActionTypes.DECREASE_PRODUCT_QUANTITY: {
        console.log('Ação de diminuição disparada:', action.payload);
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload && product.quantity > 0
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
        };
      }
    default:
      return state;
  }
};
export default cartReducer;
