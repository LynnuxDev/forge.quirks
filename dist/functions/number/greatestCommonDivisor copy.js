"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$leastCommonMultiple",
    aliases: ["$lcm"],
    version: "1.0.0",
    output: forgescript_1.ArgType.Boolean,
    description: "The Least Common Multiple of NumberA and NumberB.",
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
        let x = a, y = b;
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        let gcd = x;
        return this.success((a * b) / gcd);
    },
});
//# sourceMappingURL=greatestCommonDivisor%20copy.js.map