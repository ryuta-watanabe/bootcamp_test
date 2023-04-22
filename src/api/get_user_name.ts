import {fetchUser} from "@/api/fetch_user";

export const getUserName = async (id: number): Promise<string | Error> => {
  const user = await fetchUser(id);
  if (user instanceof Error) return user;
  return user.name;
};
