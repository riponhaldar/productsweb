import { object, string } from "yup";
const model = {
  fullName: "",
  email: "",
  productName: "",
  message: "",
};

const validation = object().shape({
  fullName: string().required("fullName  is required!"),
  email: string().email().required("email or email is required!"),
  productName: string().required("productName or email is required!"),
  message: string().required("message or email is required!"),

});

export { model, validation };
