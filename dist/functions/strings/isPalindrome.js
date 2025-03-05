"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$isPalindrome",
    version: "1.0.0",
    output: forgescript_1.ArgType.Boolean,
    description: "Check if a string is palindrome.",
    unwrap: true,
    args: [
        {
            name: "String",
            description: "String to check if its palindrome.",
            required: true,
            rest: false,
            type: forgescript_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [str]) {
        const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        return this.success(cleaned === cleaned.split("").reverse().join(""));
    },
});
//# sourceMappingURL=isPalindrome.js.map