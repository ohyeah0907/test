import { configureStore } from '@reduxjs/toolkit'
import reducer from '../reducers/index.js'

export default configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  })