import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import FAQs from './Components/FAQs/FAQs'
import FeatureList from './Components/FeatureList/FeatureList'

function App() {

  // for now keep it like this later i will add routing

  return (
    <>
    <Navbar/>
    <Hero/>
      <FeatureList/>
      <FAQs/>
      <Footer/>

    </>
  )
}

export default App


// if fontawesome packages are not present follow these steps
// npm install --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/free-regular-svg-icons
// npm install --save @fortawesome/free-brands-svg-icons
// npm install --save @fortawesome/react-fontawesome
// then
// import and use
