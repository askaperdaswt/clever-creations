import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import SweetPage from './components/SweetPage';

// Import all person pages
import AlexGootPage from './pages/AlexGootPage';
import AliciaJonesPage from './pages/AliciaJonesPage';
import AmyWildePage from './pages/AmyWildePage';
import AndrianaSkaperdasPage from './pages/AndrianaSkaperdasPage';
import AngelaShenPage from './pages/AngelaShenPage';
import AnnaKozlovaPage from './pages/AnnaKozlovaPage';
import ArielFinnoPage from './pages/ArielFinnoPage';
import BerniceMejaPage from './pages/BerniceMejaPage';
import BobbyNguyenPage from './pages/BobbyNguyenPage';
import ChelseaJonesPage from './pages/ChelseaJonesPage';
import DaveDevinePage from './pages/DaveDevinePage';
import EmilyFirgensPage from './pages/EmilyFirgensPage';
import EmilyKohlerPage from './pages/EmilyKohlerPage';
import EmilyPetersonPage from './pages/EmilyPetersonPage';
import HankThornhillPage from './pages/HankThornhillPage';
import IanMcDiarmidPage from './pages/IanMcDiarmidPage';
import JeffreyPraterPage from './pages/JeffreyPraterPage';
import JenWarePage from './pages/JenWarePage';
import JennaRayPage from './pages/JennaRayPage';
import JohnKarayelPage from './pages/JohnKarayelPage';
import JoseAndersonPage from './pages/JoseAndersonPage';
import JosiasJimenezPage from './pages/JosiasJimenezPage';
import JoshAmerPage from './pages/JoshAmerPage';
import KatieKrolPage from './pages/KatieKrolPage';
import KatieLeducPage from './pages/KatieLeducPage';
import KatieLongPage from './pages/KatieLongPage';
import KristenDukePage from './pages/KristenDukePage';
import MalekElHagePage from './pages/MalekElHagePage';
import MelissaGorhamPage from './pages/MelissaGorhamPage';
import NicolasPadillaPage from './pages/NicolasPadillaPage';
import PamelaParedesHernandezPage from './pages/PamelaParedesHernandezPage';
import PremRamaniPage from './pages/PremRamaniPage';
import RebeccaOConnerPage from './pages/RebeccaOConnerPage';
import RhettFerrinPage from './pages/RhettFerrinPage';
import SarahHallidayPage from './pages/SarahHallidayPage';
import ShaileeRindaniPage from './pages/ShaileeRindaniPage';
import ShaunaAroraPage from './pages/ShaunaAroraPage';
import SilviaSandovalPage from './pages/SilviaSandovalPage';
import StephanieRochPage from './pages/StephanieRochPage';
import TrevorTuplinPage from './pages/TrevorTuplinPage';
import WilliamsAbarcaPage from './pages/WilliamsAbarcaPage';
import SarahNicolettiPage from './pages/SarahNicolettiPage';
import MargoBulkaPage from './pages/MargoBulkaPage';
import Extra3Page from './pages/Extra3Page';
import Extra4Page from './pages/Extra4Page';
import Extra5Page from './pages/Extra5Page';
import Extra6Page from './pages/Extra6Page';
import Extra7Page from './pages/Extra7Page';

const AppLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Array of team members
  const products = [
    { icon: "🍭", name: "Alex Goot", description: "Sweet Treats Specialist" },
    { icon: "🍫", name: "Alicia Jones", description: "Sweet Treats Specialist" },
    { icon: "🍬", name: "Amy Wilde", description: "Sweet Treats Specialist" },
    { icon: "🧁", name: "Andriana Skaperdas", description: "Sweet Treats Specialist" },
    { icon: "🍩", name: "Angela Shen", description: "Sweet Treats Specialist" },
    { icon: "🍪", name: "Anna Kozlova", description: "Sweet Treats Specialist" },
    { icon: "🎂", name: "Ariel Finno", description: "Sweet Treats Specialist" },
    { icon: "🍰", name: "Bernice Meja", description: "Sweet Treats Specialist" },
    { icon: "🥧", name: "Bobby Nguyen", description: "Sweet Treats Specialist" },
    { icon: "🍮", name: "Chelsea Jones", description: "Sweet Treats Specialist" },
    { icon: "🍯", name: "Dave Devine", description: "Sweet Treats Specialist" },
    { icon: "🎂", name: "Emily Firgens", description: "Sweet Treats Specialist" },
    { icon: "🍰", name: "Emily Kohler", description: "Sweet Treats Specialist" },
    { icon: "🥧", name: "Emily Peterson", description: "Sweet Treats Specialist" },
    { icon: "🍩", name: "Hank Thornhill", description: "Sweet Treats Specialist" },
    { icon: "🍪", name: "Ian McDiarmid", description: "Sweet Treats Specialist" },
    { icon: "🍓", name: "Jeffrey Prater", description: "Sweet Treats Specialist" },
    { icon: "🍒", name: "Jen Ware", description: "Sweet Treats Specialist" },
    { icon: "🍮", name: "Jenna Ray", description: "Sweet Treats Specialist" },
    { icon: "🍋", name: "John Karayel", description: "Sweet Treats Specialist" },
    { icon: "🍊", name: "Jose Anderson", description: "Sweet Treats Specialist" },
    { icon: "🍇", name: "Josias Jimenez", description: "Sweet Treats Specialist" },
    { icon: "🍑", name: "Josh Amer", description: "Sweet Treats Specialist" },
    { icon: "🍌", name: "Katie Krol", description: "Sweet Treats Specialist" },
    { icon: "🥭", name: "Katie Leduc", description: "Sweet Treats Specialist" },
    { icon: "🍍", name: "Katie Long", description: "Sweet Treats Specialist" },
    { icon: "🍭", name: "Kristen Duke", description: "Sweet Treats Specialist" },
    { icon: "🍫", name: "Malek El Hage", description: "Sweet Treats Specialist" },
    { icon: "🧁", name: "Melissa Gorham", description: "Sweet Treats Specialist" },
    { icon: "🍭", name: "Nicolas Padilla", description: "Sweet Treats Specialist" },
    { icon: "🍫", name: "Pamela Paredes Hernandez", description: "Sweet Treats Specialist" },
    { icon: "🍬", name: "Prem Ramani", description: "Sweet Treats Specialist" },
    { icon: "🧁", name: "Rebecca O'Conner", description: "Sweet Treats Specialist" },
    { icon: "🍩", name: "Rhett Ferrin", description: "Sweet Treats Specialist" },
    { icon: "🍪", name: "Sarah Halliday", description: "Sweet Treats Specialist" },
    { icon: "🎂", name: "Shailee Rindani", description: "Sweet Treats Specialist" },
    { icon: "🍰", name: "Shauna Arora", description: "Sweet Treats Specialist" },
    { icon: "🥧", name: "Silvia Sandoval", description: "Sweet Treats Specialist" },
    { icon: "🍮", name: "Stephanie Roch", description: "Sweet Treats Specialist" },
    { icon: "🍯", name: "Trevor Tuplin", description: "Sweet Treats Specialist" },
    { icon: "🍬", name: "Williams Abarca", description: "Sweet Treats Specialist" },
    { icon: "🍭", name: "Sarah Nicoletti", description: "Sweet Treats Specialist" },
    { icon: "🍫", name: "Margo Bulka", description: "Sweet Treats Specialist" },
    { icon: "🍬", name: "Extra 3", description: "Sweet Treats Specialist" },
    { icon: "🍓", name: "Extra 4", description: "Sweet Treats Specialist" },
    { icon: "🍒", name: "Extra 5", description: "Sweet Treats Specialist" },
    { icon: "🥥", name: "Extra 6", description: "Sweet Treats Specialist" },
    { icon: "🍋", name: "Extra 7", description: "Sweet Treats Specialist" }
  ];

  return (
    <div className="App">
      {/* Navigation Header - only show on home page */}
      {isHomePage && (
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>🍭 Clever Creations</h1>
              </Link>
            </div>
            <ul className="nav-menu">
              <li><Link to="/">Home</Link></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      )}

      {/* Routes */}
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/sweet/alex-goot" element={<AlexGootPage />} />
          <Route path="/sweet/alicia-jones" element={<AliciaJonesPage />} />
          <Route path="/sweet/amy-wilde" element={<AmyWildePage />} />
          <Route path="/sweet/andriana-skaperdas" element={<AndrianaSkaperdasPage />} />
          <Route path="/sweet/angela-shen" element={<AngelaShenPage />} />
          <Route path="/sweet/anna-kozlova" element={<AnnaKozlovaPage />} />
          <Route path="/sweet/ariel-finno" element={<ArielFinnoPage />} />
          <Route path="/sweet/bernice-meja" element={<BerniceMejaPage />} />
          <Route path="/sweet/bobby-nguyen" element={<BobbyNguyenPage />} />
          <Route path="/sweet/chelsea-jones" element={<ChelseaJonesPage />} />
          <Route path="/sweet/dave-devine" element={<DaveDevinePage />} />
          <Route path="/sweet/emily-firgens" element={<EmilyFirgensPage />} />
          <Route path="/sweet/emily-kohler" element={<EmilyKohlerPage />} />
          <Route path="/sweet/emily-peterson" element={<EmilyPetersonPage />} />
          <Route path="/sweet/hank-thornhill" element={<HankThornhillPage />} />
          <Route path="/sweet/ian-mcdiarmid" element={<IanMcDiarmidPage />} />
          <Route path="/sweet/jeffrey-prater" element={<JeffreyPraterPage />} />
          <Route path="/sweet/jen-ware" element={<JenWarePage />} />
          <Route path="/sweet/jenna-ray" element={<JennaRayPage />} />
          <Route path="/sweet/john-karayel" element={<JohnKarayelPage />} />
          <Route path="/sweet/jose-anderson" element={<JoseAndersonPage />} />
          <Route path="/sweet/josias-jimenez" element={<JosiasJimenezPage />} />
          <Route path="/sweet/josh-amer" element={<JoshAmerPage />} />
          <Route path="/sweet/katie-krol" element={<KatieKrolPage />} />
          <Route path="/sweet/katie-leduc" element={<KatieLeducPage />} />
          <Route path="/sweet/katie-long" element={<KatieLongPage />} />
          <Route path="/sweet/kristen-duke" element={<KristenDukePage />} />
          <Route path="/sweet/malek-el-hage" element={<MalekElHagePage />} />
          <Route path="/sweet/melissa-gorham" element={<MelissaGorhamPage />} />
          <Route path="/sweet/nicolas-padilla" element={<NicolasPadillaPage />} />
          <Route path="/sweet/pamela-paredes-hernandez" element={<PamelaParedesHernandezPage />} />
          <Route path="/sweet/prem-ramani" element={<PremRamaniPage />} />
          <Route path="/sweet/rebecca-oconner" element={<RebeccaOConnerPage />} />
          <Route path="/sweet/rhett-ferrin" element={<RhettFerrinPage />} />
          <Route path="/sweet/sarah-halliday" element={<SarahHallidayPage />} />
          <Route path="/sweet/shailee-rindani" element={<ShaileeRindaniPage />} />
          <Route path="/sweet/shauna-arora" element={<ShaunaAroraPage />} />
          <Route path="/sweet/silvia-sandoval" element={<SilviaSandovalPage />} />
          <Route path="/sweet/stephanie-roch" element={<StephanieRochPage />} />
          <Route path="/sweet/trevor-tuplin" element={<TrevorTuplinPage />} />
          <Route path="/sweet/williams-abarca" element={<WilliamsAbarcaPage />} />
          <Route path="/sweet/sarah-nicoletti" element={<SarahNicolettiPage />} />
          <Route path="/sweet/margo-bulka" element={<MargoBulkaPage />} />
          <Route path="/sweet/extra-3" element={<Extra3Page />} />
          <Route path="/sweet/extra-4" element={<Extra4Page />} />
          <Route path="/sweet/extra-5" element={<Extra5Page />} />
          <Route path="/sweet/extra-6" element={<Extra6Page />} />
          <Route path="/sweet/extra-7" element={<Extra7Page />} />
        </Routes>

      {/* Footer - only show on home page */}
      {isHomePage && (
        <footer className="footer" id="contact">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>🍭 Clever Creations</h3>
                <p>Making the world sweeter, one candy at a time.</p>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><a href="#products">Products</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contact Info</h4>
                <p>📍 123 Sweet Street, Candy City</p>
                <p>📞 (555) 123-SWEET</p>
                <p>✉️ hello@clevercreations.com</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Clever Creations. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
