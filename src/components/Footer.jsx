
import { Link } from 'react-router-dom';
import './Footer.css';

const shopAddress =
  'Akauni Road, Rapura, Daudnagar, Aurangabad, Bihar, 824113';

const whatsappNumber = '919572167082';


const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('2F68+9FV, Repura, Bihar 824113');

<a
  className="og-footer-directions"
  href={mapsUrl}
  target="_blank"
  rel="noopener noreferrer"
>
  📍 View Shop on Google Maps ↗
</a>


const enquiryMessage =
  'Hello OM GAYATRI TRADERS, I would like to enquire about your products.';

const whatsappUrl =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiryMessage)}`;

export default function Footer() {
  return (
    <footer className="og-footer" id="contact">
      <div className="og-footer-main">

        {/* Shop information */}
        <div className="og-footer-brand">
          <Link to="/" className="og-footer-logo">
            <span className="og-footer-mark">OG</span>

            <span>
              OM GAYATRI TRADERS
              <small>BUILD YOUR DREAM</small>
            </span>
          </Link>

          <p>
            Your trusted destination for construction materials,
            hardware and home-building essentials.
          </p>

          <a
            className="og-footer-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on WhatsApp ↗
          </a>
        </div>

        {/* Quick links */}
        <div className="og-footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <a href="/#collections">Collections</a>
          <a href="/#about">About Us</a>
          <Link to="/customer/login">Customer Login</Link>
          <Link to="/owner/login">Shop Owner Login</Link>
        </div>

        {/* Contact details */}
        <div className="og-footer-column">
          <h3>Contact Us</h3>

          <a href="tel:+919572167082">☎ Call Us</a>

          <a href="mailto:amanraj06560a@gmail.com">
            ✉ Email Us
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <a
            href="https://www.instagram.com/aman_raj_34/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/aman-raj-652009361/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        {/* Shop location */}
        <div className="og-footer-column og-footer-visit">
          <h3>Visit Us</h3>

          <p>{shopAddress}</p>

          <p>
            <strong>Opening Hours</strong>
          </p>

          <p>Daily: 7:00 AM – 6:30 PM</p>

          <a
            className="og-footer-directions"
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 View Shop on Google Maps ↗
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="og-footer-bottom">
        <p>
          © {new Date().getFullYear()} OM GAYATRI TRADERS.
          All rights reserved.
        </p>

        <p>Building Trust · Creating Homes</p>
      </div>
    </footer>
  );
}
