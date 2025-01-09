import Body from '../Components/Home/Body.jsx';
import Footer from '../Components/Home/Footer.jsx';
import OpenLink from '../Components/Core/OpenLink.jsx';

import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import githubLogo from '../assets/github.svg';
const Home = () => {
  return (
      <div>
          <OpenLink redirectURL="https://vite.dev" logoImage={viteLogo}/>
          <OpenLink redirectURL="https://react.dev" logoImage={reactLogo}/>
          <OpenLink redirectURL="https://github.com/herlan-lopez/desarrollo-frontend-react" logoImage={githubLogo}/>
          
          <Body />
          <Footer />
      </div>
  );
};

export default Home;