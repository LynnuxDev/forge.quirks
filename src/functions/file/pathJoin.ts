import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"
import path from "path";

export default new NativeFunction({
  name: "$pathJoin",
  version: "1.2.1",
  output: ArgType.Boolean,
  description: "Join paths together",
  unwrap: true,
  args: [
    {
      name: "main",
      description: "Main path to start from",
      required: true,
      rest: false,
      type: ArgType.String,
    },
    {
      name: "joins",
      description: "Path to join with main",
      rest: true,
      type: ArgType.String,
      required: true,
    },
  ],
  brackets: true,
  execute(ctx, [main, matches]) {
      return this.success(path.join(main, ...matches));
  },
})