
import React from 'react';

const Overview = ({ setActivePage }) => {
  return (
    <div className="page active">
      {/* STATS */}
      <div className="grid4 gap" style={{ marginBottom: '20px' }}>
        <div className="stat-card accent-green" style={{ background: 'var(--accent)', color: 'white', padding: '20px', borderRadius: 'var(--radius)' }}>
          <div className="stat-label" style={{ opacity: 0.8, fontSize: '11px', textTransform: 'uppercase' }}>Attendance</div>
          <div className="stat-num" style={{ fontSize: '28px', fontWeight: 'bold' }}>87%</div>
          <div className="stat-detail" style={{ opacity: 0.7, fontSize: '12px' }}>142 / 163 days present</div>
        </div>
        <div className="stat-card accent-gold" style={{ background: 'var(--accent2)', color: 'var(--text)', padding: '20px', borderRadius: 'var(--radius)' }}>
          <div className="stat-label" style={{ opacity: 0.8, fontSize: '11px', textTransform: 'uppercase' }}>Current CGPA</div>
          <div className="stat-num" style={{ fontSize: '28px', fontWeight: 'bold' }}>8.74</div>
          <div className="stat-detail" style={{ opacity: 0.7, fontSize: '12px' }}>Rank #12 in class</div>
        </div>
        <div className="stat-card" style={{ background: 'var(--card)', padding: '20px', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          <div className="stat-label" style={{ opacity: 0.8, fontSize: '11px', textTransform: 'uppercase' }}>Credits Earned</div>
          <div className="stat-num" style={{ fontSize: '28px', fontWeight: 'bold' }}>142</div>
          <div className="stat-detail" style={{ opacity: 0.7, fontSize: '12px' }}>of 180 total credits</div>
        </div>
        <div className="stat-card" style={{ background: 'var(--card)', padding: '20px', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          <div className="stat-label" style={{ opacity: 0.8, fontSize: '11px', textTransform: 'uppercase' }}>Backlogs</div>
          <div className="stat-num" style={{ fontSize: '28px', fontWeight: 'bold' }}>0</div>
          <div className="stat-detail" style={{ opacity: 0.7, fontSize: '12px' }}>All subjects cleared</div>
        </div>
      </div>

      <div className="grid2 gap" style={{ marginBottom: '20px' }}>
        {/* Subject Performance */}
        <div className="card">
          <div className="section-title" style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Current Semester Subjects</div>
          {[
            { label: 'Machine Learning', val: '92/100', color: 'var(--accent)', fill: 'fill-green', width: '92%' },
            { label: 'Computer Networks', val: '85/100', color: 'var(--blue)', fill: 'fill-blue', width: '85%' },
            { label: 'Software Engineering', val: '78/100', color: 'var(--accent2)', fill: 'fill-amber', width: '78%' },
            { label: 'Database Systems', val: '88/100', color: 'var(--accent)', fill: 'fill-green', width: '88%' },
            { label: 'Cloud Computing', val: '72/100', color: 'var(--accent3)', fill: 'fill-red', width: '72%' },
          ].map((sub, idx) => (
            <div className="progress-wrap" key={idx} style={{ marginBottom: '14px' }}>
              <div className="progress-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span className="progress-label" style={{ fontSize: '13px' }}>{sub.label}</span>
                <span className="progress-val" style={{ fontSize: '13px', fontWeight: '600', color: sub.color }}>{sub.val}</span>
              </div>
              <div className="progress-bar" style={{ height: '8px', background: 'var(--card2)', borderRadius: '4px', overflow: 'hidden' }}>
                <div className={`progress-fill ${sub.fill}`} style={{ height: '100%', width: sub.width, background: sub.color }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Notifications + Quick Links */}
        <div>
          <div className="card" style={{ marginBottom: '16px' }}>
            <div className="section-title" style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Recent Notifications</div>
            {[
              { text: 'Internal Assessment marks for Machine Learning uploaded', time: 'Today, 10:30 AM', color: 'var(--accent3)' },
              { text: 'Attendance is below 85% in Cloud Computing — attend classes', time: 'Yesterday', color: 'var(--accent2)' },
              { text: 'Semester V marksheet is available for download', time: '2 days ago', color: 'var(--accent)' },
            ].map((notif, idx) => (
              <div className="notif" key={idx} style={{ display: 'flex', gap: '12px', padding: '14px 16px', borderRadius: '10px', background: 'var(--card2)', marginBottom: '10px' }}>
                <div className="notif-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: notif.color, marginTop: '5px' }}></div>
                <div><div className="notif-text" style={{ fontSize: '13px' }}>{notif.text}</div><div className="notif-time" style={{ fontSize: '11px', color: 'var(--muted)' }}>{notif.time}</div></div>
              </div>
            ))}
          </div>
          <div className="card">
            <div className="section-title" style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Quick Actions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button className="dl-btn dl-btn-primary" onClick={() => setActivePage('marksheets')} style={{ background: 'var(--text)', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer' }}>⬇ Download Latest Marksheet</button>
              <button className="dl-btn dl-btn-secondary" onClick={() => setActivePage('certificates')} style={{ background: 'var(--card2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '10px', borderRadius: '8px', cursor: 'pointer' }}>🏅 View Certificates</button>
              <button className="dl-btn dl-btn-secondary" onClick={() => setActivePage('attendance')} style={{ background: 'var(--card2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '10px', borderRadius: '8px', cursor: 'pointer' }}>📅 Check Attendance</button>
            </div>
          </div>
        </div>
      </div>

      {/* CGPA Trend */}
      <div className="card">
        <div className="section-title" style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>CGPA Progression — All Semesters</div>
        <div className="chart-bar-wrap" style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', height: '160px', padding: '0 8px' }}>
          {[
            { label: 'Sem I', val: '7.8', height: '68%', fill: 'var(--blue)' },
            { label: 'Sem II', val: '8.1', height: '74%', fill: 'var(--blue)' },
            { label: 'Sem III', val: '8.3', height: '78%', fill: 'var(--blue)' },
            { label: 'Sem IV', val: '8.5', height: '82%', fill: 'var(--accent)' },
            { label: 'Sem V', val: '8.9', height: '90%', fill: 'var(--accent)' },
            { label: 'Sem VI', val: '8.74', height: '86%', fill: 'var(--accent2)' },
          ].map((bar, idx) => (
            <div className="chart-bar-col" key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%', justifyContent: 'flex-end' }}>
              <div className="chart-bar-val" style={{ fontSize: '12px', fontWeight: '600' }}>{bar.val}</div>
              <div className="chart-bar" style={{ width: '100%', background: bar.fill, borderRadius: '6px 6px 0 0', height: bar.height }}></div>
              <div className="chart-bar-label" style={{ fontSize: '11px', color: 'var(--muted)' }}>{bar.label}</div>
            </div>
          ))}
        </div>
        <div className="chart-axis" style={{ borderTop: '2px solid var(--border)', marginTop: '0' }}></div>
      </div>
    </div>
  );
};

export default Overview;
