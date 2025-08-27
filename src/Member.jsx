export default function Member({ member }) {
  return (
    <>
      <img src={member.image} alt="" />
      <h2>
        This is {member.firstName} {member.lastName}🎉
      </h2>
      <p>Gender: {member.gender} </p>
      <p>Birth: {member.dateOfBirth}</p>
    </>
  );
}
