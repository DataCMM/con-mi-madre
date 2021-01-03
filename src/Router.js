import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Pages/Landing";
import Purpose from "./Components/Pages/About/Purpose";
import Donate from "./Components/Pages/Donate";
import Program from "./Components/Pages/Program/ProgrammingStructure";
import Careers from "./Components/Pages/About/Careers";
import Services from "./Components/Pages/Program/Services";
import Involved from "./Components/Pages/Program/Involved";
import Awards from "./Components/Pages/Community/Awards";
import Events from "./Components/Pages/Community/Events";
import Partners from "./Components/Pages/Community/Partners";
import Resources from "./Components/Pages/Participants/Resources";
import Contact from "./Components/Pages/About/Contact";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/Purpose" component={Purpose} />
      <Route path="/Donate" component={Donate} />
      <Route path="/Program" component={Program} />
      <Route path="/Careers" component={Careers} />
      <Route path="/Services" component={Services} />
      <Route path="/Involved" component={Involved} />
      <Route path="/Awards" component={Awards} />
      <Route path="/Events" component={Events} />
      <Route path="/Partners" component={Partners} />
      <Route path="/Resources" component={Resources} />
      <Route path="/Contact" component={Contact} />
    </Switch>
  );
};

export default Router;
