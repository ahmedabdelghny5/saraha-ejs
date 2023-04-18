import { Router } from 'express'
import { auth } from '../../middlewear/auth.js'
import { validation } from '../../middlewear/validation.js'
import { endPoint } from './auth.endPoint.js'
import * as validators from './auth.validation.js'
import * as RC from './controller/registration.js'
const router = Router()



//get signup page as FrontEnd
router.get("/", RC.getSignup)
router.post("/signup", validation(validators.signup , '/auth/') ,RC.signup)
//confirmEmail
router.get('/confirmEmail/:token' , RC.confirmEmail)

//signin
router.get('/signin' , RC.getSignin)
router.post('/signin' ,  validation(validators.signin , '/auth/signin'), RC.signin)

router.get('/logout' ,auth(endPoint.logout) ,RC.logout)




export default router