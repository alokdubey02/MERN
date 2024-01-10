import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/component/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";

// another way to write the function which is arrow function
// const App=()=>{
//   return (
//     <div>
//       anything it works same as the below one
//     </div>
//   )
// }

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        {/* Switch is used to handle the route path because is Switch is not used and you use Redirect then then different Routes components not works it redirect to the Redirect path */}
        <Switch>
          {/* we can also use Route as <Route path="/" component={Users} /> with self closing tag both are same */}
          {/* it is used to route the path when / end point triggers in the url */}
          <Route path="/" exact={true}>
            {/*the term exact={true}or(exact) is used for only triggers when end point is / , because by default /(slash) means it triggers for all endpoint having /anything and here / triggers as filter */}
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            {/*here :userId redirects to the user id in url path*/}
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            {/*exact or exact={true} both are same*/}
            <NewPlace />
          </Route>
          <Route path="/places/:placeId">
            <UpdatePlace />
          </Route>
          <Redirect to="/" />
          {/*the term Redirect is used for redirecting the url if the url endpoint is /anything else to / endpoint*/}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
