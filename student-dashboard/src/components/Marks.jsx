
import React, { useState } from 'react';
import { downloadFile, generateMarksheetContent } from '../utils/downloadUtils';

const Marks = ({ studentName }) => {
  const [activeSem, setActiveSem] = useState('sem6');
  const sems = [
    { id: 'sem6', label: 'Semester VI' },
    { id: 'sem5', label: 'Semester V' },
    { id: 'sem4', label: 'Semester IV' },
    { id: 'sem3', label: 'Semester III' },
    { id: 'sem2', label: 'Semester II' },
    { id: 'sem1', label: 'Semester I' },
  ];

  return (
    <div className="page">
      <div className="page-header" style={{ marginBottom: '28px' }}>
        <h1 className="page-title" style={{ fontSize: '32px', fontFamily: 'Instrument Serif, serif' }}>Marks & Grades</h1>
        <p className="page-subtitle" style={{ fontSize: '14px', color: 'var(--muted)' }}>Internal assessments, semester exams, and final grades</p>
      </div>

      <div className="tabs" style={{ display: 'flex', gap: '4px', background: 'var(--card2)', borderRadius: '10px', padding: '4px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {sems.map(sem => (
          <div 
            key={sem.id} 
            className={`tab ${activeSem === sem.id ? 'active' : ''}`} 
            onClick={() => setActiveSem(sem.id)}
            style={{ 
              padding: '8px 18px', 
              borderRadius: '8px', 
              cursor: 'pointer', 
              fontSize: '13px', 
              fontWeight: '500', 
              color: activeSem === sem.id ? 'var(--text)' : 'var(--muted)',
              background: activeSem === sem.id ? 'var(--card)' : 'transparent',
              boxShadow: activeSem === sem.id ? '0 1px 4px rgba(0,0,0,0.08)' : 'none'
            }}
          >
            {sem.label}
          </div>
        ))}
      </div>

      {activeSem === 'sem6' && (
        <div className="tab-content active">
          <div className="grid4 gap" style={{ marginBottom: '20px' }}>
            <div className="stat-card"><div className="stat-label">Semester GPA</div><div className="stat-num">8.74</div></div>
            <div className="stat-card accent-green" style={{ background: 'var(--accent)', color: 'white' }}><div className="stat-label">Highest Mark</div><div className="stat-num">92</div><div className="stat-detail">Machine Learning</div></div>
            <div className="stat-card"><div className="stat-label">Total Credits</div><div className="stat-num">24</div></div>
            <div className="stat-card"><div className="stat-label">Subjects</div><div className="stat-num">6</div></div>
          </div>
          <div className="card">
            <div className="section-title">Detailed Marks — Semester VI</div>
            <div className="table-wrap">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border)' }}>
                    <th style={{ textAlign: 'left', padding: '10px' }}>Subject</th>
                    <th style={{ textAlign: 'left', padding: '10px' }}>IA Avg</th>
                    <th style={{ textAlign: 'left', padding: '10px' }}>End Sem</th>
                    <th style={{ textAlign: 'left', padding: '10px' }}>Total</th>
                    <th style={{ textAlign: 'left', padding: '10px' }}>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Machine Learning', ia: 46, end: 46, total: 92, grade: 'S' },
                    { name: 'Computer Networks', ia: 42.5, end: 42.5, total: 85, grade: 'A' },
                    { name: 'Software Engineering', ia: 38.5, end: 39.5, total: 78, grade: 'B+' },
                    { name: 'Database Systems', ia: 43.5, end: 44.5, total: 88, grade: 'S' },
                    { name: 'Cloud Computing', ia: 36, end: 36, total: 72, grade: 'B' },
                    { name: 'Project Work', ia: '—', end: '—', total: 90, grade: 'S' },
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '13px 10px' }}><strong>{row.name}</strong></td>
                      <td style={{ padding: '13px 10px' }}>{row.ia}</td>
                      <td style={{ padding: '13px 10px' }}>{row.end}</td>
                      <td style={{ padding: '13px 10px' }}><strong>{row.total}</strong></td>
                      <td style={{ padding: '13px 10px' }}><span className="badge badge-blue">{row.grade}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="dl-btn dl-btn-primary" onClick={() => downloadFile(`Marksheet_SemVI_${studentName}.txt`, generateMarksheetContent(studentName, 'VI'))}>⬇ Download Marksheet</button>
            </div>
          </div>
        </div>
      )}
      
      {activeSem !== 'sem6' && (
        <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{ fontSize: '40px' }}>📋</div>
          <h2 style={{ fontSize: '18px', margin: '16px 0' }}>{sems.find(s => s.id === activeSem).label} Results</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>Marksheet is available for download</p>
          <button className="dl-btn dl-btn-primary" onClick={() => downloadFile(`Marksheet_${activeSem}_${studentName}.txt`, generateMarksheetContent(studentName, activeSem.replace('sem','')))}>⬇ Download Official Marksheet</button>
        </div>
      )}
    </div>
  );
};

export default Marks;
