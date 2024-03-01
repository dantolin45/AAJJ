import React from "react";
import CarouselComponent from "../components/mainPage/CarouselComponent.js";
import HighlistProducts from "../components/highlightProduct/HighlightProducts.js";
import CarouselSubCategories from "../components/mainPage/CarouselSubCategories.js";
import '../css/MainComponent.css'


const Home = ({SubCategory}) => {

   return (
      <>
      
            <article className="MainContainerSection">
               <section className="section-main__container firstSlide">
                  <CarouselComponent />
               </section>
               <section className="section-main__container">
                  <CarouselSubCategories SubCategory={SubCategory} />
               </section>
               <section className="section-main__container">
                  <HighlistProducts />
               </section>
            </article>
     
      </>
   )

}
export default Home;