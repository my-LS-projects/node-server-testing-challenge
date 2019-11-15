const db = require("../dbconfig");
const { insert, remove } = require("./rappers-model");



describe("rappers model", () => {
  describe("insert", () => {
    // restore table before running any other tests
    beforeEach(async () => {
      await db("rappers").truncate();
    });

    it("should add a rapper", async () => {
      await insert({ name: "viper" });

      const rappers = await db("rappers");
      expect(rappers).toHaveLength(1);
    });

    it("should insert the provided rapper", async () => {
      await insert({ name: "viper" });
      await insert({ name: "lil b" });

      const rappers = await db("rappers");
      expect(rappers[0].name).toBe("viper");
      expect(rappers[1].name).toBe("lil b");
    });
  });

  describe('delete', () => {
    it('should delete rapper', async () => {
        await remove({ name: 'death grips' })
        
        const rappers = await db('rappers');
        expect(rappers).toHaveLength(1);
    })

    it('should delete all rappers', async () => {
        await remove({ name: 'death grips' });
        await remove({ name: "luvgangster" })

        const rappers = await db('rappers');
        expect(rappers).toHaveLength(0);
    })
  })
});
