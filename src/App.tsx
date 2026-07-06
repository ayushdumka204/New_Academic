import { ThemeProvider } from './hooks/useTheme'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import BrandCarousel from './components/sections/BrandCarousel'
import About from './components/sections/About'
import Stats from './components/sections/Stats'
import Scroll from './components/sections/Scroll'
import Leftrighscroll from './components/sections/Leftrighscroll'
import Rightleft from './components/sections/Rightleft'
import Team from './components/sections/Team'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
           <Stats />
           <BrandCarousel />
           <Rightleft />
           <Leftrighscroll />
           <Team />
           <FAQ />
           <CTA />
         
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
