import { useState } from "react";

export default function NewUserForm() {
  const [name, setName] = useState("");

  return (
    <>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}
