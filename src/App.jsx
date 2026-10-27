
import Footer from './components/Footer.jsx';
import { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import CustomerLogin from './pages/CustomerLogin.jsx';
import CustomerSignup from './pages/CustomerSignup.jsx';
import ShopOwnerLogin from './pages/ShopOwnerLogin.jsx';
import CustomerDashboard from './customer/CustomerDashboard.jsx';
import MyProfile from './customer/MyProfile.jsx';
import './App.css';

const slides = [
  { type: 'video', src: '/assets/videos/Dalmia1.mp4', eyebrow: 'A STRONGER FOUNDATION', title: 'Build your dream home.', description: 'Building materials for every stage of your home.', button: 'Explore Cement', target: '#collections' },
  { type: 'image', src: '/assets/images/hero-home.png', eyebrow: 'DESIGNED FOR BETTER LIVING', title: 'A home worth coming home to.', description: 'Thoughtfully selected materials for beautiful spaces.', button: 'Discover More', target: '#collections' },
  { type: 'video', src: '/assets/videos/Dalmia11.mp4', eyebrow: 'MADE FOR YOUR BUILDING JOURNEY', title: 'Every home starts somewhere.', description: 'Find the essentials for your next construction project.', button: 'Explore Materials', target: '#collections' },
  { type: 'video', src: '/assets/videos/Hardware2.mp4', eyebrow: 'DETAILS THAT MAKE A DIFFERENCE', title: 'Bring your spaces to life.', description: 'Explore fittings and finishing touches for your home.', button: 'Explore Fittings', target: '#collections' },
  { type: 'video', src: '/assets/videos/Hardware3.mp4', eyebrow: 'CRAFTED FOR EVERYDAY COMFORT', title: 'A better kind of everyday.', description: 'Discover products that bring comfort and style together.', button: 'Explore Products', target: '#collections' },
  { type: 'video', src: '/assets/videos/Hardware4.mp4', eyebrow: 'YOUR HOME, YOUR STYLE', title: 'Make room for beautiful.', description: 'From essential materials to the finishing details.', button: 'View Collections', target: '#collections' },
  { type: 'video', src: '/assets/videos/Hardware5.mp4', eyebrow: 'THE FINISHING TOUCH', title: 'Details define your home.', description: 'Find inspiration for your next home improvement.', button: 'Get Inspired', target: '#inspiration' },
  { type: 'image', src: '/assets/images/Dalmia111.png', eyebrow: 'OM GAYATRI TRADERS', title: 'Everything for your dream home.', description: 'Building materials, sanitaryware and fittings for your project.', button: 'Explore Our Range', target: '#collections' },
];

const categories = [
  { title: 'Cement', detail: 'Strong foundations for the home you dream of.', icon: '▤', media: '/assets/videos/Dalmia1.mp4', type: 'video', productKey: 'cement' },
  { title: 'Rod & Steel', detail: 'Strength you can build your future on.', icon: '▥', media: '/assets/images/hero-home.png', type: 'image', productKey: 'rods' },
  { title: 'Gitti & Stone', detail: 'The dependable base for lasting construction.', icon: '◇', media: '/assets/images/Dalmia111.png', type: 'image', productKey: null },
  { title: 'Pipes', detail: 'Reliable flow for everyday water needs.', icon: '◎', media: '/assets/videos/Hardware2.mp4', type: 'video', productKey: 'pipes' },
  { title: 'Motors', detail: 'Practical power for everyday water needs.', icon: '⚙', media: '/assets/videos/Hardware3.mp4', type: 'video', productKey: 'motors' },
  { title: 'Taps', detail: 'Small details that elevate your bathroom.', icon: '♧', media: '/assets/videos/Hardware4.mp4', type: 'video', productKey: 'taps' },
  { title: 'Showers', detail: 'A refreshing touch for your daily routine.', icon: '♨', media: '/assets/videos/Hardware5.mp4', type: 'video', productKey: 'showers' },
  { title: 'Commode', detail: 'Everyday comfort with a clean, modern finish.', icon: '◇', media: '/assets/images/hero-home.png', type: 'image', productKey: 'commode' },
  { title: 'Paints', detail: 'Add colour, character and warmth to your space.', icon: '▧', media: '/assets/images/hero-home.png', type: 'image', productKey: 'paints' },
  { title: 'Machines & Others', detail: 'Useful tools and essentials for your project.', icon: '✳', media: '/assets/images/Dalmia111.png', type: 'image', productKey: null },
];

const makeProducts = (folder, files, titles, quotes) => ({
  folder,
  items: files.map((file, i) => ({
    file,
    title: titles[i],
    quote: quotes[i],
  })),
});

const productCollections = {
  cement: makeProducts(
    'cement%20zip',
    Array.from({ length: 14 }, (_, i) => `cement${String(i + 1).padStart(2, '0')}.jpg`),
    ['A Strong Start', 'Built on Strength', 'Foundation Essential', 'Ready for the Next Stage', 'Strength in Every Layer', 'Made for Solid Work', 'For Walls That Last', 'A Reliable Foundation', 'Everyday Construction Essential', 'Made for Your Build', 'A Stronger Tomorrow', 'Dependable Building Choice', 'For Projects Big and Small', 'Start with Confidence'],
    ['Every lasting home begins with a strong foundation.', 'Choose dependable materials for the work that matters.', 'Strength today helps build confidence for tomorrow.', 'The right materials make every stage count.', 'A solid choice for your construction journey.', 'Build carefully. Build with confidence.', 'Strong walls begin with thoughtful choices.', 'Dependability belongs at the heart of every build.', 'The essentials that help bring plans to life.', 'Make every layer part of a stronger home.', 'Good building starts with trusted essentials.', 'A practical choice for everyday construction needs.', 'From small repairs to bigger dreams.', 'Begin your project with confidence.']
  ),

  commode: makeProducts(
    'commode%20zip',
    Array.from({ length: 8 }, (_, i) => `com${String(i + 1).padStart(2, '0')}.jpg`),
    ['Modern Bathroom Comfort', 'A Clean, Classic Look', 'Everyday Ease', 'Simple, Timeless Style', 'Comfort for Your Space', 'Designed for Daily Living', 'A Fresh Bathroom Feel', 'Finishing Touches That Matter'],
    ['Bring comfort and a clean look to your everyday routine.', 'Classic style that feels at home in any bathroom.', 'Thoughtful essentials for daily comfort.', 'Simple design can make a space feel complete.', 'Choose a finish that suits your home.', 'Everyday function, considered style.', 'Make your bathroom feel fresh and welcoming.', 'The right details bring the whole space together.']
  ),

  motors: makeProducts(
    'moters%20zip',
    ['moters01.png', 'moters02.webp', 'moters03.jpg', 'moters04.jpg', 'moters05.jpg', 'moters06.jpg', 'moters07.webp', 'moters08.jpg', 'moters09.jpg'],
    ['Everyday Water Support', 'Power for Your Needs', 'A Practical Choice', 'Made for Daily Use', 'Project Essential', 'Powering Everyday Tasks', 'A Dependable Addition', 'Useful by Design', 'The Right Fit'],
    ['Choose practical equipment to support your daily water needs.', 'Reliable performance starts with the right selection.', 'Find useful solutions for home and project requirements.', 'The right equipment helps keep everyday tasks moving.', 'Consider your space and needs before choosing your equipment.', 'Practical choices for homes and worksites.', 'Find equipment that fits your everyday requirements.', 'Make your selection with your project in mind.', 'Explore options for your home and building needs.']
  ),

  paints: makeProducts(
    'paints%20zip',
    Array.from({ length: 8 }, (_, i) => `paints${String(i + 1).padStart(2, '0')}.jpg`),
    ['Colour Your World', 'A Fresh New Look', 'Bring Walls to Life', 'A Finish That Feels Right', 'Add Character', 'Make Space Feel New', 'Your Home, Your Colours', 'The Final Touch'],
    ['Colour can change the feeling of an entire room.', 'Give your space a fresh and welcoming look.', 'Let your walls reflect your style.', 'Choose a finish that feels right for your home.', 'Little details can add plenty of character.', 'A new coat can bring new life to a space.', 'Create a look that feels like you.', 'Finish your space with a touch of colour.']
  ),

  pipes: makeProducts(
    'pipe%20zip',
    ['pipe01.jpg', 'pipe02.jpg', 'pipe03.mp4', 'pipe04.mp4', 'pipe05.jpg', 'pipe06.webp', 'pipe07.jpg', 'pipe08.jpg'],
    ['Everyday Plumbing Essential', 'Built for Water Flow', 'See It in Action', 'Product in Motion', 'A Practical Plumbing Choice', 'For Your Project', 'Reliable Connections', 'Plumbing Made Practical'],
    ['Dependable plumbing starts with choosing the right components.', 'Plan your plumbing with the needs of your space in mind.', 'A closer look at products for your plumbing project.', 'Explore practical solutions for water-flow requirements.', 'The right fittings help bring a plumbing plan together.', 'Explore options for repairs, upgrades and new builds.', 'Thoughtful selection matters behind every finished wall.', 'Find useful essentials for everyday plumbing needs.']
  ),

  rods: makeProducts(
    'rod%20zip',
    Array.from({ length: 11 }, (_, i) => `rod${i + 1}.jpg`),
    ['Strength for the Structure', 'Build with Confidence', 'A Stronger Framework', 'For Structural Essentials', 'Strength Behind the Walls', 'Made for the Build', 'The Backbone of Construction', 'Solid Project Planning', 'Strength That Supports', 'For Your Construction Needs', 'Build a Strong Tomorrow'],
    ['A strong structure begins with careful material selection.', 'Choose construction essentials with your project in mind.', 'The framework matters as much as the finish.', 'Plan each stage with dependable structural materials.', 'Strong work starts with the essentials you choose.', 'Build with care from the very beginning.', 'Support your construction plans with the right materials.', 'Good preparation helps every project move forward.', 'Strength is an essential part of every build.', 'Explore materials for your construction requirements.', 'Make your next building project a confident step forward.']
  ),

  showers: makeProducts(
    'showers%20zip',
    ['showers01.jpg', 'showers02.jpg', 'showers03.jpg', 'showers04.jpg', 'showers05.jpg', 'showers06.jpg', 'showers07.jpg', 'showers08.jpeg', 'showers09.jpeg', 'showers10.jpeg', 'showers11.jpg'],
    ['A Refreshing Everyday', 'Comfort in Every Drop', 'A Bathroom Upgrade', 'A Modern Shower Experience', 'Make Your Routine Special', 'Style Meets Comfort', 'A Better Daily Ritual', 'A Touch of Refreshment', 'Refresh Your Space', 'Designed for Your Routine', 'Finish with Comfort'],
    ['Make your daily routine feel a little more refreshing.', 'Small details can make everyday moments feel special.', 'Give your bathroom a considered, modern touch.', 'Choose a style that complements your bathroom.', 'A refreshing space begins with thoughtful choices.', 'Bring comfort and style together in your bathroom.', 'Turn an everyday routine into a moment to enjoy.', 'A little refresh can change the feel of your space.', 'Explore options for your bathroom upgrade.', 'Make the details work for your daily routine.', 'Complete your bathroom with a comfortable finishing touch.']
  ),

  taps: makeProducts(
    'tap%20and%20basin%20zip',
    [
      'tap01.jpg', 'tap02.jpg', 'tap03.jpg', 'tap04.jpg', 'tap05.jpg',
      'tap06.jpg', 'tap07.jpg', 'tap08.jpg', 'tap10.jpg', 'tap11.jpg',
      'tap12.jpg', 'tap13.jpg', 'tap14.jpg',
    ],
    [
      'A Stylish Finishing Touch', 'Everyday Elegance', 'Details That Shine',
      'A Modern Essential', 'Simple and Refined', 'Designed for Daily Use',
      'A Fresh Bathroom Detail', 'A Clean, Contemporary Look',
      'Style at the Sink', 'Bring Your Bathroom Together',
      'A Touch of Everyday Luxury', 'Made for Your Space',
      'The Finishing Detail',
    ],
    [
      'The right tap can bring the whole basin area together.',
      'Add a refined touch to an everyday essential.',
      'Small details can make a noticeable difference.',
      'A practical detail with a style of its own.',
      'Clean lines can help create a timeless look.',
      'Choose a design that suits your daily needs.',
      'Refresh your basin area with a considered detail.',
      'A contemporary touch for your bathroom.',
      'Make the sink area feel complete.',
      'Coordinate the details for a balanced look.',
      'Bring a premium feel to everyday moments.',
      'Explore styles that suit your bathroom.',
      'Finish your space with a detail you will notice.',
    ]
  ),
};

function HomePage() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const current = slides[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((previous) => (previous + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  function openCategory(category) {
    setSelectedCategory(category);
    window.setTimeout(() => {
      document.getElementById('product-page')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 50);
  }

  function closeCategory() {
    setSelectedCategory(null);
    document.getElementById('collections')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  const selectedProducts = selectedCategory?.productKey
    ? productCollections[selectedCategory.productKey]
    : null;

  return (
    <main>
      <div className="announcement">
        <span>BUILDING MATERIALS · SANITARYWARE · HOME FINISHES</span>
        <a href="#contact">Have a project? Talk to us ↗</a>
      </div>

      <header className="navbar">
        <a className="brand" href="#home" aria-label="OM Gayatri Traders home">
          <span className="brand-mark">OG</span>
          <span className="brand-name">
            OM GAYATRI
            <small>TRADERS · BUILD YOUR DREAM</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
          <a href="#inspiration" onClick={() => setMenuOpen(false)}>Inspiration</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>

          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Enquire Now ↗
          </a>

          <Link
            className="nav-contact account-nav"
            to="/customer/login"
            onClick={() => setMenuOpen(false)}
          >
            Customer
          </Link>

          <Link
            className="nav-contact account-nav"
            to="/owner/login"
            onClick={() => setMenuOpen(false)}
          >
            Shop Owner
          </Link>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-media" key={current.src}>
          {current.type === 'video' ? (
            <video
              className="hero-asset"
              src={current.src}
              autoPlay
              muted
              playsInline
              loop
              preload="metadata"
              poster="/assets/images/hero-home.png"
            />
          ) : (
            <img
              className="hero-asset"
              src={current.src}
              alt="Home and construction design inspiration"
              fetchPriority="high"
            />
          )}
        </div>

        <div className="hero-shade" />

        <div className="hero-content" key={`copy-${active}`}>
          <p className="hero-eyebrow"><span /> {current.eyebrow}</p>
          <h1>{current.title}</h1>
          <p className="hero-description">{current.description}</p>

          <div className="hero-actions">
            <a className="primary-btn" href={current.target}>
              {current.button} <span>↗</span>
            </a>
            <a className="secondary-btn" href="#contact">Speak to our team</a>
          </div>
        </div>

        <div className="hero-footer">
          <span className="slide-count">
            {String(active + 1).padStart(2, '0')}{' '}
            <i>/ {String(slides.length).padStart(2, '0')}</i>
          </span>

          <div className="slide-dots" aria-label="Choose featured slide">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                className={index === active ? 'slide-dot active' : 'slide-dot'}
                onClick={() => setActive(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === active ? 'true' : undefined}
              />
            ))}
          </div>

          <button
            className="pause-btn"
            onClick={() => setActive((previous) => (previous + 1) % slides.length)}
            aria-label="Go to next slide"
          >
            NEXT ↗
          </button>
        </div>
      </section>

      <section className="trust-strip" aria-label="Our product range">
        <a href="#collections"><span>✳</span> Building Essentials</a>
        <a href="#collections"><span>✳</span> Bathroom & Plumbing</a>
        <a href="#collections"><span>✳</span> Home Finishes</a>
        <a href="#contact"><span>✳</span> Personalised Enquiries</a>
      </section>

      <section className="collections section-wrap" id="collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow-dark">EXPLORE OUR COLLECTIONS</p>
            <h2>Everything your home <em>needs.</em></h2>
          </div>
          <p>
            From the first stage of construction to the final finishing
            touches, explore materials for your home-building journey.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <button
              className="category-card"
              key={category.title}
              onClick={() => openCategory(category)}
              aria-label={`Explore ${category.title}`}
            >
              {category.type === 'video' ? (
                <video
                  className="category-media"
                  src={category.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                />
              ) : (
                <img
                  className="category-media"
                  src={category.media}
                  alt=""
                  loading="lazy"
                />
              )}

              <span className="category-overlay" />
              <span className="category-top">
                <span className="category-number">{category.icon}</span>
                <span className="category-arrow">↗</span>
              </span>
              <span className="category-title">{category.title}</span>
              <span className="category-description">{category.detail}</span>
              <span className="category-explore">Explore Collection ↗</span>
            </button>
          ))}
        </div>
      </section>

      {selectedCategory && (
        <section className="product-page" id="product-page">
          <button className="back-button" onClick={closeCategory}>
            ← Back to collections
          </button>

          <p className="eyebrow-dark">OM GAYATRI TRADERS · COLLECTION</p>
          <h2>{selectedCategory.title}</h2>
          <p>{selectedCategory.detail}</p>

          {selectedProducts ? (
            <div className="product-grid">
              {selectedProducts.items.map((product, index) => {
                const mediaSrc = `/assets/images/${selectedProducts.folder}/${product.file}`;
                const isVideo = /\.(mp4|webm|ogg)$/i.test(product.file);

                return (
                  <article className="product-card" key={product.file}>
                    <div className="product-image-wrap">
                      {isVideo ? (
                        <video
                          className="product-image"
                          src={mediaSrc}
                          muted
                          loop
                          playsInline
                          controls
                          preload="metadata"
                        />
                      ) : (
                        <img
                          className="product-image"
                          src={mediaSrc}
                          alt={`${selectedCategory.title} — ${product.title}`}
                          loading="lazy"
                        />
                      )}
                      <span className="product-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="product-card-copy">
                      <p className="product-kicker">
                        {selectedCategory.title} · COLLECTION
                      </p>
                      <h3>{product.title}</h3>
                      <p className="product-quote">{product.quote}</p>
                      <a
                        href={`mailto:amanraj06560a@gmail.com?subject=${encodeURIComponent(`Enquiry about ${selectedCategory.title}: ${product.title}`)}`}
                      >
                        Enquire about this item ↗
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="product-empty">
              <h3>Let’s find the right materials for your project</h3>
              <p>
                Tell us what you need for this category. Our team can help you
                explore suitable options for your home or construction project.
              </p>
              <a href="#contact">Ask about this category ↗</a>
            </div>
          )}
        </section>
      )}

      <section className="inspiration" id="inspiration">
        <div className="inspiration-copy">
          <p className="eyebrow">A LITTLE INSPIRATION</p>
          <h2>Imagine it.<br /><em>Build it.</em></h2>
          <p>
            The right materials help turn an idea into a place you love.
            Let’s make your next project a little more special.
          </p>
          <a className="primary-btn" href="#contact">Plan Your Project ↗</a>
        </div>

        <div className="inspiration-image">
          <img
            src="/assets/images/hero-home.png"
            alt="Modern home exterior with warm architectural lighting"
            loading="lazy"
          />
        </div>
      </section>

      <section className="about section-wrap" id="about">
        <p className="eyebrow-dark">YOUR HOME-BUILDING PARTNER</p>
        <h2>Good spaces start with<br /><em>the right choices.</em></h2>
        <p>
          Tell us what you are building. We’ll help you explore the materials
          and product categories that suit your project.
        </p>
        <a className="primary-btn" href="#contact">Let’s Talk ↗</a>
      </section>

      {/* New footer with contact details and shop location */}
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/customer/login" element={<CustomerLogin />} />
      <Route path="/customer/signup" element={<CustomerSignup />} />
      <Route path="/customer/dashboard" element={<CustomerDashboard />} />
      <Route path="/customer/profile" element={<MyProfile />} />
      <Route path="/owner/login" element={<ShopOwnerLogin />} />
    </Routes>
  );
}

export default App;
