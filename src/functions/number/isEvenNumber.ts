import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$isEven",
  version: "1.0.0",
  output: ArgType.Boolean,
  description: "Check if a number is even, Returns true if even and false if odd.",
  unwrap: true,
  args: [
    {
      name: "Number",
      description: "Number to check if even.",
      required: true,
      rest: false,
      type: ArgType.Number,
    },
  ],
  brackets: true,
  execute(ctx, [num]) {
    return this.success(Number.isInteger(num) && num % 2 === 0);
  },
})