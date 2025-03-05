import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$greatestCommonDivisor",
  aliases: ["$gcd"],
  version: "1.0.0",
  output: ArgType.Number,
  description: "Get the Least Common Divider of NumberA and NumberB.",
  unwrap: true,
  args: [
    {
      name: "NumberA",
      description: "The first number.",
      required: true,
      rest: false,
      type: ArgType.Number,
    },
    {
      name: "NumberB",
      description: "The second number.",
      required: true,
      rest: false,
      type: ArgType.Number,
    },
  ],
  brackets: true,
  execute(ctx, [a,b]) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }

    return this.success(a);
  },
})