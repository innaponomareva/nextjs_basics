import { useRouter } from "next/router"
import Layout from "../../components/Layout";
import styles from "../../styles/user.module.scss"

export default function User({id, email, name, city}){
  const { query } = useRouter()

  return(
    <Layout keywords={name} title={name}>
      {id ?
          <div className={styles.user}>
            <h1>{name}</h1>
            <div>ID --- {query.id}</div>
            <div>Email --- {email}</div>
            <div>City --- {city}</div>
        </div> 
        :
        <h1>User not found</h1>
      }
    </Layout>
  )
};

export async function getServerSideProps(context) {
  const params = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()

  if(!user.name){
    return {
      props: {
        id: null,
        email: null,
        name: null,
        city: null
      },
    };
  }

  return {
    props: {
      id: user.id,
      email: user.email,
      name: user.name,
      city: user.address.city
    },
  };
  
}