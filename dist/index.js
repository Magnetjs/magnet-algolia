"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
const algoliasearch = require("algoliasearch");
class MagnetAlgoliasearch extends module_1.Module {
    get moduleName() { return 'algoliasearch'; }
    get defaultConfig() { return __dirname; }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            this.insert(algoliasearch(this.config.applicationId, this.config.apiKey));
            this.app.algoliasearchIndexes = {};
            Object
                .keys(this.config.indexes)
                .forEach((key) => {
                this.app.algoliasearchIndexes[key] = this.app.algoliasearch.initIndex(this.config.indexes[key]);
            });
        });
    }
    teardown() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.algoliasearch.destroy();
        });
    }
}
exports.default = MagnetAlgoliasearch;
//# sourceMappingURL=index.js.map