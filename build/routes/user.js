"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRouter = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
exports.UsersRouter = router;
const userClient = new client_1.PrismaClient().user;
// get all users
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userClient.findMany({
            include: {
                posts: true,
            },
        });
        res.status(200).json({ data: users });
    }
    catch (e) {
        console.log(e);
    }
}));
// TODO: get user by id
// TODO: create user
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const dateOfBirth = new Date(req.body.dateOfBirth).toISOString();
        const user = yield userClient.create({
            data: Object.assign(Object.assign({}, userData), { dateOfBirth }),
        });
        res.status(201).json({ data: user });
    }
    catch (e) {
        console.log(e);
    }
}));
