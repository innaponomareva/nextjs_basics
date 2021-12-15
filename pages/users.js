import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Users = ({data}) => {
  const [ users, setUsers ] = useState(null)

  useEffect(() => {
    if(data){
      setUsers(data)
    }
  }, [data])

  return (
    <Layout keywords={"users"} title={"Users"}>
      <h1>Users List</h1>
      {users &&
        <ul>
        {users.map(user => 
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
          )}
      </ul>
      }
    </Layout>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await response.json()


  return {
      props: {data},
      revalidate: 300,
  }
}