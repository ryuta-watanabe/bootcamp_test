import {countWord} from "@/count_word";
import {describe, expect, it} from "@jest/globals";

describe("Testing countWord module", () => {
  // new ErrorはErrorインスタンスを返しているだけ
  // カバレッジとエッジケースに注意する

  // 引数が文字列型でない場合はエラーインスタンスを返す
  it("Testing invalid arguments", () => {
    expect(countWord("", "")).toBeInstanceOf(Error);
  });

  // 関数が正しく動作することを確認する
  it("Testing count words", () => {
    expect(countWord("test", "test")).toBe(1);
  });
});
