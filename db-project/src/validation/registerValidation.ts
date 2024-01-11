import { registerType } from "../types/loginTypes/LoginTypes";

const registerValidation = (data: registerType) => {
  const errors: registerType = { username: "", password: "", full_name: "" };

  if (!data.username) {
    errors.username = "شماره تلفن را وارد کنید";
  } else if (!/^0?9[0-9]{9}$/.test(data.username)) {
    errors.username = "شماره تلفن را درست وارد کنید";
  } else {
    delete errors.username;
  }

  if (!data.password) {
    errors.password = "رمز عبور خود را وارد کنید";
  } else if (data.password.length < 9) {
    errors.password = "رمز عبور شما حداقل باید 8 رقم باشد";
  } else {
    delete errors.password;
  }

  if (!data.full_name?.trim()) {
    errors.full_name = "نام و نام خانوادگی خود را وارد کنید";
  } else if(data.full_name.length < 10) {
    errors.full_name = "نام و نام خانوادگی حداقل باید 10 کاراکتر داشته باشد"
  } else {
    delete errors.full_name;
  }

  return errors;
};

export default registerValidation;
