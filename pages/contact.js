'use client';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

export default function Contact() {
  const [state, handleSubmit] = useForm('mkgqvbkr');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div style={{ color:'#fff', fontFamily:'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', background:'#0f0f23', minHeight:'100vh' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '6rem 2rem' }}>
        <a href="/" style={{ color:'#22d3ee', textDecoration:'none' }}>← Back to Home</a>
        <h1 style={{ marginTop:'1rem' }}>Contact</h1>
        <p style={{ color:'#9ca3af' }}>Questions, partnerships, or media? Send us a message below.</p>

        {state.succeeded ? (
          <div style={{ marginTop:'1rem', padding:'1rem', borderRadius:12, border:'1px solid rgba(16,185,129,0.4)', background:'rgba(16,185,129,0.12)' }}>
            Thanks — your message was sent. We’ll reply by email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ marginTop:'1.25rem', display:'grid', gap:'0.75rem' }}>
            <input type="hidden" name="source" value="contact_page" />
            <input type="text" name="_gotcha" style={{ display:'none' }} tabIndex="-1" autoComplete="off" />
            <label>
              <div style={{ marginBottom:4 }}>Name</div>
              <input name="name" value={form.name} onChange={set('name')} required
                style={{ width:'100%', padding:'0.9rem 1rem', background:'#111827', border:'1px solid rgba(147,51,234,0.35)', borderRadius:12, color:'#fff' }} />
            </label>
            <label>
              <div style={{ marginBottom:4 }}>Email</div>
              <input id="email" type="email" name="email" value={form.email} onChange={set('email')} required
                style={{ width:'100%', padding:'0.9rem 1rem', background:'#111827', border:'1px solid rgba(147,51,234,0.35)', borderRadius:12, color:'#fff' }} />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </label>
            <label>
              <div style={{ marginBottom:4 }}>Message</div>
              <textarea name="message" value={form.message} onChange={set('message')} required rows={6}
                style={{ width:'100%', padding:'0.9rem 1rem', background:'#111827', border:'1px solid rgba(147,51,234,0.35)', borderRadius:12, color:'#fff', resize:'vertical' }} />
            </label>
            <button type="submit" disabled={state.submitting}
              style={{ padding:'0.9rem 1.25rem', border:0, borderRadius:12, fontWeight:700,
                       background: state.submitting ? '#555' : 'linear-gradient(135deg, #9333ea, #22d3ee)',
                       color:'#fff', cursor: state.submitting ? 'not-allowed' : 'pointer' }}>
              {state.submitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
