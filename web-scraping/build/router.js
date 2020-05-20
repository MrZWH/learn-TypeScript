"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send('hello world');
});
router.get('/getData', function (req, res) {
    res.send('bye world');
});
exports.default = router;
