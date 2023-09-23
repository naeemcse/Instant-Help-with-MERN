
import "./home.css";
import Search from "../search/search";
//import Signup from "../signup/Signup";

import Layout from "../../components/layout/Layout";





const Home = () => {
  return (
    <Layout>
      <div className="home">
       
        {/* Nav var  End  */}
         <Search /> 

      </div>
     
    </Layout>


  );
};

export default Home;
