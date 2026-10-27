
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CustomerLogin.css';

export default function CustomerLogin() {
  const [method, setMethod] = useState('email');

  function handleSubmit(event) {
    event.preventDefault();

    alert(
      'Customer Login UI is ready. Real authentication will be connected to the backend later.'
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
          <p className="auth-eyebrow">WELCOME TO YOUR SPACE</p>
          <h1>
            Your home journey, <em>all in one place.</em>
          </h1>
          <p>
            Explore products, manage your orders and keep your
            home-building plans organised.
          </p>
        </div>

        <span className="auth-visual-footer">
          BUILDING TRUST · CREATING HOMES
        </span>
      </section>

      <section className="auth-panel">
        <Link to="/" className="auth-back">
          ← Back to website
        </Link>

        <div className="auth-form-wrap">
          <p className="auth-eyebrow">CUSTOMER ACCOUNT</p>
          <h2>Welcome back</h2>
          <p className="auth-subtitle">
            Sign in to continue to your account.
          </p>

          <div className="auth-methods">
            <button
              type="button"
              className={method === 'email' ? 'selected' : ''}
              onClick={() => setMethod('email')}
            >
              Email &amp; Password
            </button>

            <button
              type="button"
              className={method === 'phone' ? 'selected' : ''}
              onClick={() => setMethod('phone')}
            >
              Phone OTP
            </button>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {method === 'email' ? (
              <>
                <label htmlFor="customer-email">
                  Email address
                </label>
                <input
                  id="customer-email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />

                <label htmlFor="customer-password">
                  Password
                </label>
                <input
                  id="customer-password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="auth-text-button"
                  onClick={() =>
                    alert('Password reset will be enabled with backend integration.')
                  }
                >
                  Forgot password?
                </button>
              </>
            ) : (
              <>
                <label htmlFor="customer-phone">
                  Mobile number
                </label>
                <input
                  id="customer-phone"
                  type="tel"
                  placeholder="Enter your 10-digit mobile number"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                />

                <p className="auth-note">
                  OTP verification will be enabled after backend integration.
                </p>
              </>
            )}

            <button type="submit" className="auth-submit">
              {method === 'email' ? 'Sign In' : 'Continue with Phone'}
              <span>↗</span>
            </button>
          </form>

          <p className="auth-switch">
            New to OM Gayatri Traders?{' '}
            <Link to="/customer/signup">
              Create an account
            </Link>
          </p>

          <p className="auth-security">
            Your account security matters to us.
          </p>
        </div>
      </section>
    </main>
  );
}
