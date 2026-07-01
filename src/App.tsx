import { ThemeProvider } from './hooks/useTheme'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import BrandCarousel from './components/sections/BrandCarousel'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <BrandCarousel />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
