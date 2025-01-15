import { ArgType, NativeFunction, Return } from "@tryforge/forgescript";
import path from "path";

export default new NativeFunction({
  name: "$pathResolve",
  version: "1.0.0",
  output: ArgType.String,
  description: "Resolve paths into an absolute path",
  unwrap: true,
  args: [
    {
      name: "main",
      description: "Main path to start resolving from",
      required: true,
      rest: false,
      type: ArgType.String,
    },
    {
      name: "joins",
      description: "Paths to resolve with main",
      rest: true,
      type: ArgType.String,
      required: true,
    },
  ],
  brackets: true,
  execute(ctx, [main, joins]) {
    return this.success(path.resolve(main, ...joins));
  },
});
