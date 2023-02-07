import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(3, "Name must be three letters").max(20).required("Please Enter Your Name"),
  password: Yup.string().min(6, "Minimum 6 characters are required").required("Please Enter Your Password"),
});