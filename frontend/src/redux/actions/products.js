import slices from "../slices";
import { fetchProducts as fetchProductsThunk } from "../slices/products";

export const setProducts = async (dispatch, data) => {
  dispatch(slices.products.actions.setData(data));
};

export const fetchProducts = (dispatch) => {
    dispatch(fetchProductsThunk());
}