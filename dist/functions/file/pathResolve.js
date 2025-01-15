"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const path_1 = __importDefault(require("path"));
exports.default = new forgescript_1.NativeFunction({
    name: "$pathResolve",
    version: "1.2.1",
    output: forgescript_1.ArgType.String,
    description: "Resolve paths into an absolute path",
    unwrap: true,
    args: [
        {
            name: "main",
            description: "Main path to start resolving from",
            required: true,
            rest: false,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "joins",
            description: "Paths to resolve with main",
            rest: true,
            type: forgescript_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [main, joins]) {
        return this.success(path_1.default.resolve(main, ...joins));
    },
});
//# sourceMappingURL=pathResolve.js.map