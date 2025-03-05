"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$greatestCommonDivisor",
    aliases: ["$gcd"],
    version: "1.0.0",
    output: forgescript_1.ArgType.Number,
    description: "Get the Least Common Divider of NumberA and NumberB.",
    unwrap: true,
    args: [
        {
            name: "NumberA",
            description: "The first number.",
            required: true,
            rest: false,
            type: forgescript_1.ArgType.Number,
        },
        {
            name: "NumberB",
            description: "The second number.",
            required: true,
            rest: false,
            type: forgescript_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [a, b]) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return this.success(a);
    },
});
//# sourceMappingURL=greatestCommonDivisor.js.map