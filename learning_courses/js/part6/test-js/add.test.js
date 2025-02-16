// const { default: expect } = require('expect');
const addNum = require('./add.js');

test("Additionne 2 nombres", () => {
    expect(addNum(1, 2)).toBe(4);
});