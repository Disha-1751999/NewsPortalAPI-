import express from "express";
import * as AdminController from '../src/controllers/AdminController.js';
import * as CategoryController from '../src/controllers/CategoryController.js';
import {AuthMiddleware, AuthTokenMiddleware} from "../src/middlewares/AuthMiddleware.js";
import * as PostController from "../src/controllers/PostController.js"

const router=express.Router();


//admin
router.post('/register',AuthMiddleware, AdminController.AdminRegisterController);
router.post('/login', AdminController.AdminLoginController);

//category
router.post('/create-category',AuthTokenMiddleware, CategoryController.CreateCategoryController);
router.post('/create-sub-category',AuthTokenMiddleware, CategoryController.CreateSubCategoryController);
router.get('/category-list',AuthTokenMiddleware, CategoryController.CategoryListController);
router.get('/sub-category-list/:categoryId',AuthTokenMiddleware, CategoryController.SubCategoryListController);
router.post('/delete-category/:categoryId',AuthTokenMiddleware, CategoryController.DeleteCategoryController);
router.post('/delete-sub-category/:subCategoryId',AuthTokenMiddleware, CategoryController.DeleteSubCategoryController);


//post
router.post('/post',AuthTokenMiddleware, PostController.CreatePostController );
router.get('/read-post/:PostId',AuthTokenMiddleware, PostController.ReadPostController );
router.post('/delete-post/:PostId',AuthTokenMiddleware, PostController.DeletePostController );
router.get('/SearchByKeyword/:keyword',AuthTokenMiddleware, PostController.SearchByKeywordController );








export default router;
