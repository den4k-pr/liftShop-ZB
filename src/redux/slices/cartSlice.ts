import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
}

const loadCartFromLocalStorage = (): CartState => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : { items: [] };
};

const initialState: CartState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ id: string; name: string; size: string; price: number }>
    ) => {
      const existingItem = state.items.find(
        (item) =>
          item.name === action.payload.name &&
          item.size === action.payload.size
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = parseFloat((existingItem.quantity * existingItem.price).toFixed(2));
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          size: action.payload.size,
          price: action.payload.price,
          quantity: 1,
          totalPrice: parseFloat(action.payload.price.toFixed(2)),
        });
      }
      saveCartToLocalStorage(state);
    },
    incrementQuantity: (state, action: PayloadAction<{ id: string; size: string }>) => {
      const item = state.items.find(
        (i) => i.id === action.payload.id && i.size === action.payload.size
      );
      if (item) {
        item.quantity += 1;
        item.totalPrice = parseFloat((item.quantity * item.price).toFixed(2));
      }
      saveCartToLocalStorage(state);
    },
    decrementQuantity: (state, action: PayloadAction<{ id: string; size: string }>) => {
      const item = state.items.find(
        (i) => i.id === action.payload.id && i.size === action.payload.size
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = parseFloat((item.quantity * item.price).toFixed(2));
      }
      saveCartToLocalStorage(state);
    },
    removeItem: (state, action: PayloadAction<{ id: string; size: string }>) => {
      state.items = state.items.filter(
        (i) => !(i.id === action.payload.id && i.size === action.payload.size)
      );
      saveCartToLocalStorage(state);
    },
  },
});

const saveCartToLocalStorage = (state: CartState) => {
  localStorage.setItem('cart', JSON.stringify(state));
};

export const { addItem, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
