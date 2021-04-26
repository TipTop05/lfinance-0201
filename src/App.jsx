import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Header } from './components/Header'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Auth } from "./components/Auth";
import { Reg } from "./components/Reg";
import { Navigation2 } from './cabinet/Navigation2'
import { Finance } from './cabinet/Finance'
import { Profile } from './cabinet/Profile'
import { Statistics } from './cabinet/Statistics'
import { Start } from './cabinet/Start'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Navigation />
            <Header data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
          </Route>
          <Route path="/finance">
            <Navigation2 />
            <Finance />
          </Route>
          <Route path="/profile">
            <Navigation2 />
            <Profile />
          </Route>
          <Route path="/statistics">
            <Navigation2 />
            <Statistics />
          </Route>
          <Route path="/start">
            <Navigation2 />
            <Start />
          </Route>

          <Route path="/auth">
            <Navigation />
            <Auth />
          </Route>
          <Route path="/reg">
            <Navigation />
            <Reg />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  )
}

export default App
