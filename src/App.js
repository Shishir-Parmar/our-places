 import {Route, Switch} from "react-router-dom";
 import AllPlaces from "./pages/AllPlaces";
 import Favorites from "./pages/Favorites";
 import NewPlaces from "./pages/NewPlaces";
 import Layout from "./components/layout/Layout"


 function App() {
  return (
   <Layout>
     <Switch>
      <Route path="/" exact>
        <AllPlaces/>
       </Route>
      <Route path="/newPlaces">
        <NewPlaces/>
       </Route>
      <Route path="/favorites">
        <Favorites/>
       </Route>
     </Switch>
    </Layout>
  );
}

export default App;
