import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$factorial",
  version: "1.0.0",
  output: ArgType.Number,
  description: "Return the factorial number of a number. Keep in mind there are JS limitations when the number is to big it will show infinite",
  unwrap: true,
  args: [
    {
      name: "Number",
      description: "number to get the factorial of.",
      required: true,
      rest: false,
      type: ArgType.Number,
    },
  ],
  brackets: true,
  execute(ctx, [num]) {
    let result = BigInt(1);

    if (num === 0 || num === 1) {
      result = BigInt(1);
    } else {
      for (let i = 2; i <= num; i++) {
        result *= BigInt(i);
      }
    }

    return this.success(result.toString());
  },
})
