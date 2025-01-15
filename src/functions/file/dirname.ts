import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"
import path from "path";

export default new NativeFunction({
  name: "$dirname",
  version: "1.2.1",
  output: ArgType.Boolean,
  description: "Returns the absolute path of the directory containing the script",
  unwrap: false,
  execute(ctx) {
      return this.success(__dirname);
  },
})