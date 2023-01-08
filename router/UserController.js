const express = require('express');
const userService = require('../service/UserService')
const router = express.Router();
router.post('/get/:userId', async function (req, res) {
    let result = await userService.get(req.params.userId);
    res.send(result)
})
router.get('/all', async function (req, res) {
    let result = await userService.getAll()
    res.send(result)
})
router.post('/create', async function (req, res) {
    let result = await userService.createUser(req.body)
    res.send(result)
})
router.put('/update', async function (req, res) {
    let result = await userService.updateUser(req.body)
    res.send(result)
})
router.delete('/delete/:userId', async function (req, res) {
    let result = await userService.deleteUser(req.params.userId)
    res.send(result)
})
module.exports = router