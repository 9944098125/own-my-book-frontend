import React from "react";
import axios from "axios";

import { baseUrl } from "../../../baseUrl";
import "./styles.css";

export default function SendVerification({ user }) {
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const sendVerificationLink = async () => {
    try {
      const { data } = await axios.post(
        `${baseUrl}/users/sendVerification`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSuccess(data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <React.Fragment>
      <div className="send_verification">
        <span>
          Your account is not verified,verify your account before it gets
          deleted after a month from creating.
        </span>
        <a
          onClick={() => {
            sendVerificationLink();
          }}
        >
          click here to resend verification link
        </a>
        {success && <div className="success_text">{success}</div>}
        {error && <div className="error_text">{error}</div>}
      </div>
    </React.Fragment>
  );
}
