
import React from 'react';

const Profile = ({ user }) => {
  const details = [
    { key: 'Roll Number', val: '21CS047' },
    { key: 'Full Name', val: user?.username || 'Arjun Ravi' },
    { key: 'Email Address', val: user?.email || 'arjun.ravi@student.edu' },
    { key: 'Department', val: 'Computer Science & Engineering' },
    { key: 'Academic Year', val: '2023 - 2024' },
    { key: 'Semester', val: 'Semester VI' },
  ];

  return (
    <div className="page">
      <div className="page-header" style={{ marginBottom: '28px' }}>
        <h1 className="page-title" style={{ fontSize: '32px', fontFamily: 'Instrument Serif, serif' }}>Personal Details</h1>
        <p className="page-subtitle" style={{ fontSize: '14px', color: 'var(--muted)' }}>Overview of your student profile and academic record</p>
      </div>
      
      <div className="profile-hero card" style={{ display: 'flex', gap: '28px', padding: '28px', marginBottom: '20px' }}>
        <div className="profile-avatar-big" style={{ width: '88px', height: '88px', borderRadius: '50%', background: 'var(--accent2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '700' }}>AR</div>
        <div>
          <h2 className="profile-name" style={{ fontSize: '26px', fontFamily: 'Instrument Serif, serif' }}>{user?.username || 'Arjun Ravi'}</h2>
          <p className="profile-roll" style={{ color: 'var(--muted)', margin: '4px 0 12px' }}>21CS047 · CSE</p>
          <div className="profile-tags" style={{ display: 'flex', gap: '8px' }}>
            <span className="badge badge-green">Active Student</span>
            <span className="badge badge-blue">Merit Scholar</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: '0' }}>
        <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {details.map((d, idx) => (
            <div key={idx} style={{ padding: '20px', borderBottom: '1px solid var(--border)', borderRight: idx % 2 === 0 ? '1px solid var(--border)' : 'none' }}>
              <div className="detail-key" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '5px' }}>{d.key}</div>
              <div className="detail-val" style={{ fontSize: '15px' }}>{d.val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
