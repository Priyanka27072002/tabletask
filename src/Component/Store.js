import {configureStore} from '@reduxjs/toolkit'
import Slice from './Slice.js'
export const Store=configureStore({
    reducer:{
        data:Slice
    }
})
