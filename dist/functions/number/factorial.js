"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$factorial",
    version: "1.0.0",
    output: forgescript_1.ArgType.Number,
    description: "",
    unwrap: true,
    args: [
        {
            name: "Number",
            description: ".",
            required: true,
            rest: false,
            type: forgescript_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [num]) {
        let result = BigInt(1);
        if (num === 0 || num === 1) {
            result = BigInt(1);
        }
        else {
            for (let i = 2; i <= num; i++) {
                result *= BigInt(i);
            }
        }
        return this.success(result.toString());
    },
});
//# sourceMappingURL=factorial.js.map