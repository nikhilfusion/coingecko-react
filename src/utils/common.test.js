import { capitalizeName } from './common';

describe("testing capitalizeName function", () => {
  it('should capitalize the first character of a string', () => {
    expect(capitalizeName("nikhil")).toEqual("Nikhil");
  })
  it("shouldnt capitalize other characters of a string", () => {
    expect(capitalizeName("nikhil")).not.toEqual("NIKHIL");
  })
})