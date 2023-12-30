import { useEffect } from "react";
import Button from "../../components/ui/Button";
import { useAuthentication } from "../../hooks/useAuthentication";
import { supabase } from "../../supabase/supabase";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

function Profile() {
  const { logout } = useAuthentication();
  const navigate = useNavigate();
  const { setLoader, user, setUser } = useAppContext();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data?.session?.user) {
        navigate("/register");
      } else {
        getUser();
        setTimeout(() => {
          setLoader(false);
        }, 3000);
      }
    };
    getSession();
  }, []);

  return (
    <section className="profile">
      <h1>Profile</h1>
      <p>Welcome back, {user.email || "User"}</p>
      <Button handleClick={logout}>Log Out</Button>
    </section>
  );
}

export default Profile;
