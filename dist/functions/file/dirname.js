"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$dirname",
    version: "1.2.1",
    output: forgescript_1.ArgType.Boolean,
    description: "Returns the absolute path of the directory containing the script",
    unwrap: false,
    brackets: false,
    execute(ctx) {
        return this.success(__dirname);
    },
});
//# sourceMappingURL=dirname.js.map