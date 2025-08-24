import { useEffect, useRef } from "react";
import axios from "axios";

export default function GoogleLoginButton() {
  const divRef = useRef(null);

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: async (response) => {
        try {
          const { data } = await axios.post(
            "https://hashmangaserver.onrender.com/auth/google-login",
            { credential: response.credential }
          );
          console.log("JWT token:", data.token);
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

  return <div className="mt-6 rounded-3xl" ref={divRef}></div>;
}
