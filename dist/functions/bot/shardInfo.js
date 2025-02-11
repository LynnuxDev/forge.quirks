"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const types_1 = require("../../types");
const discord_js_1 = require("discord.js");
exports.default = new forgescript_1.NativeFunction({
    name: "$shardinfo",
    version: '1.0.0',
    description: "Returns the info on shard.",
    output: forgescript_1.ArgType.Number,
    brackets: false,
    unwrap: true,
    args: [
        {
            name: 'shardID',
            description: 'The ID of the shard to retrieve.',
            type: forgescript_1.ArgType.Number,
            required: true,
            rest: false
        },
        {
            name: 'type',
            description: 'type to retrieve.',
            type: forgescript_1.ArgType.Enum,
            enum: types_1.ShardInfo,
            required: false,
            rest: false
        }
    ],
    async execute(ctx, [sid, type]) {
        const shardInfo = {};
        let shardStack = null;
        let result = null;
        sid = sid !== undefined ? Number(sid) : 0;
        if (sid !== undefined) {
            const shard = ctx.client.ws.shards.get(sid);
            if (shard) {
                const guildCount = ctx.client.guilds.cache.filter(guild => guild.shardId === shard.id).size;
                shardInfo[shard.id] = {
                    id: shard.id,
                    status: discord_js_1.Status[shard.status] || "Unknown",
                    ping: shard.ping,
                    lastPingTimestamp: shard.lastPingTimestamp,
                    ready: shard.status === 0 ? 'true' : 'false',
                    guildCount,
                };
                shardStack = shardInfo[shard.id];
            }
            else {
                result = 'Not available';
            }
        }
        switch (type) {
            case types_1.ShardInfo.id:
                result = shardStack?.id || "Not available";
                break;
            case types_1.ShardInfo.status:
                result = shardStack?.status || "Not available";
                break;
            case types_1.ShardInfo.guildcount:
                result = shardStack?.guildCount || "Not available";
                break;
            case types_1.ShardInfo.ping:
                result = shardStack?.ping || "Not available";
                break;
            case types_1.ShardInfo.lastPingTimestamp:
                result = shardStack?.lastPingTimestamp !== -1 ? shardStack?.lastPingTimestamp : "N/A";
                break;
            case types_1.ShardInfo.ready:
                result = shardStack?.ready || "Not available";
                break;
            default:
                result = JSON.stringify(shardStack) || { message: "Shard not found or invalid type" };
                break;
        }
        return this.success(result);
    },
});
//# sourceMappingURL=shardInfo.js.map