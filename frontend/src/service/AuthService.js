import { userLogin, userRegister } from "../redux/features/auth/AuthActions";
import store from "../redux/store";
export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      alert("Please fill required details");
    }
    store.dispatch(userLogin({ role, email, password }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  email,
  password,
  role,
  organisationName,
  hospitalName,
  address,
  phone
) => {
  e.preventDefault();
  try {
    if (
      !role ||
      !name ||
      !email ||
      !password ||
      !organisationName ||
      !hospitalName ||
      !address ||
      !phone
    ) {
      alert("Please fill required details");
    }
    store.dispatch(
      userRegister({
        name,
        email,
        password,
        role,
        organisationName,
        hospitalName,
        address,
        phone,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
