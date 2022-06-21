import Navbar from "../../components/navbar/Navbar";
import Header from "../../header/Header";
import Featured from "../../featured/Featured";
import PropertyList from "../../propertyList/PropertyList";
import "./home.css";
import FeatureProperties from "../../featureProperties/FeatureProperties";
import MailList from "../../mailList/MailList";
import Footer from "../../footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeatureProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
