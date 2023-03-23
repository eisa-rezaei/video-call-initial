import { Suspense, lazy } from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

const Home = lazy(() => import("./components/Home"));
const Setting = lazy(() => import("./components/Setting"));
const Login = lazy(() => import("./components/Login"));
const People = lazy(() => import("./components/People"));
const Speed = lazy(() => import("./components/Speed"));
const Statistics = lazy(() => import("./components/Statistics"));
const Watch = lazy(() => import("./components/Watch"));
const Check = lazy(() => import("./components/Check"));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/check" element={<Check />} />
            <Route path="/speed" element={<Speed />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/login" element={<Login />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
