const assert = require("assert");
const dhl = require("../..");

describe("API", function() {
    it("should be able to instantiate the API", async () => {
        const api = new dhl.API();
        assert.strictEqual(Boolean(api.baseUrl), true);
    });
});
