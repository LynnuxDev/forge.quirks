import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$leastCommonMultiple",
  aliases: ["$lcm"],
  version: "1.0.0",
  output: ArgType.Number,
  description: "The Least Common Multiple of NumberA and NumberB.",
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
    let x = a, y = b;

    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }

    let gcd = x;

    return this.success((a * b) / gcd);
  },
})