const greeting = require('./greeting');

test("returns greeting with custom name name", () => {
    expect(greeting("Bei")).toBe("Hello, Bei!");
});
