import {isValidDate} from "@/is_valid_date";
import {describe, expect, it} from "@jest/globals";

describe("isValidDate関数のテスト", () => {
  it("存在しない年月日を入れた場合、falseを返す", () => {
    expect(isValidDate(2023, 14, 25)).toBeFalsy();
  });
  it("存在し得る年月日を入れた場合、trueを返す", () => {
    expect(isValidDate(2023, 4, 25)).toBeTruthy();
  });
  // TODO: うるう年でない年の2月29日について検証
  // TODO: うるう年（４の倍数年）の2月29日について検証
  // TODO: 月、日の境界値検証（0月、13月、0日、32日など）
});
