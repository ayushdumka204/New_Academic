import { ThemeProvider } from './hooks/useTheme'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import BrandCarousel from './components/sections/BrandCarousel'
import About from './components/sections/About'
import Stats from './components/sections/Stats'
import Scroll from './components/sections/Scroll'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          
           <Stats />
           <BrandCarousel />
            <Scroll />
          <About />
         
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
