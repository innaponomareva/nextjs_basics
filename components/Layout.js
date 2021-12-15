import Head from "next/head";
import A from "../components/A";

const Layout = ({children, keywords, title}) => {
  return (
    <>
      <Head>
        <meta keywords={"innap85, nextjs" + ", " + keywords}></meta>
        <title>{title}</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Main" />
        <A href={"/users"} text="Users" />
      </div>

      <div>
        {children}
      </div>

      <style jsx>
          {`
            .navbar {
              background: orange;
              padding: 15px; 
            }
          `}
        </style>
    </>
  );
};

export default Layout;