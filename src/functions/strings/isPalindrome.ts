import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$isPalindrome",
  version: "1.0.0",
  output: ArgType.Boolean,
  description: "Check if a string is palindrome.",
  unwrap: true,
  args: [
    {
      name: "String",
      description: "String to check if its palindrome.",
      required: true,
      rest: false,
      type: ArgType.String,
    },
  ],
  brackets: true,
  execute(ctx, [str]) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return this.success(cleaned === cleaned.split("").reverse().join(""));
  },
})