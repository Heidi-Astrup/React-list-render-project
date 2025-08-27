import reactLogo from "./assets/react.svg";
import ListComponent from "./components/ListComponent";
import Member from "./Member";
import { useEffect, useState } from "react";

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const memberList = [
      {
        firstName: "Heidi",
        lastName: "Astrup",
        mail: "Heid@eaaa.dk",
      },
      {
        firstName: "Annika",
        lastName: "Laursen",
        mail: "Anni@eaaa.dk",
      },
      {
        firstName: "Peder",
        lastName: "Madsen",
        mail: "Pede@eaaa.dk",
      },
    ];
  }, []);

  setMembers(memberList);
  console.log(memberList);

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
