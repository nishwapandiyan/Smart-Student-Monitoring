
import React from 'react';
import { downloadFile, generateCertificateContent } from '../utils/downloadUtils';

const Certificates = ({ studentName }) => {
  const certs = [
    { title: 'Bonafide Certificate', icon: '🏆', meta: 'Principal\'s Office · March 2024' },
    { title: 'Consolidated Marksheet', icon: '📊', meta: 'Sem I to V · Issued: Jan 2024' },
    { title: 'Merit Certificate — Sem V', icon: '🎖️', meta: 'SGPA 8.90 · Top 10% of batch' },
    { title: 'Hackathon Participation', icon: '🏅', meta: 'Smart India Hackathon · Sep 2023' },
    { title: 'NPTEL Online Course', icon: '📜', meta: 'Machine Learning · IIT Madras' },
    { title: 'Best Project Award', icon: '🥇', meta: 'Dept. of CSE · Feb 2024' },
  ];

  return (
    <div className="page">
      <div className="page-header" style={{ marginBottom: '28px' }}>
        <h1 className="page-title" style={{ fontSize: '32px', fontFamily: 'Instrument Serif, serif' }}>Certificates & Awards</h1>
        <p className="page-subtitle" style={{ fontSize: '14px', color: 'var(--muted)' }}>All your achievements in one place</p>
      </div>
      <div className="grid3 gap">
        {certs.map((cert, idx) => (
          <div key={idx} className="cert-card" style={{ 
            background: 'linear-gradient(135deg, #1a1814 0%, #2d2820 100%)',
            color: 'white',
            padding: '28px',
            borderRadius: 'var(--radius)',
            border: '1px solid rgba(200,168,75,0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="cert-icon" style={{ fontSize: '28px', marginBottom: '16px' }}>{cert.icon}</div>
            <h3 className="cert-title" style={{ color: 'var(--accent2)', marginBottom: '8px' }}>{cert.title}</h3>
            <p className="cert-meta" style={{ fontSize: '12px', opacity: 0.6, marginBottom: '20px' }}>{cert.meta}</p>
            <button className="cert-btn" 
              onClick={() => downloadFile(`${cert.title.replace(/\s+/g, '_')}_${studentName}.txt`, generateCertificateContent(studentName, cert.title))}
              style={{ background: 'var(--accent2)', color: 'var(--text)', border: 'none', padding: '10px 18px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
            >
              ⬇ Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
