"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const path_1 = __importDefault(require("path"));
exports.default = new forgescript_1.NativeFunction({
    name: "$pathJoin",
    version: "1.2.1",
    output: forgescript_1.ArgType.Boolean,
    description: "Join paths together",
    unwrap: true,
    args: [
        {
            name: "main",
            description: "Main path to start from",
            required: true,
            rest: false,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "joins",
            description: "Path to join with main",
            rest: true,
            type: forgescript_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [main, matches]) {
        return this.success(path_1.default.join(main, ...matches));
    },
});
//# sourceMappingURL=pathJoin.js.map