
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CustomerSignup.css';

export default function CustomerSignup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match. Please check again.');
      return;
    }

    alert(
      'Signup form is ready. Account creation will work after backend integration.'
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
          <p className="auth-eyebrow">JOIN OUR COMMUNITY</p>
          <h1>
            Start building your <em>dream home.</em>
          </h1>
          <p>
            Create your account to explore our products and keep your
            home-building journey organised.
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
          <h2>Create account</h2>
          <p className="auth-subtitle">
            Enter your details to get started.
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="signup-name">Full name</label>
            <input
              id="signup-name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="signup-email">Email address</label>
            <input
              id="signup-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="signup-phone">Mobile number</label>
            <input
              id="signup-phone"
              name="phone"
              type="tel"
              placeholder="10-digit mobile number"
              inputMode="numeric"
              pattern="[0-9]{10}"
              maxLength={10}
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              name="password"
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
              minLength={8}
              value={form.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="signup-confirm-password">
              Confirm password
            </label>
            <input
              id="signup-confirm-password"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              autoComplete="new-password"
              minLength={8}
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit" className="auth-submit">
              Create Account <span>↗</span>
            </button>
          </form>

          <p className="auth-switch">
            Already have an account?{' '}
            <Link to="/customer/login">Sign in</Link>
          </p>

          <p className="auth-security">
            Your account security matters to us.
          </p>
        </div>
      </section>
    </main>
  );
}
