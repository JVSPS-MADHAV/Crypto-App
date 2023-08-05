import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleusername = (e) => {
    setUsername(e.target.value);
  };

  const handlepwd = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRegister = {
      username,
      password,
    };
    axios
      .post("http://localhost:5000/register/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRegister),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Registration added:", data);
        // You can update the UI or show a success message here
      })
      .catch((error) => {
        console.error("Error adding Registration:", error);
        // Handle errors or show an error message here
      });

    // Clear the form after submission
    setUsername("");
    setPassword("");
  };

  return (
    <form id="f1" onSubmit={handleSubmit}>
      <table border="2" align="center">
        <tr>
          <td colspan="2" align="center">
            <h3>REGISTER HERE</h3>
          </td>
        </tr>
        <tr>
          <td class="external">User Name</td>
          <td>
            <input type="text" id="username" onChange={handleusername} />
          </td>
        </tr>
        <tr>
          <td class="fpg">Password</td>
          <td>
            <input type="password" id="password" onChange={handlepwd} />
          </td>
        </tr>

        <tr>
          <td>
            <input type="submit" value="Register" id="register" class="btns" />
          </td>
          <td>
            <input type="button" value="Clear" id="clear" class="btns" />
          </td>
        </tr>
        <tr>
          <td colspan="2" align="center">
            <a href="login.html">Already User? Sign In</a>
          </td>
        </tr>
      </table>
    </form>
  );
};

export default Register;
