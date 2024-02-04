import { useState } from "react";
import { Link } from "react-router-dom";
// import { ,  } from "react-icons";
import { AiFillFacebook as FacebookLoginButton } from "react-icons/ai";
import { RiInstagramFill as InstagramLoginButton } from "react-icons/ri";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(formData);
  };

  return (
    <div className="App">
      <div className="appAside" />
      <div className="appForm">
        <div className="formCenter">
          <form className="formFields" onSubmit={handleSubmit}>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="formFieldInput"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="formField">
              <label className="formFieldLabel" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="formFieldInput"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="formField">
              <button className="formFieldButton">Sign In</button>{" "}
              <Link to="/" className="formFieldLink">
                Create an account
              </Link>
            </div>

            <div className="socialMediaButtons">
              <div className="facebookButton">
                <FacebookLoginButton onClick={() => alert("Hello")} />
              </div>

              <div className="instagramButton">
                <InstagramLoginButton onClick={() => alert("Hello")} />
              </div>
            </div>
          </form>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SignInForm;
