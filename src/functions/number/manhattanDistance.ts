import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$manhattanDistance",
  version: "1.0.0",
  output: ArgType.Number,
  description: "Get the manhattan Distance on a 2D platform",
  unwrap: true,
  args: [
    {
      name: "x1",
      description: "Value of x1.",
      required: true,
      rest: false,
      type: ArgType.Number,
    },
    {
      name: "y1",
      description: "Value of y1.",
      required: true,
      rest: false,
      type: ArgType.Number,
    },
    {
      name: "x2",
      description: "Value of x2.",
      required: true,
      rest: false,
      type: ArgType.Number,
    },
    {
      name: "y2",
      description: "Value of y2.",
      required: true,
      rest: false,
      type: ArgType.Number,
    },
  ],
  brackets: true,
  execute(ctx, [x1,y1,x2,y2]) {
    return this.success(Math.abs(x2 - x1) + Math.abs(y2 - y1));
  },
})
