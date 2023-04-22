type Generation =
  | "Baby"
  | "Child"
  | "Teenager"
  | "Young Adult"
  | "Adult"
  | "Senior"
  | "Invalid age";

export const determineGeneration = (age: number): Generation | Error => {
  if (age < 0) {
    return new Error("Invalid age");
  } else if (age <= 5) {
    return "Baby";
  } else if (age <= 12) {
    return "Child";
  } else if (age <= 19) {
    return "Teenager";
  } else if (age <= 35) {
    return "Young Adult";
  } else if (age <= 64) {
    return "Adult";
  } else {
    return "Senior";
  }
};
