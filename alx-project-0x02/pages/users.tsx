import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

export default function users({ users }: any) {
  console.log(users);
  return (
    <>
      <Header />
      <h1>This is users page</h1>
      {users.map((user: any) => {
        return (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
            phone={""}
            website={""}
            company={{
              name: "",
              catchPhrase: "",
              bs: "",
            }}
          />
        );
      })}
    </>
  );
}
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}
