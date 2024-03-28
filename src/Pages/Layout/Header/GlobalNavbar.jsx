import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-reveal";
export default function GlobalNavbar() {
   function handleLoginbtn() {
     localStorage.removeItem("token");
   }
  return (
    <div className="global-navbar">
      <nav className=" mx-auto flex justify-between items-center h-[90px] bg-inherit max-w-[1380px] px-[20px]">
        <div className="logo">
          <img
            src="/images/logo.png"
            alt="logo"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              height: "35px",
              cursor: "pointer",
            }}
          />
        </div>
        <Fade duration={3000}>
          <div className="nav-items-div">
            <ul className="nav-items flex gap-12 font-bold">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/creators">
                <li className="uppercase">creators</li>
              </Link>
              <Link to="/product">
                {" "}
                <li className="uppercase">Stores</li>
              </Link>
              <li className="uppercase">Services</li>
              <li className="uppercase">Contact</li>
            </ul>
          </div>
        </Fade>
        <div>
          <Zoom duration={2000}>
            <Link to="/signin">
              <button
                className="text-white border-[#5623d8] border-2 px-5 py-2 rounded-lg uppercase"
                onClick={handleLoginbtn}
              >
                {localStorage.getItem("token") ? "Logout" : "Login"}
              </button>
            </Link>
          </Zoom>
        </div>
      </nav>
    </div>
  );
}
