"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const systeminformation_1 = __importDefault(require("systeminformation"));
exports.default = new forgescript_1.NativeFunction({
    name: "$osDistro",
    aliases: ['$distro'],
    version: '1.0.0',
    description: "Returns the operating system distro usage.",
    output: forgescript_1.ArgType.String,
    unwrap: false,
    async execute(ctx) {
        const system = await systeminformation_1.default.osInfo();
        return this.success(system.distro + ' ' + system.release);
    },
});
//# sourceMappingURL=osDistro.js.map