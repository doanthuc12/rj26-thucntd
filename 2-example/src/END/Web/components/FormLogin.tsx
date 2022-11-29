import React from "react";
import "../css/formUser.css";
import { useNavigate } from "react-router-dom";

// interface Iuser{
//   userName: string;
//   userPass: string
// }
// const defaultValue: Iuser = {
//   userName: "",
//   userPass: "",
// };
const user = [
  {
    username: "aptech",
    password: "aptech",
  },
];

function FormLogin() {
  // const [user, setUser] = useState<Iuser>(defaultValue);
  let naviget = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(user);

    naviget("/listuser");
  };

  return (
    <div
      className="container"
      style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.8)",
        backdropFilter: "blur(30px)",
      }}
    >
      <form className=" text-center" onSubmit={handleSubmit}>
        <h2 className="fw-bold mb-5">Form Login</h2>
        <div className="col">
          <label>Name</label>
          <input
            className="mb-4"
            type="text"
            name="userName"
            placeholder="text here"
            // value={user?.username ? user.username : "Invalid User Name"}
          />
        </div>
        <div className="col">
          <label>Password</label>
          <input
            className="mb-4"
            type="password"
            name="userAvatar"
            // value={user?.password ? user.password : "Invalid User Password"}
          />
        </div>
        <br />

        <button>Login</button>
      </form>
    </div>
  );
}

export default FormLogin;
