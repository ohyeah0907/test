import slices from "../slices";

export const showNotify = (dispatch, data) => {
    dispatch(slices.notify.actions.showNotify(data))
}

export const hideNotify = (dispatch) => {
    dispatch(slices.notify.actions.hideNotify())
}