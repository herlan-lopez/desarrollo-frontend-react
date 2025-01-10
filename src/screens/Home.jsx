import Body from "../Components/Home/Body.jsx";
import Footer from "../Components/Home/Footer.jsx";
import OpenLink from "../Components/Core/OpenLink.jsx";

import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import githubLogo from "../assets/github.svg";

import { useSelector, useDispatch } from 'react-redux'


const Home = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <>
    <div>Count value  <span>{count}</span></div>
      <div>
        <OpenLink redirectURL="https://vite.dev" logoImage={viteLogo} />
        <OpenLink redirectURL="https://react.dev" logoImage={reactLogo} />
        <OpenLink
          redirectURL="https://github.com/herlan-lopez/desarrollo-frontend-react"
          logoImage={githubLogo}
        />
      </div>

      <Body />
      <Footer />
    </>
  );
};

export default Home;
