
import React from 'react';

const Performance = () => {
  return (
    <div className="page">
      <div className="page-header" style={{ marginBottom: '28px' }}>
        <h1 className="page-title" style={{ fontSize: '32px', fontFamily: 'Instrument Serif, serif' }}>Overall Performance</h1>
        <p className="page-subtitle" style={{ fontSize: '14px', color: 'var(--muted)' }}>Comprehensive academic performance analytics across all semesters</p>
      </div>

      <div className="grid3 gap" style={{ marginBottom: '20px' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <div className="card-label">Cumulative GPA</div>
          <div style={{ fontSize: '52px', fontWeight: '700', color: 'var(--accent)', lineHeight: '1.2' }}>8.74</div>
          <div className="card-sub">Out of 10.0</div>
          <div style={{ marginTop: '12px' }}><span className="badge badge-green">First Class with Distinction</span></div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <div className="card-label">Class Rank</div>
          <div style={{ fontSize: '52px', fontWeight: '700', color: 'var(--blue)', lineHeight: '1.2' }}>#12</div>
          <div className="card-sub">Out of 68 students</div>
          <div style={{ marginTop: '12px' }}><span className="badge badge-blue">Top 18%</span></div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <div className="card-label">Total Credits</div>
          <div style={{ fontSize: '52px', fontWeight: '700', color: 'var(--accent2)', lineHeight: '1.2' }}>142</div>
          <div className="card-sub">of 180 required</div>
          <div style={{ marginTop: '12px' }}><span className="badge badge-amber">79% Complete</span></div>
        </div>
      </div>

      <div className="grid2 gap">
        <div className="card">
          <div className="section-title">Semester-wise SGPA</div>
          <div className="table-wrap">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '10px' }}>Semester</th>
                  <th style={{ textAlign: 'left', padding: '10px' }}>SGPA</th>
                  <th style={{ textAlign: 'left', padding: '10px' }}>Result</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { sem: 'Semester I', sgpa: '7.80', result: 'Pass' },
                  { sem: 'Semester II', sgpa: '8.10', result: 'Pass' },
                  { sem: 'Semester III', sgpa: '8.30', result: 'Pass' },
                  { sem: 'Semester IV', sgpa: '8.50', result: 'Pass' },
                  { sem: 'Semester V', sgpa: '8.90', result: 'Pass' },
                  { sem: 'Semester VI', sgpa: '8.74', result: 'Ongoing' },
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '13px 10px' }}>{row.sem}</td>
                    <td style={{ padding: '13px 10px' }}><strong>{row.sgpa}</strong></td>
                    <td style={{ padding: '13px 10px' }}><span className={`badge ${row.result === 'Pass' ? 'badge-green' : 'badge-amber'}`}>{row.result}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
           <div className="section-title">Grade Distribution</div>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'S Grade (91-100)', count: 14, color: 'var(--accent)' },
                { label: 'A Grade (81-90)', count: 10, color: 'var(--blue)' },
                { label: 'B+ Grade (71-80)', count: 8, color: 'var(--accent2)' },
              ].map((g, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', background: 'var(--card2)', borderRadius: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '500' }}>{g.label}</span>
                  <span style={{ fontWeight: '700', color: g.color }}>{g.count}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
