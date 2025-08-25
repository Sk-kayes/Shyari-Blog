import * as Yup from "yup";

const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["image/png", "image/jpg", "image/jpeg"];

export const registerSchema = Yup.object({
  fullName: Yup.string().optional(),
  username: Yup.string().trim().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  profilePic: Yup.mixed<File>()
    .nullable()
    .test("fileType", "Only PNG/JPG/JPEG", (file) => !file || ALLOWED_TYPES.includes(file.type))
    .test("fileSize", "Max size 5MB", (file) => !file || file.size <= MAX_SIZE),
});