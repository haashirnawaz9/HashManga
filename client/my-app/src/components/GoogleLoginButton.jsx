import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const GoogleLoginButton = () => {
    const navigate = useNavigate();

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleResponse,
      });

      google.accounts.id.renderButton(
        document.getElementById("googleBtn"),
        { theme: "outline", size: "large" }
      );
    }
  }, []);

  const handleResponse = async (response) => {
    try {
      const res = await fetch("https://hashmangaserver.onrender.com/auth/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credential: response.credential }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userID", data.userID);
        navigate('/manga-list')
        toast.success("Registration Successful!")

      } else {
        console.error("Google login failed:", data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return <div id="googleBtn"></div>;
};

export default GoogleLoginButton;
