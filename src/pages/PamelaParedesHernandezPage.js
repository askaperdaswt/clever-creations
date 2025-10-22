import React from 'react';
import { Link } from 'react-router-dom';
import './PamelaParedesHernandezPage.css';

const PamelaParedesHernandezPage = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="pamela-page">
        <div className="pamela-content">
          {/* Hero Section */}
          <div className="pamela-hero">
            <h1 className="pamela-title">🇸🇻 Salvadoran Sweet Treats</h1>
            <p className="pamela-subtitle">A Journey Through El Salvador's Most Beloved Candies</p>
            <p className="pamela-description">
              Discover the rich confectionery traditions of El Salvador through these 
              authentic and delicious sweet treats that have been cherished for generations.
            </p>
          </div>

          {/* Salvadoran Candies - Each as Separate Section */}
          <div className="pamela-candy-sections">
            {/* Dulce de Coco */}
            <div className="pamela-candy-section">
              <div className="pamela-candy-header">
                <span className="pamela-candy-number">1</span>
                <h2 className="pamela-candy-title">🥥 Dulce de Coco</h2>
              </div>
              <div className="pamela-candy-content">
                <p className="pamela-candy-description">
                  Traditional coconut candy made from fresh coconut, sugar, and milk. 
                  This creamy, sweet treat is a staple in Salvadoran households and 
                  represents the tropical flavors of Central America.
                </p>
                <div className="pamela-fun-facts">
                  <h4>Fun Facts:</h4>
                  <ul>
                    <li>Often made during special occasions and holidays</li>
                    <li>Can be shaped into small balls or pressed into bars</li>
                    <li>Traditionally uses fresh coconut grated by hand</li>
                    <li>Sometimes includes cinnamon for extra flavor</li>
                  </ul>
                </div>
                <div className="pamela-joke">
                  <h4>😄 Joke:</h4>
                  <p>"Why did the coconut go to the party? Because it was a real <em>nut</em> for sweets! 🥥"</p>
                </div>
              </div>
            </div>

            {/* Melcocha */}
            <div className="pamela-candy-section">
              <div className="pamela-candy-header">
                <span className="pamela-candy-number">2</span>
                <h2 className="pamela-candy-title">🍯 Melcocha</h2>
              </div>
              <div className="pamela-candy-content">
                <p className="pamela-candy-description">
                  Hand-pulled taffy that's both chewy and delicious. This traditional 
                  candy requires skill and patience to make, as it's pulled by hand 
                  until it reaches the perfect consistency and texture.
                </p>
                <div className="pamela-fun-facts">
                  <h4>Fun Facts:</h4>
                  <ul>
                    <li>Made by pulling hot sugar mixture until it becomes glossy</li>
                    <li>Often sold by street vendors in small paper cones</li>
                    <li>The pulling process can take up to 30 minutes</li>
                    <li>Sometimes flavored with vanilla or fruit extracts</li>
                  </ul>
                </div>
                <div className="pamela-joke">
                  <h4>😄 Joke:</h4>
                  <p>"What do you call a taffy that's been working out? <em>Flex</em>cocha! 💪🍯"</p>
                </div>
              </div>
            </div>

            {/* Dulce de Piña */}
            <div className="pamela-candy-section">
              <div className="pamela-candy-header">
                <span className="pamela-candy-number">3</span>
                <h2 className="pamela-candy-title">🍍 Dulce de Piña</h2>
              </div>
              <div className="pamela-candy-content">
                <p className="pamela-candy-description">
                  Pineapple candy that captures the tropical essence perfectly. Made 
                  from fresh pineapple cooked down with sugar, this treat brings 
                  the taste of El Salvador's tropical climate to every bite.
                </p>
                <div className="pamela-fun-facts">
                  <h4>Fun Facts:</h4>
                  <ul>
                    <li>Often made with pineapples grown locally in El Salvador</li>
                    <li>Can be made into preserves or hard candy form</li>
                    <li>Popular as a gift during Christmas season</li>
                    <li>Sometimes includes pieces of actual pineapple</li>
                  </ul>
                </div>
                <div className="pamela-joke">
                  <h4>😄 Joke:</h4>
                  <p>"Why did the pineapple candy break up with the apple candy? Because it was too <em>sweet</em>! 🍍💔"</p>
                </div>
              </div>
            </div>

            {/* Turrón de Peanut */}
            <div className="pamela-candy-section">
              <div className="pamela-candy-header">
                <span className="pamela-candy-number">4</span>
                <h2 className="pamela-candy-title">🥜 Turrón de Peanut</h2>
              </div>
              <div className="pamela-candy-content">
                <p className="pamela-candy-description">
                  Peanut nougat that's crunchy, sweet, and absolutely addictive. This 
                  traditional confection combines roasted peanuts with honey and sugar 
                  to create a satisfying texture and rich flavor.
                </p>
                <div className="pamela-fun-facts">
                  <h4>Fun Facts:</h4>
                  <ul>
                    <li>Similar to Spanish turrón but with Salvadoran twist</li>
                    <li>Often includes sesame seeds for extra crunch</li>
                    <li>Traditionally wrapped in rice paper</li>
                    <li>Popular during Easter and Christmas celebrations</li>
                  </ul>
                </div>
                <div className="pamela-joke">
                  <h4>😄 Joke:</h4>
                  <p>"What do you call a peanut that's been to art school? A <em>nut</em>ty artist! 🥜🎨"</p>
                </div>
              </div>
            </div>

            {/* Alfeñique */}
            <div className="pamela-candy-section">
              <div className="pamela-candy-header">
                <span className="pamela-candy-number">5</span>
                <h2 className="pamela-candy-title">🍬 Alfeñique</h2>
              </div>
              <div className="pamela-candy-content">
                <p className="pamela-candy-description">
                  Traditional sugar candy with unique textures and flavors. This 
                  artisanal confection comes in various shapes and colors, often 
                  handcrafted into decorative forms for special occasions.
                </p>
                <div className="pamela-fun-facts">
                  <h4>Fun Facts:</h4>
                  <ul>
                    <li>Often shaped into animals, flowers, or geometric patterns</li>
                    <li>Made using traditional techniques passed down generations</li>
                    <li>Commonly used as decorations for Day of the Dead</li>
                    <li>Can be flavored with fruit juices or extracts</li>
                  </ul>
                </div>
                <div className="pamela-joke">
                  <h4>😄 Joke:</h4>
                  <p>"Why did the sugar candy go to therapy? Because it had too many <em>sweet</em> dreams! 🍬😴"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pamela-footer-note">
            <p>
              <em>These treats represent the heart of Salvadoran confectionery tradition! 
              Each candy tells a story of family, culture, and the sweet moments that 
              bring communities together.</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PamelaParedesHernandezPage;