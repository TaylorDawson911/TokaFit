import { useFormik } from "formik";
import { basicSchema, loginSchema } from "../schemas";
import Axios from "axios";
// add Access-Control-Allow-Origin header to the request


const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
    try {
        // add Access-Control-Allow-Origin header to the request

        Axios.post("http://localhost:3001/login", {
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log(response);
            if (response.data.message == "Wrong email/password combination!") {
                document.getElementById("dberror").innerHTML = "Wrong email/password combination!";
            }


        });
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
          email: "",
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
        <div className="bodybase">
          <div className="login-form">
          
          <form onSubmit={handleSubmit}>
          <h2>Login</h2>
            <div className="form-group">
              <p className="plabel" htmlFor="email">Email</p>
              <input 
              type="text" 
              id="email" 
              values={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className= {errors.email && touched.email ? "input-error" : ""}
              placeholder="Enter email" />
              {errors.email && touched.email && <p className="error">{errors.email}</p>}
              
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
            <div className="bottomForm">
              <p className="error" id="dberror"></p>
              <button className=""disabled={isSubmitting} type="submit">
                Submit
              </button>
              <div className="centered">
              <small><a href="#">Forgot your password?</a></small>
              </div>
              <div className="centered">
              <small><a href="/register">Don't have an account? Sign up</a></small>
              </div>
            </div>

            
          </form>
        
        </div>
      </div>
    );
}


export default Login;