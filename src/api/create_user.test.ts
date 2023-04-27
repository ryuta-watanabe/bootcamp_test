import {createUser} from "@/api/create_user";

import {databaseManager} from "@/api/db";
import {resetDB} from "@/api/db/reset_db";
import {User} from "./models/user";

describe("createUser", () => {
  beforeEach(async () => {
    const db = await databaseManager.getInstance();
    await resetDB(db);
  });

  it("nameが空文字列の場合、エラーを返却する", async () => {
    const error = await createUser("", "example@test.com");
    expect(error).toBeInstanceOf(Error);
  });

  it("emailが空文字列の場合、エラーを返却する", async () => {
    const error = await createUser("example", "");
    expect(error).toBeInstanceOf(Error);
  });

  it("ユーザー登録が完了する場合、nameとemailを取得する", async () => {
    await createUser("example", "example@test.com");
    const user = await User.find(1);
    if (user) {
      expect(user.name).toBe("example");
      expect(user.email).toBe("example@test.com");
    }
  });
});
