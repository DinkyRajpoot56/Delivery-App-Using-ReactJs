import React from 'react';
import Delivery from "../react app/delivery.png";
import heroBg from "../img/heroBg.png";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-start gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p classname="text-base text-orange=500 font-semibold">Bike Delivery</p>
          <div classname="w-8 h-8 bg-white rounded-full overflow-hidden
          drop-shadow-x1">
            <img 
            src={Delivery}
             className="w-full h-full object-contain"
              alt="delivery"/>

          </div>
        </div>
        <p classname="text-[2.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in <span className="text-orange-500 text-[3rem]">Your city</span>
          </p>
          <p className="text-base text-textColor text-center md:text-left">Lorem, ipsum dolor sit amet consectetur adipisicing
           elit. Harum ab ea, ratione beatae nesciunt ipsum. Beatae quod praesentium mollitia provident ad
          fugit sit, dolorum, quis placeat totam soluta tempora unde!</p>
         <button type="button"
          className="bg-gradient-to-br from-orange-400 to orange-500 w-full px-4py-2 
          rounded-lg md:w-auto hover:shadow-lg transition-all ease-in-out duration-200">Order Now</button>
      </div>
        <div classname="py-2 bg-blue-400 flex-1"></div>
      
  );
};

<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-2 flex-1 flex flex-col items-start justify-start gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p classname="text-base text-orange=500 font-semibold">Bike Delivery</p>
          <div classname="w-8 h-8 bg-white rounded-full overflow-hidden
          drop-shadow-x1">
            <img 
            src={Delivery}
             className="w-full h-full object-contain"
              alt="delivery"/>

          </div>
        </div>
        <p classname="text-[2.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in <span className="text-orange-500 text-[3rem]">Your city</span>
          </p>
          <p className="text-base text-textColor text-center md:text-left">Lorem, ipsum dolor sit amet consectetur adipisicing
           elit. Harum ab ea, ratione beatae nesciunt ipsum. Beatae quod praesentium mollitia provident ad
          fugit sit, dolorum, quis placeat totam soluta tempora unde!</p>
         <button type="button"
          className="bg-gradient-to-br from-ornge-400 to orange-500 w-full px-4py-2 
          rounded-lg md:w-auto hover:shadow-lg transition-all ease-in-out duration-200">Order Now</button>
      </div>
        <div classname="py-2 flex-1">
            <div classname="w-full flex items-center justify-center relative">
                <img src={heroBg} alt="hero-bg"/>
            </div>
        </div>
      </section>
      );
    };
    export default HomeContainer;
