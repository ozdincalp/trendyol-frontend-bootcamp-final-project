import { checkMove } from "../../utils/index";

describe("Check Move", () => {
  const card = {
    value: 11,
  };
  it("should return true if deck length is zero", () => {
    const value = checkMove(card, []);
    const expectedValue = true;
    expect(value).toBe(expectedValue);
  });
  it("should return true if selected card and deck's last card are consecutives ", () => {
    const deck = [{
        value: 10,
      }];
    const value = checkMove(card, deck);
    const expectedValue = true;
    expect(value).toBe(expectedValue);
  });
  it("should return false if selected card and deck's last card are not consecutives ", () => {
    const deck = [{
        value: 12,
      }];
    const value = checkMove(card, deck);
    const expectedValue = false;
    expect(value).toBe(expectedValue);
  });
});
