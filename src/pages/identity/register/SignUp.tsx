import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { useNavigate } from "react-router-dom";
import { register } from "../../../features/auth/authSlice";

export default function SignUp() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {loading, error} = useSelector((state: RootState) => state.auth);

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleSubmit = async( e: React.FormEvent) =>{
    e.preventDefault();

    if(password !== repeatPassword){
      alert("Password do not match")
      return;
    }

    const result = await dispatch(register({username, email, password}));
    if(register.fulfilled.match(result)){
      setSuccessMessage(result.payload.message);
      setUserName('');
      setEmail('');
      setPassword('');
      setRepeatPassword('');
    }
  };
  
  return (
    <>
      <div
        className="simple-bg-screen"
        style={{
          backgroundImage: 'url(assets/img/banner-10.jpg)',
          height: '100vh',
        }}
      >
        <div className="Loader" style={{ transition: 'opacity 0.5s' }} />
        <div className="wrapper">
          <section className="signup-screen-sec">
            <div className="container">
              <div className="signup-screen">
                <a href="/">
                  <img
                    alt=""
                    className="img-responsive"
                    src="assets/img/logo.png"
                  />
                </a>
                <form onSubmit={handleSubmit}>
                    <input
                    className="form-control"
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                  <input
                    className="form-control"
                    placeholder="Your Email"
                    type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                  />

                  <input
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <input 
                    className="form-control"
                    placeholder="Repeat Password"
                    type="Password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    required
                  />
                  <button className="btn btn-login" type="submit" disabled={loading}>
                    {loading ? 'Signing Up...' : 'Sign Up'}
                  </button>
                  {error && <p style={{color: 'red', marginTop: 10}}>{error}</p>}
                  {successMessage && (
                    <p style={{color: 'green', marginTop: 10}}>{successMessage}</p>
                  )}
                  <span>
                    Have You Account? <a href="/login"> Login</a>
                  </span>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
