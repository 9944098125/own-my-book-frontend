import React from "react";

function Contact({ user }) {
  return (
    <React.Fragment>
      <div className="contact">
        <div className="contact_img">
          <img src={user?.picture} alt="" />
        </div>
        <span>
          {user?.firstName} {user?.lastName}
        </span>
      </div>
    </React.Fragment>
  );
}

export default Contact;
