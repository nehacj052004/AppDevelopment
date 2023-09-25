import "./App.css"
import Header from "./components/common/header/Header"
import { Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import AdmissionHome from "./pages/AdmissionHome"
import Admission from "./pages/Admission"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsCondition from "./pages/TermsCondition"
import Testimonal from "./components/home/testimonal/Testimonal"

function App() {
  return (
    <>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/courses' element={<CourseHome/>} />
          <Route path='/team' element={<Team />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/journal' element={<Blog />} />
          <Route path='/testimonal' element={<Testimonal/>}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/admission' element={<AdmissionHome />} />
          <Route path='/adform' element={<Admission />} />
          <Route path='/privacy' element={<PrivacyPolicy/>}/>
          <Route path='/terms' element={<TermsCondition/>}/>
        </Routes> 
    </>
  )
}

export default App
