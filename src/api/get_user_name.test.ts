import {fetchUser} from "@/api/fetch_user";
import {getUserName} from "@/api/get_user_name";
import {describe, expect, it} from "@jest/globals";

jest.mock("@/api/fetch_user", () => {
  return {
    fetchUser: jest.fn().mockImplementation((id: number) => {
      return id === 1
        ? Promise.resolve({
            name: "Mock User Name",
          })
        : Promise.resolve(new Error("User not fouund"));
    }),
  };
});

describe("getUserName関数のテスト", () => {
  // テストケース実行の前にモックを初期化する
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("ユーザーIDが存在する場合、ユーザー名を返す", async () => {
    const userName = await getUserName(1);
    expect(userName).toBe("Mock User Name");
    expect(fetchUser).toHaveBeenCalledWith(1);
    expect(fetchUser).toBeCalledTimes(1);
  });
  it("ユーザーIDがする場合、ユーザー名を返す", async () => {
    const error = await getUserName(-1);
    expect(error).toBeInstanceOf(Error);
    expect(fetchUser).toHaveBeenCalledWith(-1);
    expect(fetchUser).toBeCalledTimes(1);
  });
});
