const db = require("../dbconfig");
const { insert, remove } = require("./rappers-model");



describe("rappers model", () => {
  describe("insert", () => {
    // restore table before running any other tests
    beforeEach(async () => {
      await db("rappers").truncate();
    });

    it("should add a rapper", async () => {
      await insert({ rapper: "viper" });

      const rappers = await db("rappers");
      expect(rappers).toHaveLength(1);
    });

    it("should insert the provided rapper", async () => {
      await insert({ rapper: "viper" });
      await insert({ rapper: "lil b" });

      const rappers = await db("rappers");
      expect(rappers[0].rapper).toBe("viper");
      expect(rappers[1].rapper).toBe("lil b");
    });
  });

  describe('delete', () => {
    it('should delete rapper', async () => {
        await remove(1)
        
        const rappers = await db('rappers');
        expect(rappers).toHaveLength(1);
    })

    it('should delete all rappers', async () => {
        await remove(1);
        await remove(2);

        const rappers = await db('rappers');
        expect(rappers).toHaveLength(0);
    })
  })
});
