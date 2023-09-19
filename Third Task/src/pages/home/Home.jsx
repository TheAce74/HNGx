import { motion } from "framer-motion";
import video from "../../assets/video.mp4";
import Button from "../../components/ui/Button";
import FormInputHOC from "../../components/form/FormInputHOC";
import { BiSolidUser } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { HiLockClosed } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { useAppContext } from "../../context/AppContext";
import { useAuthentication } from "../../hooks/useAuthentication";
import { supabase } from "../../supabase/supabase";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const password1Ref = useRef(null);
  const password2Ref = useRef(null);
  const loginEmailRef = useRef(null);
  const loginPasswordRef = useRef(null);

  const { setLoader, setUser } = useAppContext();
  const { signup, login } = useAuthentication();
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user) {
        setUser(data.session);
        navigate("/gallery");
      } else {
        setTimeout(() => {
          setLoader(false);
        }, 3000);
      }
    };
    getSession();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin) {
      if (password1Ref.current.value.length < 8) {
        Swal.fire({
          title: "Password Too Short!",
          text: "Password must be at least 8 characters",
          icon: "error",
          confirmButtonText: "Try again",
          confirmButtonColor: "#f27474",
        });
      } else if (password1Ref.current.value !== password2Ref.current.value) {
        Swal.fire({
          title: "Password Mismatch!",
          text: "Check password fields",
          icon: "error",
          confirmButtonText: "Try again",
          confirmButtonColor: "#f27474",
        });
      } else {
        const signedUp = await signup({
          username: `${firstNameRef.current.value.toLowerCase()}_${lastNameRef.current.value.toLowerCase()}`,
          email: emailRef.current.value.toLowerCase(),
          password: password1Ref.current.value,
        });
        if (signedUp) {
          firstNameRef.current.value = "";
          lastNameRef.current.value = "";
          emailRef.current.value = "";
          password1Ref.current.value = "";
          password2Ref.current.value = "";
        }
      }
    } else {
      if (loginPasswordRef.current.value.length < 8) {
        Swal.fire({
          title: "Password Too Short!",
          text: "Complete your password",
          icon: "error",
          confirmButtonText: "Try again",
          confirmButtonColor: "#f27474",
        });
      } else {
        const loggedIn = await login({
          email: loginEmailRef.current.value.toLowerCase(),
          password: loginPasswordRef.current.value,
        });
        if (loggedIn) {
          loginEmailRef.current.value = "";
          loginPasswordRef.current.value = "";
        }
      }
    }
  };

  return (
    <motion.section
      className="home"
      key="home"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="px-3">
        <video src={video} loop autoPlay muted playsInline></video>
        <div>
          <h1 className="fw-bolder">Welcome to PicPuzzle</h1>
          <p>
            Discover a new way to explore, organize, and interact with your
            photos. PicPuzzle transforms your image gallery into an immersive
            experience, where you&apos;re not just a viewer but a curator of your
            visual stories.
          </p>
        </div>
      </div>
      <section className="content">
        <h2 className="fw-bold mb-4">{!isLogin ? "Sign Up" : "Log In"}</h2>
        <form action="" onSubmit={handleSubmit}>
          {!isLogin ? (
            <motion.div
              key="signup"
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FormInputHOC
                placeholder="First name"
                required={true}
                icon={() => <BiSolidUser className="text-dark" />}
                ref={firstNameRef}
                key={1}
              />
              <FormInputHOC
                placeholder="Last name"
                required={true}
                icon={() => <BiSolidUser className="text-dark" />}
                ref={lastNameRef}
                key={2}
              />
              <FormInputHOC
                placeholder="Email address"
                type="email"
                required={true}
                icon={() => <IoMdMail className="text-dark" />}
                ref={emailRef}
                key={3}
              />
              <FormInputHOC
                placeholder="Password"
                type="password"
                required={true}
                icon={() => <HiLockClosed className="text-dark" />}
                ref={password1Ref}
                key={4}
              />
              <FormInputHOC
                placeholder="Confirm password"
                type="password"
                required={true}
                icon={() => <HiLockClosed className="text-dark" />}
                ref={password2Ref}
                key={5}
              />
            </motion.div>
          ) : (
            <motion.div
              key="login"
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FormInputHOC
                placeholder="Email address"
                type="email"
                required={true}
                icon={() => <IoMdMail className="text-dark" />}
                ref={loginEmailRef}
                key={6}
              />
              <FormInputHOC
                placeholder="Password"
                type="password"
                required={true}
                icon={() => <HiLockClosed className="text-dark" />}
                ref={loginPasswordRef}
                key={7}
              />
            </motion.div>
          )}
          <Button type="submit">Submit</Button>
          <p className="end">
            {!isLogin ? (
              <>
                <span>Already have an account?</span>
                <button onClick={() => setIsLogin(true)} type="button">
                  Log in
                </button>
              </>
            ) : (
              <>
                <span>Haven&apos;t signed up?</span>
                <button onClick={() => setIsLogin(false)} type="button">
                  Sign up
                </button>
              </>
            )}
          </p>
        </form>
      </section>
    </motion.section>
  );
}
export default Home;
