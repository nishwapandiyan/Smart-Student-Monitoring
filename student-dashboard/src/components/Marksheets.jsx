
import React from 'react';
import { downloadFile, generateMarksheetContent } from '../utils/downloadUtils';

const Marksheets = ({ studentName }) => {
  const marksheets = [
    { sem: 'VI', title: 'Semester VI Marksheet', meta: 'In Progress · SGPA 8.74 (Provisional)', status: 'Provisional', type: 'badge-amber' },
    { sem: 'V', title: 'Semester V Marksheet', meta: 'Completed · SGPA 8.90 · 24 Credits', status: 'Verified', type: 'badge-green' },
    { sem: 'IV', title: 'Semester IV Marksheet', meta: 'Completed · SGPA 8.50 · 24 Credits', status: 'Verified', type: 'badge-green' },
    { sem: 'III', title: 'Semester III Marksheet', meta: 'Completed · SGPA 8.30 · 24 Credits', status: 'Verified', type: 'badge-green' },
  ];

  return (
    <div className="page">
      <div className="page-header" style={{ marginBottom: '28px' }}>
        <h1 className="page-title" style={{ fontSize: '32px', fontFamily: 'Instrument Serif, serif' }}>Semester Marksheets</h1>
        <p className="page-subtitle" style={{ fontSize: '14px', color: 'var(--muted)' }}>Download official marksheets for each semester</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {marksheets.map((m, idx) => (
          <div key={idx} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--blue)', color: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{m.sem}</div>
                <div>
                  <div style={{ fontWeight: '600' }}>{m.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{m.meta}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span className={`badge ${m.type}`}>{m.status}</span>
                <button className="dl-btn dl-btn-primary" 
                   onClick={() => downloadFile(`Marksheet_Sem${m.sem}_${studentName}.txt`, generateMarksheetContent(studentName, m.sem))}
                   style={{ background: 'var(--text)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
                >
                  ⬇ Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marksheets;
