const  userController = require('../controllers/userController');
const router = require('express').Router();

//create

router.post('/', userController.createUser);


//Read

router.get('/', userController.getAllUsers);


//get by id

router.get('/:id', userController.getUserById);


//update

router.put('/:id', userController.updateUserById);


//delete

router.delete('/:id', userController.deleteUserById );

module.exports = router;