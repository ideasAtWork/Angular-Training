import { add } from "./helper";

describe("our first tests", () => {
  let variabilaNoastra = 0;

  beforeEach(() => {
    variabilaNoastra = 1;
  });

  it('checks that variabilaNoastra is 1 by default',  () => {
    expect(variabilaNoastra).toEqual(1);
    variabilaNoastra = 2;
  });

  it('checks that variabilaNoastra is not modified by another test',  () => {
    expect(variabilaNoastra).toEqual(1);
  });

  it('adding 1 and 2 to equal 3', () => {
    console.log('salutare', { a: 1 });
    expect(add(1, 2)).toBe(3);
  });

  it('object should match another object', () => {
    const obj1 = {
      a: 1
    };

    const obj2 = {
      a: 2
    }

    expect(obj1).toBe(obj2);
  });

  it('adding 2 and 2 to equal 4', () => {
    expect(add(1, 2)).toBe(3);
  });

  xit('excluded test', () => {
    expect(add(1, 2)).toBe(10);
  });
});