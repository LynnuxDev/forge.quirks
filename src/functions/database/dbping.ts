//@ts-ignore
//@ts-nocheck
import { ArgType, NativeFunction } from "@tryforge/forgescript";

export default new NativeFunction({
  name: "$dbping",
  aliases: ['$dblatency'],
  version: '1.0.0',
  description: "Returns the database ping.",
  output: ArgType.String,
  unwrap: false,

  async execute(ctx) {
    let identifier = 'user_test_scope';
    let result = NaN

    const start = Date.now();
    try {
      await ctx.client.db.get({ identifier });

      const end = Date.now();
      result = end - start
    } catch (error) {
      if (error instanceof Error) {
        return this.customError('Error reading Database:', error.message);
      } else {
        return this.customError('Error reading Database:', error);
      }
    }
    return this.success(`${result}ms`);
  },
});