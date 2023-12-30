import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Swal from "sweetalert2";
import { supabase } from "../supabase/supabase";

function useAuthentication() {
  const navigate = useNavigate();
  const { setLoader, setUser } = useAppContext();

  const signup = async (info) => {
    setLoader(true);
    const { email, password } = info;

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (data.user) {
      setLoader(false);
      setUser(data);
      navigate("/profile");
      return true;
    } else {
      setLoader(false);
      Swal.fire({
        title: "Signup Failed!",
        text: error,
        icon: "error",
        confirmButtonText: "Try again",
        confirmButtonColor: "#f27474",
      });
      return false;
    }
  };

  const login = async (info) => {
    setLoader(true);
    const { email, password } = info;

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (data.user) {
      setLoader(false);
      setUser(data);
      navigate("/profile");
      return true;
    } else {
      setLoader(false);
      Swal.fire({
        title: "Login Failed!",
        text: error,
        icon: "error",
        confirmButtonText: "Try again",
        confirmButtonColor: "#f27474",
      });
      return false;
    }
  };

  const logout = async () => {
    setLoader(true);
    const { error } = await supabase.auth.signOut();
    if (error) {
      Swal.fire({
        title: "Logout Failed!",
        text: error,
        icon: "error",
        confirmButtonText: "Try again",
        confirmButtonColor: "#f27474",
      });
    } else {
      setLoader(false);
      setUser({});
      navigate("/register");
    }
  };

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: import.meta.env.VITE_REDIRECT_URL,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    console.log(data, error);
  };

  const signInWithFacebook = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: import.meta.env.VITE_REDIRECT_URL,
      },
    });
    console.log(data, error);
  };

  return { signup, login, logout, signInWithGoogle, signInWithFacebook };
}

export { useAuthentication };
