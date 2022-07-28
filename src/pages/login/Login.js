import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Form, Alert, Row, Col} from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../context/userAuthContext";

//Login using firebase
const Login = () => {
  //These states contain user information
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  //handle user inputs
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      //if success navigate to home page
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="features align-content-center">
        <div className= "container align-content-center">
          <div className= "row text-center align-content-center">
              <div className="pt-3  col-lg-4 align-content-center">
                  <div className="pt-6 box">
                    <h2 className="mb-3">Farmington Login</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                          type="email"
                          placeholder="Email address"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>

                      <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                      </div>

                      <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                          Log In
                        </Button>
                      </div>
                    </Form>
                    <hr />

                  </div>
                  <div className="p-4 box mt-3 text-center text-black">
                    Don't have an account? <Link style= {{color:"blue"}} to="/signup">Sign up</Link>
                  </div>
                </div >
            </div>
          </div>
       </div>
    </>
  );
};

export default Login;
