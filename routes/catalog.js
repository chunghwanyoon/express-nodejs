var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var book_instance_controller = require('../controllers/bookinstanceController');

/// BOOK ROUTES ///

// GET catalog homepage.
router.get('/', book_controller.index);

// CREATE일때, HTTP METHOD가 GET, POST방식에 따라 다른 라우터에 접근됨.
// NOTE This must come before routes that display Book(uses id).
// CREATE
router.get('/book/create', book_controller.book_create_get);
router.post('/book/create', book_controller.book_create_post);

/// DELETE, UPDATE는 Detail페이지에서 활성화되기 때문에 주소에 :id가 추가됨!!!
// DELETE
router.get('/book/:id/delete', book_controller.book_delete_get);
router.post('/book/:id/delete', book_controller.book_delete_post);

// UPDATE
router.get('/book/:id/update', book_controller.book_update_get);
router.post('/book/:id/update', book_controller.book_update_post);

// GET request for one Book
router.get('/book/:id', book_controller.book_detail);

// GET request for list of all Book items.
router.get('/books', book_controller.book_list);


/// AUTHOR ROUTES ///

// NOTE This must come before route for id (i.e. display author).
// CREATE
router.get('/author/create', author_controller.author_create_get);
router.post('/author/create', author_controller.author_create_post);

// DELETE
router.get('/author/:id/delete', author_controller.author_delete_get);
router.post('/author/:id/delete', author_controller.author_delete_post);

// UPDATE
router.get('/author/:id/update', author_controller.author_update_get);
router.post('/author/:id/update', author_controller.author_update_post);

// GET request for one Author.
router.get('/author/:id', author_controller.author_detail);

// GET request for list of all Authors.
router.get('/authors', author_controller.author_list);

/// GENRE ROUTES ///

// NOTE This must come before route that displays Genre (uses id).
// CREATE
router.get('/genre/create', genre_controller.genre_create_get);
router.post('/genre/create', genre_controller.genre_create_post);

// DELETE
router.get('/genre/:id/delete', genre_controller.genre_delete_get);
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// UPDATE
router.get('/genre/:id/update', genre_controller.genre_update_get);
router.post('/genre/:id/update', genre_controller.genre_update_post);

// GET request for one Genre
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of all Genres.
router.get('/genres', genre_controller.genre_list);


/// BOOKINSTANCE ROUTES ///

// NOTE This must come before route that displays BookInstance(uses id)/
// CREATE
router.get('/bookinstance/create', book_instance_controller.bookinstance_create_get);
router.post('/bookinstance/create', book_instance_controller.bookinstance_create_post);

// DELETE
router.get('/bookinstance/delete', book_instance_controller.bookinstance_delete_get);
router.post('/bookinstance/delete', book_instance_controller.bookinstance_delete_post);

// UPDATE
router.get('/bookinstance/update', book_instance_controller.bookinstance_update_get);
router.post('/bookinstance/update', book_instance_controller.bookinstance_update_post);

// GET request for one Bookinstance.
router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

// GET request for list of all Bookinstances.
router.get('/bookinstances', book_instance_controller.bookinstance_list);


/// EXPORT THIS MODULE ///
module.exports = router;

