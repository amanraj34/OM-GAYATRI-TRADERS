
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShopOwnerLogin.css';

export default function ShopOwnerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    alert(
      'Shop Owner Login UI is ready. Owner authentication will be connected to the backend later.'
    );
  }

  return (
    <main className="auth-page">
      <section className="auth-visual">
        <Link to="/" className="auth-brand">
          <span className="auth-brand-mark">OG</span>
          <span>
            OM GAYATRI TRADERS
            <small>BUILD YOUR DREAM</small>
          </span>
        </Link>

        <div className="auth-visual-copy">
          <p className="auth-eyebrow">OWNER WORKSPACE</p>
          <h1>
            Your business, <em>under control.</em>
          </h1>
          <p>
            Manage your products, orders, customers and inventory
            from one organised workspace.
          </p>
        </div>

        <span className="auth-visual-footer">
          MANAGE SMARTER · GROW STRONGER
        </span>
      </section>

      <section className="auth-panel">
        <Link to="/" className="auth-back">
          ← Back to website
        </Link>

        <div className="auth-form-wrap">
          <p className="auth-eyebrow">SHOP OWNER ACCESS</p>
          <h2>Owner sign in</h2>
          <p className="auth-subtitle">
            Sign in to manage your store.
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="owner-email">Business email</label>
            <input
              id="owner-email"
              type="email"
              placeholder="owner@example.com"
              autoComplete="username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="owner-password">Password</label>
            <input
              id="owner-password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <button
              type="button"
              className="auth-text-button"
              onClick={() =>
                alert('Password reset will be enabled after backend integration.')
              }
            >
              Forgot password?
            </button>

            <button type="submit" className="auth-submit">
              Sign In to Dashboard <span>↗</span>
            </button>
          </form>

          <p className="auth-security">
            Authorised shop owners only.
          </p>
        </div>
      </section>
    </main>
  );
}
