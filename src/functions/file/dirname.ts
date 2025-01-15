import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$dirname",
  version: "1.2.1",
  description: "Returns the absolute path of the directory containing the script",
  output: ArgType.String,
  unwrap: false,
  async execute(ctx) {
    return this.success(__dirname);
  },
})