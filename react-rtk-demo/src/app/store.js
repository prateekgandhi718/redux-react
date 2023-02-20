import { configureStore } from '@reduxjs/toolkit'

// const reduxLogger = require('redux-logger')
import logger from 'redux-logger'

import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/iceCreamSlice'
import userReducer from'../features/user/userSlice'

const store = configureStore({
    reducer : {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store