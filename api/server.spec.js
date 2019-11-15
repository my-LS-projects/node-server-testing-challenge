const request = require("supertest");
const server = require("../api/server");

describe("server", () => {
  describe("GET /", () => {
    it("should return 200 OK", async () => {
      await request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return JSON formatted response", () => {
      return request(server)
        .get("/")
        .then(res => expect(res.type).toMatch(/json/i));
    });
  });
});