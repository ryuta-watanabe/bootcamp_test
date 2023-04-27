import {determineGeneration} from "@/determine_generation";
import {describe, expect, it} from "@jest/globals";

describe("determineGeneration関数のテスト", () => {
  it("0歳未満のときは、エラーオブジェクトを返す", () => {
    expect(determineGeneration(-1)).toBeInstanceOf(Error);
  });
  it('0歳ぴったりのときは、"Baby"文字列を返却する', () => {
    expect(determineGeneration(0)).toBe("Baby");
  });
  it('5歳のときは、"Baby"文字列を返却し、6歳のときは"Child"文字列を返却する', () => {
    expect(determineGeneration(5)).toBe("Baby");
    expect(determineGeneration(6)).toBe("Child");
  });
  // TODO: 境界値検証を１ケース追加する
  it('12歳のときは、"Child"文字列を返却する', () => {
    expect(determineGeneration(12)).toBe("Child");
  });
  // TODO: 境界値検証を１ケース追加する
  it('19歳のときは、"Teenager"文字列を返却する', () => {
    expect(determineGeneration(19)).toBe("Teenager");
  });
  // TODO: 境界値検証を１ケース追加する
  it('35歳のときは、"Young Adult"文字列を返却する', () => {
    expect(determineGeneration(35)).toBe("Young Adult");
  });
  // TODO: 境界値検証を１ケース追加する
  it('64歳のときは、"Adult"文字列を返却する', () => {
    expect(determineGeneration(64)).toBe("Adult");
  });
  // TODO: 境界値検証を１ケース追加する
  it('それ以上のときは、"Senior"文字列を返却する', () => {
    expect(determineGeneration(65)).toBe("Senior");
  });
});
