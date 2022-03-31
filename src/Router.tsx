import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { TeammateFinderFortnite } from "./components/TeammateFinderFortnite";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { ScrollToTop } from "./components/ScrollToTop";
import { TeammateFinder } from "./components/TeammateFinder";
import { TeammateList } from "./components/TeammateList";
import { AppProvider } from "./AppContext";

export const Router: React.FC = () => {
   return (
      <AppProvider>
         <BrowserRouter>
            <ScrollToTop />
            <Routes>
               <Route path="/" element={<App />}>
                  <Route index element={<Home />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="teammate-finder">
                     <Route index element={<TeammateFinder />} />
                     <Route path="fortnite">
                        <Route index element={<TeammateFinderFortnite />} />
                        <Route path="list" element={<TeammateList />} />
                     </Route>
                  </Route>
               </Route>
            </Routes>
         </BrowserRouter>
      </AppProvider>
   );
};
