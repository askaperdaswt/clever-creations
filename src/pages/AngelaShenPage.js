import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AngelaShenPage.css';

const AngelaShenPage = () => {
  useEffect(() => {
    const setOrUpdateMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const setOrUpdateProperty = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    document.title = 'Sweet Treats • Meet Angela — Sweet Treat Specialist';
    setOrUpdateMeta(
      'description',
      'Donut devotion, golden glazes, and tiny frosted hugs. Meet Angela, Sweet Treats’ Sweet Treat Specialist.'
    );
    setOrUpdateProperty('og:title', 'Sweet Treats • Meet Angela — Sweet Treat Specialist');
    setOrUpdateProperty('og:description', 'Donut devotion, golden glazes, and tiny frosted hugs. Meet Angela, Sweet Treats’ Sweet Treat Specialist.');
    setOrUpdateProperty('og:image', '/og-sweet-treats.jpg');
    setOrUpdateProperty('og:type', 'website');
    setOrUpdateMeta('twitter:card', 'summary_large_image');
    setOrUpdateMeta('twitter:title', 'Sweet Treats • Meet Angela — Sweet Treat Specialist');
    setOrUpdateMeta('twitter:description', 'Donut devotion, golden glazes, and tiny frosted hugs. Meet Angela, Sweet Treats’ Sweet Treat Specialist.');
    setOrUpdateMeta('twitter:image', '/og-sweet-treats.jpg');
  }, []);

  return (
    <div className="angela-page">
      <div className="angela-bg" aria-hidden="true" />
      <header className="angela-header">
        <div className="angela-header-inner">
          <Link to="/" className="angela-backlink">← Back to Home</Link>
        </div>
      </header>
      <main className="angela-content">
        {/* Hero */}
        <section className="angela-hero" aria-label="Hero">
          <div className="angela-hero-inner">
            <div className="angela-hero-text">
              <h1 className="angela-title">Meet Angela — Sweet Treat Specialist</h1>
              <p className="angela-subtitle">Glazing trails and raising dough, one ring of joy at a time.</p>
              <div className="angela-cta-group">
                <a href="#order" className="angela-btn angela-btn-primary" aria-label="Order Sweet Treats">Order Sweet Treats</a>
                <a href="#contact" className="angela-btn angela-btn-secondary" aria-label="Contact Angela">Contact Angela</a>
              </div>
            </div>
            <div className="angela-hero-art" aria-hidden="true">
              <div className="angela-donut-stack" />
            </div>
          </div>
        </section>

        <div className="angela-sprinkles" role="separator" aria-hidden="true" />

        


        {/* Origin Story (Glory Glaze) */}
        <section className="angela-section" aria-labelledby="glory-glaze-heading">
          <h2 id="glory-glaze-heading" className="angela-h2">Glory Glaze</h2>
          <div className="angela-two-col">
            <p>
              My love affair with donuts started with a whisk, a dream, and a hole-lotta curiosity. Late-night experiments became morning rituals,
              and soon I was crafting glazes that shine, dough that rises, and boxes that make people beam. Around here, dessert isn’t an afterthought — it’s the main character.
            </p>
            <blockquote className="angela-quote">“Donut worry, be happy — and eat dessert first.”</blockquote>
          </div>
        </section>

        {/* Daily Grind (and Glaze) */}
        <section className="angela-section" aria-labelledby="daily-grind-heading">
          <h2 id="daily-grind-heading" className="angela-h2">Daily Grind (and Glaze)</h2>
          <ul className="angela-list">
            <li>Pre-dawn proofing & golden-hour frying</li>
            <li>Espresso in one hand, glaze brush in the other</li>
            <li>Quality control = taste testing (it’s a tough job)</li>
          </ul>
          <p className="angela-tagline">We rise early — and so does our dough.</p>
        </section>

        

        {/* Signature Flavors */}
        <section className="angela-section" aria-labelledby="signature-flavors-heading">
          <h2 id="signature-flavors-heading" className="angela-h2">Signature Flavors</h2>
          <div className="angela-grid">
            <article className="angela-card" aria-label="Glazed & Confused">
              <span className="angela-donut angela-donut-glazed" aria-hidden="true" />
              <h3 className="angela-h3">Glazed & Confused</h3>
              <p>Classic shine, maximum grin.</p>
            </article>
            <article className="angela-card" aria-label="Maple Bacon Bliss">
              <span className="angela-donut angela-donut-maple" aria-hidden="true" />
              <h3 className="angela-h3">Maple Bacon Bliss</h3>
              <p>Sweet, salty, sizzling.</p>
            </article>
            <article className="angela-card" aria-label="Cinnamon Swirl Situation">
              <span className="angela-donut angela-donut-cinnamon" aria-hidden="true" />
              <h3 className="angela-h3">Cinnamon Swirl Situation</h3>
              <p>The twist you’ll never untangle.</p>
            </article>
            <article className="angela-card" aria-label="Berry Important Donut">
              <span className="angela-donut angela-donut-berry" aria-hidden="true" />
              <h3 className="angela-h3">Berry Important Donut</h3>
              <p>A jam-packed VIP.</p>
            </article>
            <article className="angela-card" aria-label="Donut Disturb">
              <span className="angela-donut angela-donut-choco" aria-hidden="true" />
              <h3 className="angela-h3">Donut Disturb</h3>
              <p>Double chocolate, do-not-disturb mode.</p>
            </article>
            <article className="angela-card" aria-label="Cereal Killer">
              <span className="angela-donut angela-donut-cereal" aria-hidden="true" />
              <h3 className="angela-h3">Cereal Killer</h3>
              <p>Nostalgic crunch on top.</p>
            </article>
          </div>
        </section>

        {/* My Recommendations */}
        <section className="angela-section" aria-labelledby="my-recommendations-heading">
          <h2 id="my-recommendations-heading" className="angela-h2">🍩 My Recommendations</h2>
          <p className="angela-section-intro">Some treats are too special not to share — these are my personal must-tries for every donut devotee!</p>
          <div className="angela-recos-grid">
            <article className="angela-card angela-reco-card" aria-label="The Morning Glory">
              <span className="angela-badge" aria-hidden="true">Angela’s Pick</span>
              <span className="angela-donut angela-donut-maple" aria-hidden="true" />
              <h3 className="angela-h3">The Morning Glory</h3>
              <p>A warm maple-glazed donut paired with a cold brew — the breakfast of champions.</p>
            </article>
            <article className="angela-card angela-reco-card" aria-label="Choco-Loco Sundae">
              <span className="angela-badge" aria-hidden="true">Angela’s Pick</span>
              <span className="angela-donut angela-donut-choco" aria-hidden="true" />
              <h3 className="angela-h3">Choco-Loco Sundae</h3>
              <p>A scoop of vanilla ice cream nestled between two mini chocolate donuts, drizzled with fudge.</p>
            </article>
            <article className="angela-card angela-reco-card" aria-label="The PB&J Classic">
              <span className="angela-badge" aria-hidden="true">Angela’s Pick</span>
              <span className="angela-donut angela-donut-berry" aria-hidden="true" />
              <h3 className="angela-h3">The PB&J Classic</h3>
              <p>A soft yeast donut filled with raspberry jam and topped with a peanut butter glaze — nostalgia with a twist.</p>
            </article>
            <article className="angela-card angela-reco-card" aria-label="Mini Donut Flights">
              <span className="angela-badge" aria-hidden="true">Angela’s Pick</span>
              <span className="angela-donut angela-donut-sprinkle" aria-hidden="true" />
              <h3 className="angela-h3">Mini Donut Flights</h3>
              <p>Four bite-sized donuts featuring rotating seasonal flavors. Perfect for indecisive sweet tooths.</p>
            </article>
            <article className="angela-card angela-reco-card" aria-label="The Glaze Craze Shake">
              <span className="angela-badge" aria-hidden="true">Angela’s Pick</span>
              <span className="angela-donut angela-donut-glazed" aria-hidden="true" />
              <h3 className="angela-h3">The Glaze Craze Shake</h3>
              <p>A donut-topped milkshake (yes, literally on top) — messy, magical, and 100% worth it.</p>
            </article>
          </div>
        </section>

        {/* Donut of the Month */}
        <section className="angela-section" aria-labelledby="donut-of-month-heading">
          <div className="angela-month-banner">
            <div className="angela-month-image-wrapper">
              <img
                src="/images/donut-of-the-month.svg"
                alt="Whimsical donut illustration: Apple Cider Crumble with pink frosting, sprinkles, and cozy vibes"
                className="angela-month-image"
              />
              <span className="angela-month-badge" aria-hidden="true">Limited Time</span>
            </div>
            <div className="angela-month-content">
              <h2 id="donut-of-month-heading" className="angela-h2">Donut of the Month: Apple Cider Crumble</h2>
              <p>
                Our fall favorite — apple-cider glazed, cinnamon sugar dusted, finished with a buttery crumble. Cozy sweater energy in donut form.
              </p>
              <ul className="angela-list angela-flavor-notes">
                <li>Apple cider glaze</li>
                <li>Cinnamon sugar</li>
                <li>Buttery crumble</li>
              </ul>
              <div className="angela-cta-group">
                <a href="/order" className="angela-btn angela-btn-primary">Pre-Order This Month’s Donut</a>
                <a href="/menu#seasonal" className="angela-btn angela-btn-secondary">See All Seasonal Treats</a>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="angela-section" aria-labelledby="fun-facts-heading">
          <h2 id="fun-facts-heading" className="angela-h2">Fun Facts</h2>
          <ul className="angela-list">
            <li>I can identify 50+ sprinkle types by texture.</li>
            <li>I tried giving up donuts for a week… lasted 4 hours.</li>
            <li>I’m a glaze-half-full kind of person.</li>
          </ul>
        </section>

        {/* Philosophy (Tiny Frosted Hugs) */}
        <section className="angela-section" aria-labelledby="philosophy-heading">
          <h2 id="philosophy-heading" className="angela-h2">Tiny Frosted Hugs</h2>
          <p>
            Every donut is a tiny, frosted hug — crafted to brighten a Tuesday, crown a celebration, or save a rough morning. Sweet Treats is about joy you can hold (and devour).
          </p>
          <p className="angela-closing">The world’s better when you donut take it too seriously.</p>
        </section>

        {/* Footer CTAs */}
        <section className="angela-footer-cta" aria-label="Footer call to actions">
          <div className="angela-cta-group">
            <a id="order" href="#" className="angela-btn angela-btn-primary">Order Now</a>
            <a href="#" className="angela-btn angela-btn-secondary">Catering & Events</a>
            <a id="contact" href="#" className="angela-btn angela-btn-tertiary">Say Hello</a>
          </div>
          <div className="angela-social" aria-label="Social links">
            <a href="#" aria-label="Instagram" className="angela-social-icon" title="Instagram">IG</a>
            <a href="#" aria-label="TikTok" className="angela-social-icon" title="TikTok">TT</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AngelaShenPage;