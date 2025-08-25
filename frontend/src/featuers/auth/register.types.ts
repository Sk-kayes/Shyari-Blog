
export type RegisterFormValues = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePic: File | null;
};

export const registerInitialValues: RegisterFormValues = {
  fullName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  profilePic: null,
};