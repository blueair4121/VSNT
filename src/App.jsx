import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Roadmap } from './components/roadmap'
import { Partners } from './components/partners'
import { Media } from './components/media'
import { Detail } from './components/detail'
import {Listing} from './components/listings'
// import { Team } from './components/Team'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { Faqs } from './components/faqs'
import { Concept } from './components/concept'
import { Service} from './components/service'
import {Tokenomic} from './components/tokenomic'

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
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Concept data={landingPageData.Concept} />
      <Tokenomic/>
      <Service/>
      <Roadmap data={landingPageData.Roadmap} />
      <Faqs data={landingPageData.Faqs}/>
      <Partners/>
      <Detail data={landingPageData.Detail}/>
      <Media data={landingPageData.Media} />
      <Listing data={landingPageData.Listing}/>
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>

  )
}

export default App;
