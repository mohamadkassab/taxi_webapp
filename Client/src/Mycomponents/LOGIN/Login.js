import React from "react";
import "./loginRegister.css";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { useCookies } from "react-cookie";
import InputAdornment from "@mui/material/InputAdornment";
// import axios from "axios";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as yup from "yup";

const Login = () => {

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate= useNavigate();


  /*.................... for showPassword............................*/

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /*.................... for validation.................................*/

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .matches(/^\S*$/, "email cannot contain whitespace")
      .email("Enter a valid email")
      .required("Email is required"),

    password: yup
      .string("Enter the password")
      .min(8, "password atleast 8 charcter")
      .required("password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values, action) => {
      // try {
      //   const { email, password } = values;
      //   const response = await axios.post("http://localhost:3000/user/signin", {
      //     email,
      //     password,
      //   });
        
      //   setCookies("access_token", response.data.token);
      //   window.localStorage.setItem("userID", response.data.userId);
      //   navigate("/");
      // } catch (e) {
      //   console.error(e);
      // }
     
      // action.resetForm();
    },
  });

  return (
    <div className="l1">
      <form className="loginf" onSubmit={formik.handleSubmit}>
        <div className="tfield">
          <h1 className="my">Login </h1>
          <div className="emailpass">
            <TextField
              className="t1"
              name="email"
              label="Email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              variant="outlined"
            />

            <TextField
              className="t1"
              label="Password"
              placeholder="Password"
              // id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <button type="submit" className="loginbtn ">
            Login
          </button>

          <p>OR </p>
          <div type="submit" className="googlebtn">
            <img src={"./car/googlepng.png"} alt="" />
            Login with Google
          </div>

          <p>
            New User ?<Link to="/register">Register here</Link>{" "}
          </p>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default Login;
