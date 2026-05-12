
import React from 'react';

const Attendance = () => {
  const subjects = [
    { name: 'Machine Learning', conducted: 42, attended: 40, percent: '95%', status: 'Safe', badge: 'badge-green' },
    { name: 'Computer Networks', conducted: 38, attended: 34, percent: '89%', status: 'Safe', badge: 'badge-green' },
    { name: 'Software Engineering', conducted: 36, attended: 30, percent: '83%', status: 'Warning', badge: 'badge-amber' },
    { name: 'Database Systems', conducted: 40, attended: 36, percent: '90%', status: 'Safe', badge: 'badge-green' },
    { name: 'Cloud Computing', conducted: 32, attended: 25, percent: '78%', status: 'Risk', badge: 'badge-red' },
    { name: 'Project Work', conducted: 24, attended: 22, percent: '91%', status: 'Safe', badge: 'badge-green' },
  ];

  const calendarDays = [
    ...Array(4).fill({ type: 'empty' }),
    { day: 1, type: 'present' }, { day: 2, type: 'present' }, { day: 3, type: 'holiday' },
    { day: 4, type: 'holiday' }, { day: 5, type: 'present' }, { day: 6, type: 'present' }, { day: 7, type: 'absent' }, { day: 8, type: 'present' }, { day: 9, type: 'present' }, { day: 10, type: 'holiday' },
    { day: 11, type: 'holiday' }, { day: 12, type: 'present' }, { day: 13, type: 'present' }, { day: 14, type: 'present' }, { day: 15, type: 'holiday' }, { day: 16, type: 'present' }, { day: 17, type: 'holiday' },
    { day: 18, type: 'holiday' }, { day: 19, type: 'absent' }, { day: 20, type: 'present' }, { day: 21, type: 'present' }, { day: 22, type: 'present' }, { day: 23, type: 'present' }, { day: 24, type: 'holiday' },
    { day: 25, type: 'holiday' }, { day: 26, type: 'present' }, { day: 27, type: 'present' }, { day: 28, type: 'present' }, { day: 29, type: 'present' }, { day: 30, type: 'present' }, { day: 31, type: 'holiday' },
  ];

  return (
    <div className="page">
      <div className="page-header" style={{ marginBottom: '28px' }}>
        <h1 className="page-title" style={{ fontSize: '32px', fontFamily: 'Instrument Serif, serif' }}>Attendance Tracker</h1>
        <p className="page-subtitle" style={{ fontSize: '14px', color: 'var(--muted)' }}>Detailed attendance by subject and calendar view</p>
      </div>

      <div className="grid4 gap" style={{ marginBottom: '20px' }}>
        <div className="stat-card accent-green"><div className="stat-label">Overall</div><div className="stat-num">87%</div><div className="stat-detail">142 / 163 days</div></div>
        <div className="stat-card"><div className="stat-label">Present</div><div className="stat-num">142</div><div className="stat-detail">Days attended</div></div>
        <div className="stat-card"><div className="stat-label">Absent</div><div className="stat-num">21</div><div className="stat-detail">Days missed</div></div>
        <div className="stat-card"><div className="stat-label">OD / Leave</div><div className="stat-num">8</div><div className="stat-detail">Official duty days</div></div>
      </div>

      <div className="grid2 gap" style={{ marginBottom: '20px' }}>
        <div className="card">
          <div className="section-title">Subject-wise Attendance</div>
          <div className="table-wrap">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '10px' }}>Subject</th>
                  <th style={{ textAlign: 'left', padding: '10px' }}>Conducted</th>
                  <th style={{ textAlign: 'left', padding: '10px' }}>Attended</th>
                  <th style={{ textAlign: 'left', padding: '10px' }}>%</th>
                  <th style={{ textAlign: 'left', padding: '10px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((sub, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '13px 10px' }}><strong>{sub.name}</strong></td>
                    <td style={{ padding: '13px 10px' }}>{sub.conducted}</td>
                    <td style={{ padding: '13px 10px' }}>{sub.attended}</td>
                    <td style={{ padding: '13px 10px' }}><strong>{sub.percent}</strong></td>
                    <td style={{ padding: '13px 10px' }}><span className={`badge ${sub.badge}`}>{sub.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="section-title">March 2024 — Attendance Calendar</div>
          <div className="cal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d} className="cal-day-label" style={{ textAlign: 'center', fontSize: '11px', fontWeight: '600' }}>{d}</div>)}
            {calendarDays.map((day, idx) => (
              <div 
                key={idx} 
                className={`cal-day cal-${day.type}`} 
                style={{ 
                  aspectRatio: '1', 
                  borderRadius: '6px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '12px',
                  background: day.type === 'present' ? '#e8f5e3' : day.type === 'absent' ? '#fdeaea' : day.type === 'holiday' ? 'var(--card2)' : 'transparent',
                  color: day.type === 'present' ? '#2d6b22' : day.type === 'absent' ? '#8b2020' : 'var(--muted)'
                }}
              >
                {day.day}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}><div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#e8f5e3' }}></div> Present</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}><div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#fdeaea' }}></div> Absent</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}><div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#f0ede6' }}></div> Holiday</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
