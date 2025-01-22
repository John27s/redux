import{ configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducer/counterSlice.js'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})