"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _login = require('../middlewares/login'); var _login2 = _interopRequireDefault(_login);

const router = new (0, _express.Router)();

router.get('/', _AlunoController2.default.index);
router.post('/', _login2.default, _AlunoController2.default.create);
router.put('/:id', _login2.default, _AlunoController2.default.update);
router.get('/:id', _AlunoController2.default.show);
router.delete('/:id', _login2.default, _AlunoController2.default.delete);

exports. default = router;
