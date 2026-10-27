
import { Link } from 'react-router-dom';
import './CustomerDashboard.css';

const dashboardItems = [
  {
    title: 'My Profile',
    description: 'View and update your personal details.',
    icon: '👤',
    path: '/customer/profile',
  },
  {
    title: 'My Orders',
    description: 'Track your orders and view order history.',
    icon: '📦',
    path: '/customer/orders',
  },
  {
    title: 'My Addresses',
    description: 'Manage your delivery addresses.',
    icon: '📍',
    path: '/customer/addresses',
  },
  {
    title: 'Wishlist',
    description: 'Keep your favourite products in one place.',
    icon: '♡',
    path: '/customer/wishlist',
  },
  {
    title: 'My Cart',
    description: 'Review products before checkout.',
    icon: '🛒',
    path: '/customer/cart',
  },
];

export default function CustomerDashboard() {
  return (
    <main className="customer-dashboard">
      <header className="dashboard-header">
        <Link to="/" className="dashboard-brand">
          <span className="auth-brand-mark">OG</span>
          <span>
            OM GAYATRI TRADERS
            <small> CUSTOMER SPACE</small>
          </span>
        </Link>

        <nav className="dashboard-nav">
          <Link to="/">Visit Website</Link>
          <Link to="/customer/login">Sign Out</Link>
        </nav>
      </header>

      <section className="dashboard-welcome">
        <p className="auth-eyebrow">CUSTOMER DASHBOARD</p>
        <h1>Welcome to your <em>space.</em></h1>
        <p>
          Manage your profile, orders and shopping preferences
          from one place.
        </p>
      </section>

      <section className="dashboard-content">
        <h2>Your Account</h2>

        <div className="dashboard-grid">
          {dashboardItems.map((item) => (
            <Link
              to={item.path}
              className="dashboard-card"
              key={item.title}
            >
              <span className="dashboard-card-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="dashboard-card-link">
                Open section ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="dashboard-footer">
        © {new Date().getFullYear()} OM GAYATRI TRADERS
      </footer>
    </main>
  );
}
