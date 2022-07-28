import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../context/userAuthContext";

//Signup using firebase
const Signup = () => {
  //These hooks store user information
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  //handle user inputs
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="features">
        <div className= "container">
          <div className= "row text-center">
              <div className="p-4 box align-content-center col-lg-4">
                <h2 className="mb-3">Signup to Farmington</h2>
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

                  <div className="d-grid gap-2">
                    <Button variant="primary" type="Submit">
                      Sign up
                    </Button>
                  </div>
                </Form>
                <div className="p-4 box mt-3 text-center  text-black">
                  Already have an account? <Link style= {{color:"blue"}} to="/login">Log In</Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
