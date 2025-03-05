"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$isEven",
    version: "1.0.0",
    output: forgescript_1.ArgType.Boolean,
    description: "Check if a number is even, Returns true if even and false if odd.",
    unwrap: true,
    args: [
        {
            name: "Number",
            description: "Number to check if even.",
            required: true,
            rest: false,
            type: forgescript_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [num]) {
        return this.success(Number.isInteger(num) && num % 2 === 0);
    },
});
//# sourceMappingURL=isEvenNumber.js.map