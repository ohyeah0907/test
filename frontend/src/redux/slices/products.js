import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/products`, {
    mehod: "GET",
  })
    .then((res) => res.json())
    .then((res) => res);
  return result;
});

const initialState = {
  data: {
    products: null,
  },
};

export default createSlice({
  name: "product", 
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data.products = action.payload;
    });
  },
});

export {fetchProducts}
