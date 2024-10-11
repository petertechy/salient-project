import React from "react";
import NavigationBar from "../../Navbar";
import Footer from "../../Footer";
import { 
  HomePageContainer,
} from "./HomeElement.style";
import Contact from "../../SubSections/ContactSection";

const Home = () => {
  return (
    <>
      <HomePageContainer>
        <NavigationBar />
        <Contact/>
        <Footer />
      </HomePageContainer>
    </>
  );
};
export default Home;
