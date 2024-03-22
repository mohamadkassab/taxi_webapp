import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Mynavbar from "./Mycomponents/Mynavbar";
import Home from "./React_Routing/Home";
import Service from "./React_Routing/Service";
import Contact from "./React_Routing/Contact";
import Common from "./React_Routing/COMMON/Common";
import Phone from "./Mycomponents/Phone";
import "./React_Routing/HOME/home.css";
import TaxiBookForm from "./React_Routing/TaxiBookForm";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const graphqlClient = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache()
})


function App() {
  return (
    <div className="App">
      <Router>
      <ApolloProvider client={graphqlClient}>
        <Mynavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<TaxiBookForm />} />
        </Routes>
        <Phone />
        <Common />
        </ApolloProvider>
      </Router>
    </div>
  );
}

export default App;
