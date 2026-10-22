/**
 * ATLAS 2.0 — CONTACT & TRANSMISSION PAGE (/contact)
 * Direct communication channels, instant copy buttons, and
 * a validated Netlify Forms submission pipeline with truthful feedback and fallback.
 */
import { showToast } from '../components/toast.js';

export function renderContactPage() {
  const container = document.createElement('div');
  container.className = 'page-container page-contact';

  container.innerHTML = `
    <header class="page-header">
      <div class="page-badge"><span class="badge-dot"></span>DIRECT TRANSMISSION</div>
      <h1 class="page-title">Initiate Collaboration</h1>
      <p class="page-lead">
        Available for AI systems architecture, 3D WebGL creative engineering, and high-performance
        frontend contracts. Direct communication channels and transmission portal below.
      </p>
    </header>

    <div class="contact-grid">
      <!-- Left Column: Verified Channels & Details -->
      <aside class="contact-channels-column">
        <!-- Verified Channel Cards -->
        <div class="contact-channel-card glass-panel">
          <div class="channel-icon-header">
            <div class="channel-icon">✉️</div>
            <div>
              <span class="channel-label">Primary Electronic Mail</span>
              <div class="channel-val">varanalagesh19@gmail.com</div>
            </div>
          </div>
          <div class="channel-actions">
            <a href="mailto:varanalagesh19@gmail.com" class="btn-primary channel-btn">Open Mail Client &nearr;</a>
            <button id="copy-email-btn" class="btn-secondary channel-btn" title="Copy to clipboard">
              <span id="copy-email-text">Copy Address</span>
            </button>
          </div>
        </div>

        <div class="contact-channel-card glass-panel">
          <div class="channel-icon-header">
            <div class="channel-icon">🐙</div>
            <div>
              <span class="channel-label">GitHub Ecosystem</span>
              <div class="channel-val">@varanalagesh19-dot</div>
            </div>
          </div>
          <div class="channel-actions">
            <a href="https://github.com/varanalagesh19-dot" target="_blank" rel="noopener noreferrer" class="btn-secondary channel-btn">
              View Repositories &nearr;
            </a>
          </div>
        </div>

        <div class="contact-channel-card glass-panel">
          <div class="channel-icon-header">
            <div class="channel-icon">💼</div>
            <div>
              <span class="channel-label">Professional Network</span>
              <div class="channel-val">linkedin.com/in/alagesh023</div>
            </div>
          </div>
          <div class="channel-actions">
            <a href="https://www.linkedin.com/in/alagesh023" target="_blank" rel="noopener noreferrer" class="btn-secondary channel-btn">
              Connect on LinkedIn &nearr;
            </a>
          </div>
        </div>

        <!-- Geographic & Availability Telemetry -->
        <div class="telemetry-box glass-panel">
          <h4>Availability Telemetry</h4>
          <ul class="telemetry-list">
            <li>
              <span class="t-label">Location:</span>
              <span class="t-val">Coimbatore / Chennai, Tamil Nadu, India</span>
            </li>
            <li>
              <span class="t-label">Timezone:</span>
              <span class="t-val">IST (UTC +05:30)</span>
            </li>
            <li>
              <span class="t-label">Status:</span>
              <span class="t-val status-active"><span class="pulse-indicator"></span> Open for Roles &amp; Contracts</span>
            </li>
            <li>
              <span class="t-label">Response Time:</span>
              <span class="t-val">&lt; 24 Hours Guaranteed</span>
            </li>
          </ul>
        </div>
      </aside>

      <!-- Right Column: Transmission Form (Netlify Forms Powered) -->
      <main class="contact-form-column glass-panel">
        <div class="form-header">
          <h2>Transmission Dispatch</h2>
          <p>Send a direct transmission into the ATLAS communications pipeline powered by Netlify Forms.</p>
        </div>

        <form 
          id="contact-form" 
          name="contact" 
          method="POST" 
          action="/" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field" 
          netlify-honeypot="bot-field" 
          class="transmission-form" 
          novalidate
        >
          <!-- Netlify Forms Identifier & Anti-Spam Honeypot -->
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden-honeypot" style="display: none;" aria-hidden="true">
            <label>Don’t fill this out if you're human: <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
          </p>

          <div class="form-group">
            <label for="contact-name" class="form-label">Full Name / Organization *</label>
            <input 
              type="text" 
              id="contact-name" 
              name="name" 
              class="form-input" 
              placeholder="e.g. Dr. Emily Vance / DeepMind Research" 
              required 
            />
            <span class="field-error" id="name-error"></span>
          </div>

          <div class="form-group">
            <label for="contact-email" class="form-label">Return Email Address *</label>
            <input 
              type="email" 
              id="contact-email" 
              name="email" 
              class="form-input" 
              placeholder="e.g. emily@organization.com" 
              required 
            />
            <span class="field-error" id="email-error"></span>
          </div>

          <div class="form-group">
            <label for="contact-subject" class="form-label">Transmission Intent</label>
            <select id="contact-subject" name="subject" class="form-select">
              <option value="AI Systems Architecture">AI Systems Architecture Consultation</option>
              <option value="WebGL & 3D Development">WebGL &amp; 3D Spatial Interface Development</option>
              <option value="Full-Time Engineering Role">Full-Time Engineering Role Inquiry</option>
              <option value="Open Source Collaboration">Open Source Collaboration / Hackathon</option>
              <option value="General Inquiry">General Technical Inquiry</option>
            </select>
          </div>

          <div class="form-group">
            <label for="contact-message" class="form-label">Transmission Payload (Message) *</label>
            <textarea 
              id="contact-message" 
              name="message" 
              class="form-textarea" 
              rows="5" 
              placeholder="Provide architectural requirements, project timeline, or role description..." 
              required
            ></textarea>
            <span class="field-error" id="message-error"></span>
          </div>

          <div class="form-actions">
            <button type="submit" id="submit-transmission-btn" class="btn-primary submit-btn">
              <span id="btn-submit-text">Dispatch Transmission &rarr;</span>
              <span id="btn-submit-spinner" class="spinner" style="display: none;"></span>
            </button>
            <button type="reset" id="reset-form-btn" class="btn-secondary">Clear</button>
          </div>

          <!-- Feedback Status Box -->
          <div id="transmission-status-box" class="transmission-status-box" style="display: none;"></div>
        </form>
      </main>
    </div>
  `;

  setupContactInteractions(container);

  return {
    element: container,
    cleanup: () => {}
  };
}

function setupContactInteractions(container) {
  // Copy Email Button
  const copyBtn = container.querySelector('#copy-email-btn');
  const copyText = container.querySelector('#copy-email-text');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'varanalagesh19@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard', 'success');
        if (copyText) {
          copyText.textContent = 'Address Copied!';
          setTimeout(() => copyText.textContent = 'Copy Address', 2500);
        }
      }).catch(() => {
        showToast('Clipboard access denied', 'error');
      });
    });
  }

  // Form Submission via Netlify Forms
  const form = container.querySelector('#contact-form');
  const nameInput = container.querySelector('#contact-name');
  const emailInput = container.querySelector('#contact-email');
  const subjectInput = container.querySelector('#contact-subject');
  const messageInput = container.querySelector('#contact-message');
  const submitBtn = container.querySelector('#submit-transmission-btn');
  const btnText = container.querySelector('#btn-submit-text');
  const btnSpinner = container.querySelector('#btn-submit-spinner');
  const statusBox = container.querySelector('#transmission-status-box');

  const nameError = container.querySelector('#name-error');
  const emailError = container.querySelector('#email-error');
  const messageError = container.querySelector('#message-error');

  function clearErrors() {
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    nameInput.classList.remove('input-invalid');
    emailInput.classList.remove('input-invalid');
    messageInput.classList.remove('input-invalid');
  }

  function validate() {
    clearErrors();
    let valid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent = 'Please enter your name or organization.';
      nameInput.classList.add('input-invalid');
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Please provide an email address for response.';
      emailInput.classList.add('input-invalid');
      valid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = 'Please provide a valid email format (e.g. name@domain.com).';
      emailInput.classList.add('input-invalid');
      valid = false;
    }

    if (!messageInput.value.trim()) {
      messageError.textContent = 'Please enter a message payload.';
      messageInput.classList.add('input-invalid');
      valid = false;
    } else if (messageInput.value.trim().length < 10) {
      messageError.textContent = 'Message is too brief. Please provide at least 10 characters.';
      messageInput.classList.add('input-invalid');
      valid = false;
    }

    return valid;
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // 1. Anti-spam honeypot check: quietly discard if filled
      const botField = form.querySelector('[name="bot-field"]');
      if (botField && botField.value.trim() !== '') {
        return;
      }

      // 2. Client-side input validation
      if (!validate()) {
        showToast('Please correct form validation errors', 'error');
        return;
      }

      // 3. UI Loading State
      submitBtn.disabled = true;
      btnText.textContent = 'Dispatching Transmission...';
      btnSpinner.style.display = 'inline-block';
      statusBox.style.display = 'none';

      // 4. Capture fields before dispatch
      const enteredName = nameInput.value.trim();
      const enteredEmail = emailInput.value.trim();
      const enteredSubject = subjectInput.value;
      const enteredMessage = messageInput.value.trim();

      // 5. Construct URL-encoded payload for Netlify Forms
      const formData = new FormData(form);
      if (!formData.has('form-name')) {
        formData.append('form-name', 'contact');
      }
      const urlEncodedBody = new URLSearchParams(formData).toString();

      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: urlEncodedBody
        });

        if (response.ok) {
          // Success: Netlify endpoint acknowledged receipt
          statusBox.style.display = 'block';
          statusBox.className = 'transmission-status-box success glass-panel';
          statusBox.innerHTML = `
            <h4>✓ Transmission Delivered to Netlify Dispatch</h4>
            <p>
              Your message was received by the portfolio communications pipeline.
              I review incoming messages regularly and will respond to <strong>${escapeHtml(enteredEmail)}</strong> within 24 hours.
            </p>
          `;

          showToast('Transmission submitted successfully!', 'success');
          form.reset();
          clearErrors();
        } else {
          throw new Error(`Endpoint returned status ${response.status} (${response.statusText || 'Error'})`);
        }
      } catch (err) {
        // Error / Offline / Network failure:
        // IMPORTANT: Inputs are PRESERVED so user does not lose their typed message
        const mailtoHref = `mailto:varanalagesh19@gmail.com?subject=${encodeURIComponent(enteredSubject + ' from ' + enteredName)}&body=${encodeURIComponent('From: ' + enteredName + ' <' + enteredEmail + '>\n\n' + enteredMessage)}`;

        statusBox.style.display = 'block';
        statusBox.className = 'transmission-status-box error glass-panel';
        statusBox.innerHTML = `
          <h4>⚠️ Transmission Delivery Unreachable</h4>
          <p>
            The transmission could not be delivered to the submission endpoint (${escapeHtml(err.message || 'Network error')}).
            <strong>Your entered message has been preserved below.</strong>
          </p>
          <p style="margin-top: 0.75rem;">
            You can send this exact message directly via your email client using the pre-filled link below:
          </p>
          <div style="margin-top: 1rem;">
            <a href="${mailtoHref}" class="btn-primary" style="display: inline-block;">
              Open in Direct Mail Client &nearr;
            </a>
          </div>
        `;

        showToast('Submission failed. Direct email fallback available.', 'error');
      } finally {
        submitBtn.disabled = false;
        btnText.textContent = 'Dispatch Transmission →';
        btnSpinner.style.display = 'none';
      }
    });
  }
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>"']/g, (m) => {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#039;';
      default: return m;
    }
  });
}
