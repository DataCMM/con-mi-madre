import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Pages/Landing";
import Donate from "./Components/Pages/Donate";
import Careers from "./Components/Pages/About/Careers";
import Contact from "./Components/Pages/About/Contact";
import OurTeam from "./Components/Pages/About/OurTeam";
import Purpose from "./Components/Pages/About/Purpose";
import Awards from "./Components/Pages/Community/Awards";
import Events from "./Components/Pages/Community/Events";
import Partners from "./Components/Pages/Community/Partners";
import ProgrammingEvents from "./Components/Pages/Participants/ProgrammingEvents";
import Resources from "./Components/Pages/Participants/Resources";
import Involved from "./Components/Pages/Program/Involved";
import ProgrammingStructure from "./Components/Pages/Program/ProgrammingStructure";
import Services from "./Components/Pages/Program/Services";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/Donate" component={Donate} />
      <Route path="/Careers" component={Careers} />
      <Route path="/Contact" component={Contact} />
      <Route path="/OurTeam" component={OurTeam} />
      <Route path="/Purpose" component={Purpose} />
      <Route path="/Awards" component={Awards} />
      <Route path="/Events" component={Events} />
      <Route path="/Partners" component={Partners} />
      <Route path="/ProgrammingEvents" component={ProgrammingEvents} />
      <Route path="/Resources" component={Resources} />
      <Route path="/GetInvolved" component={Involved} />
      <Route path="/ProgrammingStructure" component={ProgrammingStructure} />
      <Route path="/Services" component={Services} />
    </Switch>
  );
};

export default Router;
