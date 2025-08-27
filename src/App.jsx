import reactLogo from "./assets/react.svg";
import ListComponent from "./components/ListComponent";
import Member from "./Member";
import { useEffect, useState } from "react";

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function getMembers() {
      const response = await fetch(
        "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/members.json"
      );
      const data = await response.json();
      setMembers(data); // save data in the 'members' state
    }

    // Call the 'getMembers' function only once when the component mounts (empty dependency array)
    getMembers();
  }, []);

  return (
    <>
      <ListComponent />
      <Member
        member={{
          firstName: "Rasmus",
          lastName: "Cederdorff",
          mail: "race@eaaa.dk",
        }}
      />
      {members.map((member) => (
        <Member member={member} />
      ))}
    </>
  );
}

export default App;
