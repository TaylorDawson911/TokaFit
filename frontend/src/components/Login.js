import { useFormik } from "formik";
import { basicSchema, loginSchema } from "../schemas";
import axios from "axios";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
    try {
        // add Access-Control-Allow-Origin header to the request
        
        const response = await axios.post("http://localhost:3001/api");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Login = () => {
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
      } = useFormik({
        initialValues: {
          username: "",
          password: "",
        },
        validationSchema: loginSchema,
        onSubmit,
      });
    
    return (
        // <div className="container">
        //     <form onSubmit={handleSubmit} autoComplete="off">
        //     <p htmlFor="email">Email</p>
        //     <input
        //     value={values.email}
        //     onChange={handleChange}
        //     id="email"
        //     type="email"
        //     placeholder="Enter your email"
        //     onBlur={handleBlur}
        //     className={errors.email && touched.email ? "input-error" : ""}
        //     />
        //     {errors.email && touched.email && <p className="error">{errors.email}</p>}
        //     <p htmlFor="password">Password</p>
        //     <input
        //     id="password"
        //     type="password"
        //     placeholder="Enter your password"
        //     value={values.password}
        //     onChange={handleChange}
        //     onBlur={handleBlur}
        //     className={errors.password && touched.password ? "input-error" : ""}
        //     />
        //     {errors.password && touched.password && (
        //     <p className="error">{errors.password}</p>
        //     )}
        //     <p htmlFor="confirmPassword">Confirm Password</p>
        //     <input
        //     id="confirmPassword"
        //     type="password"
        //     placeholder="Confirm password"
        //     value={values.confirmPassword}
        //     onChange={handleChange}
        //     onBlur={handleBlur}
        //     className={
        //         errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        //     }
        //     />
        //     {errors.confirmPassword && touched.confirmPassword && (
        //     <p className="error">{errors.confirmPassword}</p>
        //     )}
        //     <button className="loginbtn"disabled={isSubmitting} type="submit">
        //     Submit
        //     </button>
        //     </form>
        // </div>
        <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <p className="plabel" htmlFor="username">Username</p>
            <input 
            type="text" 
            id="username" 
            values={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className= {errors.username && touched.username ? "input-error" : ""}
            placeholder="Enter username" />
            {errors.username && touched.username && <p className="error">{errors.username}</p>}
            
          </div>
          <div className="form-group">
            <p className="plabel" htmlFor="password">Password</p>
            <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
            />
            {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
            )}
          </div>
          <button className="btn btn-secondary"disabled={isSubmitting} type="submit">
            Submit
          </button>
          <a href="#" className="btn btn-secondary">Register instead</a>
          
        </form>
        <small><a href="#">Forgot your password?</a></small>
      </div>
    );
}


export default Login;