import { useEffect, useRef } from "react";
import axios from "axios";

export default function GoogleLoginButton() {
  const divRef = useRef(null);

  useEffect(() => {
    /* global google */
    if (!window.google) return;

    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: async (response) => {
        try {
          const { data } = await axios.post(
            "https://hashmangaserver.onrender.com/auth/google-login", // or your deployed backend
            { credential: response.credential }
          );

          console.log("JWT:", data.token);
          localStorage.setItem("token", data.token);
        } catch (err) {
          console.error(err);
        }
      },
    });

    google.accounts.id.renderButton(divRef.current, {
      theme: "outline",
      size: "large",
    });
  }, []);

  return <div ref={divRef}></div>;
}
