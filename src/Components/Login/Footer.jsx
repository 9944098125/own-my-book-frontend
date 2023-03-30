import { Link } from "react-router-dom";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="login_footer">
      <div className="login_footer_wrap">
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          English(UK)
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Français(FR)
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          العربية
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          ⵜⴰⵎⴰⵣⵉⵖⵜ
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Español (España)
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          italiano
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Deutsch
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Português (Brasil)
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          हिन्दी
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          中文(简体)
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          日本語
        </Link>
        <Link
          style={{ textDecoration: "none", color: "grey" }}
          to="/"
          className="footer_square"
        >
          <i className="plus_icon"></i>
        </Link>
      </div>
      <div className="footer_splitter"></div>
      <div className="login_footer_wrap">
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Sign Up
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Log in
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Messenger
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Facebook Lite
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Watch
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Places
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Games
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Marketplace
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Facebook Pay
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Oculus
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Portal
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Instagram
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Bulletin
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Local
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Fundraisers
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Services
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Voting Information Centre
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Groups
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          About
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Create ad
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Create Page
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Developers
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Careers
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Privacy
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Cookies
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          AdChoices
          <i className="adChoices_icon"></i>
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Terms
        </Link>
        <Link style={{ textDecoration: "none", color: "grey" }} to="/">
          Help
        </Link>
      </div>
      <div className="login_footer_wrap">
        <Link
          to="/"
          style={{
            fontSize: "12px",
            marginTop: "10px",
            textDecoration: "none",
            color: "grey",
          }}
        >
          Meta © 2022
        </Link>
      </div>
    </footer>
  );
}
