export default function Member({ member }) {
  return (
    <>
      <p>
        This is {member.firstName} {member.lastName}🎉
      </p>
      <p>Mail: {member.mail}</p>
    </>
  );
}
