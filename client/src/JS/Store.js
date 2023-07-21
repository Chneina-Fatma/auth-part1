import { configureStore } from '@reduxjs/toolkit'
import userSlice  from './user/Userslice'
import reservationslice from './reservationslice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    reservation:reservationslice
  },
})