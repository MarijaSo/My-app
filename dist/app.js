"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var hbs_1 = __importDefault(require("hbs"));
var path_1 = __importDefault(require("path"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    App.prototype.config = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static('public'));
        this.app.use('/', express_1.default.static('node_modules/bootstrap/dist'));
        hbs_1.default.registerPartials(path_1.default.join(__dirname, '../views/partials'));
        this.app.set('view engine', 'hbs');
        this.app.set('views', path_1.default.join(__dirname, '../views'));
    };
    App.prototype.routes = function () {
        var router = express_1.default.Router();
        router.get('/', function (req, res) {
            res.render('personal');
        });
        router.get('/films', function (req, res) {
            res.render('films');
        });
        router.get('/trips', function (req, res) {
            res.render('trips');
        });
        this.app.use('/', router);
    };
    return App;
}());
exports.default = new App().app;
