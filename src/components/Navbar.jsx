import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid bg-danger pt-2 pb-2">
        <ul className="mx-3 my-1">
          <Link
            className="text-white"
            style={{ textDecoration: "none" }}
            to="/"
          >
            🏚Home
          </Link>
        </ul>
        <div className="collapse navbar-collapse">
          <ul className="mx-2 my-1 text-white">
            <Link
              className="text-white"
              style={{ textDecoration: "none" }}
              to="/Contact"
            >
              📒Contacto
            </Link>
          </ul>
        </div>
        <div>
          <ul className="pt-2 mx-3 text-white">
            <p>
              {" "}
              <strong> Happy cake 🍰 </strong>
            </p>
          </ul>
        </div>
      </div>
    </nav>
  );
}
