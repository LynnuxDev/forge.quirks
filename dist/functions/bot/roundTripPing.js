"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const https_1 = __importDefault(require("https"));
const perf_hooks_1 = require("perf_hooks");
exports.default = new forgescript_1.NativeFunction({
    name: "$roundtripping",
    aliases: ['$roundtrip'],
    version: '1.0.0',
    description: "Returns the total amount of shards.",
    output: forgescript_1.ArgType.Number,
    unwrap: false,
    async execute(ctx) {
        const start = perf_hooks_1.performance.now();
        let result = null;
        console.log('making request');
        https_1.default.get('https://discord.com/api/v10/users/@me', {
            headers: {
                Authorization: `Bot ${ctx.client.token}`,
            },
        }, (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                const end = perf_hooks_1.performance.now();
                const latency = end - start;
                result = `${latency.toFixed(2)}ms`;
                console.log(`latency = ${latency}`);
            });
        }).on('error', (err) => {
            console.log(err);
            return this.customError('Error failed to make roundtrip:');
        });
        return this.success(result);
    },
});
//# sourceMappingURL=roundTripPing.js.map