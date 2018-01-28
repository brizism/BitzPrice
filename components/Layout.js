import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
      <title>BitzPrice</title>
    </Head>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;