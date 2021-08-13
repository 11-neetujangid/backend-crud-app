import express from 'express';

import { getUsers, addUser, getUserById, editUsers, deleteUser, loginUser} from '../Controller/userController.js';
import {addPost ,getPosts, getPostById, editPost} from '../Controller/postController.js';

import {addComment, getComments} from '../Controller/commentController.js';
const route = express.Router();

// User--->
route.post('/add', addUser);
route.post('/signin', loginUser);
route.get('/', getUsers);
route.put('/:id', editUsers);
route.delete('/:id', deleteUser);

// post-->
route.post('/addPost',addPost);
route.get('/post', getPosts);
route.put('/addPost/:id', editPost);

// comment-->
route.post('/addcomment', addComment);
route.get('/comment', getComments);


route.get('/addPost/:id',  getPostById);
route.get('/:id', getUserById);

export default route;