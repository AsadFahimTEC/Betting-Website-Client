import Banner from "../../Components/Banner/Banner";
import Bookmaker from "../../Components/Bookmaker/Bookmaker";
import Footer from "../../Components/Footer/Footer";
import Partners from "../../Components/Partners/Partners";

const Home = () => {
  return (
    <div className=" bg-[#567ae2]  py-5">
      <Banner></Banner>

      <div>
        <Bookmaker></Bookmaker>
      </div>
      <div className=" mt-10">
      <Footer></Footer>
      </div>

      <div className=" mt-10">
        <Partners></Partners>
      </div>
    </div>
  );
};

export default Home;
