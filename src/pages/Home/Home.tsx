import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div id="error-page">
      <Link to={`dashboard/1`}>Your Name</Link>
      <h1>Home page!</h1>
    </div>
  );
};

export default Home;
