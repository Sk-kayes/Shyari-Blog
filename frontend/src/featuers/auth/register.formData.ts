import type { RegisterFormValues } from "./register.types";

export function toRegisterFormData(values: RegisterFormValues) {
  const data = new FormData();
  data.append("fullName", values.fullName);
  data.append("username", values.username);
  data.append("email", values.email);
  data.append("password", values.password);
  data.append("confirmPassword", values.confirmPassword);
  if (values.profilePic) data.append("profilePic", values.profilePic);
  return data;
}