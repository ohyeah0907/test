import slices from "../slices/index.js";

const reducer = {}

Object.keys(slices).forEach((key) => {
    reducer[key] = slices[key].reducer;
})

export default reducer;