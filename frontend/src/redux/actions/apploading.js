import slices from "../slices";

export const showLoading = (dispatch) => {
    dispatch(slices.apploading.actions.showLoading());
} 
