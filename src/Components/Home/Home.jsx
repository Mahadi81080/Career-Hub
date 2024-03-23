import Banner from "../Banner/Banner";
import CategoriList from "../CategoriList/CategoriList";
import FeturedJobs from "../FeturedJobs/FeturedJobs";

 

 

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <CategoriList></CategoriList>
          <FeturedJobs></FeturedJobs>
        </div>
    );
};

export default Home;