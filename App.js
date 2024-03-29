import React from "react";
import { Route,Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; 
import { CreateContainer, Header, MainConatiner } from "./components";

const App = () => {
    return {
   <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col hg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 px-16 py-4 w-full">
            <Routes>
                <Route path="/*" element={MainContainer/>} />
                <Route path="/createItem" element={CreateaContainer />} />
            </Routes>
        </main>
        </div>
        </AnimatePresence>
};
};

export default App;

