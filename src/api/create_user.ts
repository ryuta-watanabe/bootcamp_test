import {User} from "@/api/models/user";

export const createUser = async (
  name: string,
  email: string
): Promise<void | Error> => {
  if (name === "" || email === "") return new Error("Invalid input");
  const user = new User(name, email);
  await user.save();
};
