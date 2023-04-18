import { Router } from 'express'
import { auth } from '../../middlewear/auth.js'
import { fileValidation, HME, myMulter } from '../../services/multer.js'
import * as PC from './controller/post.js'
import { endPoint } from './post.endPoint.js'
const router = Router()




router.get("/", PC.getPost)
router.post("/", auth(endPoint.addPost), myMulter(fileValidation.image).single('image'), HME('/post'), PC.addPost)

router.get("/:id/delete", auth(endPoint.addPost), PC.deletePost)

router.get("/:id/getPostToUpdate", auth(endPoint.addPost), PC.getPostByIDToUpdate)
router.post("/:id/update", auth(endPoint.addPost),
    myMulter(fileValidation.image).single('image'),
    HME('/post'), PC.updatePost)



export default router