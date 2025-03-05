"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$manhattanDistance",
    version: "1.0.0",
    output: forgescript_1.ArgType.Number,
    description: "Get the manhattan Distance on a 2D platform",
    unwrap: true,
    args: [
        {
            name: "x1",
            description: "Value of x1.",
            required: true,
            rest: false,
            type: forgescript_1.ArgType.Number,
        },
        {
            name: "y1",
            description: "Value of y1.",
            required: true,
            rest: false,
            type: forgescript_1.ArgType.Number,
        },
        {
            name: "x2",
            description: "Value of x2.",
            required: true,
            rest: false,
            type: forgescript_1.ArgType.Number,
        },
        {
            name: "y2",
            description: "Value of y2.",
            required: true,
            rest: false,
            type: forgescript_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [x1, y1, x2, y2]) {
        return this.success(Math.abs(x2 - x1) + Math.abs(y2 - y1));
    },
});
//# sourceMappingURL=manhattanDistance.js.map