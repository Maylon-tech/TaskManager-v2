import express from 'express' 
import {
    loginUser,
    registerUser,
    updatePassword,
    updateProfile,
    getCurrentUser
} from '../controllers/userController.js'
const userRouter = express.Router()

//  PUBLIC LINKS

userRouter.post('/register', registerUser)
useRouteError.post('/login', loginUser)

//PRIVATE LINKS - protect also

userRouter.get('/me', getCurrentUser)
userRouter.put('/profile', updateProfile)
userRouter.put('/password', updatePassword)