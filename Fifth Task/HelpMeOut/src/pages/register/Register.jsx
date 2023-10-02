import { useEffect, useRef } from "react";
import { supabase } from "../../supabase/supabase";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import logo from "../../assets/logo.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import Button from "../../components/ui/Button";
import Swal from "sweetalert2";
import { useAuthentication } from "../../hooks/useAuthentication";

function Register() {
  const navigate = useNavigate();
  const { setUser, setLoader } = useAppContext();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { signup } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value.length < 8) {
      Swal.fire({
        title: "Password Too Short!",
        text: "Password must be at least 8 characters",
        icon: "error",
        confirmButtonText: "Try again",
        confirmButtonColor: "#f27474",
      });
    } else {
      const signedUp = await signup({
        email: emailRef.current.value.toLowerCase(),
        password: passwordRef.current.value,
      });
      if (signedUp) {
        emailRef.current.value = "";
        passwordRef.current.value = "";
      }
    }
  };

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user) {
        setUser(data.session);
        navigate("/profile");
      } else {
        setTimeout(() => {
          setLoader(false);
        }, 3000);
      }
    };
    getSession();
  }, []);

  return (
    <section className="register">
      <Link to="/">
        <img src={logo} alt="go to home" className="logo" />
      </Link>
      <h1>Log in or Sign up</h1>
      <p>Join millions of others in sharing successful moves on HelpMeOut.</p>
      <form onSubmit={handleSubmit}>
        <Button invert={true}>
          <img src={google} alt="" />
          <span>Continue with Google</span>
        </Button>
        <Button invert={true}>
          <img src={facebook} alt="" />
          <span>Continue with Facebook</span>
        </Button>
        <div className="separate">
          <div className="line"></div>
          <span>or</span>
          <div className="line"></div>
        </div>
        <label htmlFor="#email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          required
          ref={emailRef}
        />
        <label htmlFor="#password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          ref={passwordRef}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </section>
  );
}

export default Register;
