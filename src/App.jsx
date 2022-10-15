import "swiper/swiper.min.css"
import "./assets/boxicons-2.0.7/css/boxicons.min.css"
import './App.scss'
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./compoents/header/Header"
import Footer from "./compoents/footer/Footer"
import Routes from "./config/Routes"
function App() {
  return (
    <BrowserRouter>
      <Route render={props =>( 
        <>
          <Header {...props}/>
          <Routes/>
          <Footer/>
        </>
      )}/>
    </BrowserRouter>
  )
}

export default App
