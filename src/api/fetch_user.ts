import {User} from "@/api/models/user";

export const fetchUser = async (id: number): Promise<User | Error> => {
  const user = await User.find(id);
  if (user === undefined) return new Error("User not found");
  return user;
};
