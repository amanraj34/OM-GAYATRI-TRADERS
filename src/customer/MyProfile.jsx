
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './MyProfile.css';

export default function MyProfile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState('');

  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  function stopCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setCameraOpen(false);
  }

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleImageUpload(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setMessage('Please select a valid image file.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage('Image size must be 5 MB or less.');
      event.target.value = '';
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setProfileImage(reader.result);
      setMessage('Profile photo selected. Save it in your profile when ready.');
    };

    reader.readAsDataURL(file);
    event.target.value = '';
  }

  async function openCamera() {
    setCameraError('');

    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraError(
        'Camera is unavailable. Use localhost or HTTPS and check your browser.'
      );
      setCameraOpen(true);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: false,
      });

      streamRef.current = stream;
      setCameraOpen(true);
    } catch {
      setCameraError(
        'Camera access was denied or no camera was found. Allow camera permission in your browser settings.'
      );
      setCameraOpen(true);
    }
  }

  useEffect(() => {
    if (cameraOpen && streamRef.current && videoRef.current) {
      videoRef.current.srcObject = streamRef.current;
      videoRef.current.play().catch(() => {});
    }
  }, [cameraOpen]);

  function takePhoto() {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas || video.videoWidth === 0) {
      setCameraError('Camera is not ready yet. Please try again.');
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    setProfileImage(canvas.toDataURL('image/jpeg', 0.9));
    setMessage('Photo captured. Click Save Changes to confirm your profile.');
    stopCamera();
  }

  function handleSubmit(event) {
    event.preventDefault();
    setEditing(false);
    setMessage(
      'Changes applied in this demo. They will not persist after refresh until storage is connected.'
    );
  }

  return (
    <main className="profile-page">
      <header className="profile-header">
        <Link to="/customer/dashboard" className="profile-back">
          ← Back to Dashboard
        </Link>
        <Link to="/" className="profile-home">
          OM GAYATRI TRADERS
        </Link>
      </header>

      <section className="profile-content">
        <p className="profile-eyebrow">CUSTOMER ACCOUNT</p>
        <h1>My Profile</h1>
        <p className="profile-description">
          Manage your personal details and profile picture.
        </p>

        <div className="profile-card">
          <div className="profile-avatar">
            {profileImage ? (
              <img src={profileImage} alt="Profile preview" />
            ) : profile.name.trim() ? (
              profile.name.trim().charAt(0).toUpperCase()
            ) : (
              '👤'
            )}
          </div>

          <div className="profile-photo-actions">
            <button
              type="button"
              className="profile-edit-button"
              onClick={() => fileInputRef.current?.click()}
            >
              Upload Photo
            </button>

            <button
              type="button"
              className="profile-camera-button"
              onClick={openCamera}
            >
              Open Camera
            </button>

            {profileImage && (
              <button
                type="button"
                className="profile-remove-button"
                onClick={() => {
                  setProfileImage('');
                  setMessage('Profile photo removed from this demo.');
                }}
              >
                Remove Photo
              </button>
            )}

            <input
              ref={fileInputRef}
              className="profile-file-input"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              aria-label="Choose profile picture"
            />
            <p className="profile-photo-hint">
              JPG, PNG or other image format · Maximum 5 MB
            </p>
          </div>

          <h2>{profile.name || 'Your Name'}</h2>
          <p>{profile.email || 'Your email address'}</p>

          <button
            type="button"
            className="profile-edit-button"
            onClick={() => {
              setEditing((previous) => !previous);
              setMessage('');
            }}
          >
            {editing ? 'Cancel Editing' : 'Edit Profile Details'}
          </button>

          {message && <p className="profile-message">{message}</p>}

          {editing && (
            <form className="profile-form" onSubmit={handleSubmit}>
              <label htmlFor="profile-name">Full Name</label>
              <input
                id="profile-name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />

              <label htmlFor="profile-email">Email Address</label>
              <input
                id="profile-email"
                name="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              <label htmlFor="profile-phone">Mobile Number</label>
              <input
                id="profile-phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                value={profile.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                required
              />

              <button type="submit" className="profile-save-button">
                Save Changes
              </button>
            </form>
          )}
        </div>
      </section>

      <canvas ref={canvasRef} className="profile-hidden-canvas" />

      {cameraOpen && (
        <div
          className="camera-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="camera-title"
        >
          <div className="camera-dialog">
            <div className="camera-dialog-header">
              <h2 id="camera-title">Take Profile Photo</h2>
              <button
                type="button"
                className="camera-close"
                onClick={stopCamera}
                aria-label="Close camera"
              >
                ✕
              </button>
            </div>

            {cameraError ? (
              <p className="camera-error">{cameraError}</p>
            ) : (
              <video
                ref={videoRef}
                className="camera-preview"
                autoPlay
                playsInline
                muted
              />
            )}

            <div className="camera-actions">
              {!cameraError && (
                <button
                  type="button"
                  className="profile-save-button"
                  onClick={takePhoto}
                >
                  Capture Photo
                </button>
              )}

              <button
                type="button"
                className="profile-camera-button"
                onClick={stopCamera}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
