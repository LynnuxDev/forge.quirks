import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";

export default new NativeFunction({
  name: "$batteryIsCharging",
  aliases: ['$isCharging'],
  version: '1.0.0',
  description: "Returns if the battery is charging.",
  output: ArgType.Boolean,
  unwrap: false,
  async execute(ctx) {
    const battery = await si.battery()
    return this.success(battery.isCharging);
  },
});