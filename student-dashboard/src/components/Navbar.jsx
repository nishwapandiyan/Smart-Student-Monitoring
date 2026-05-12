
import React from 'react';
import { Bell, Menu } from 'lucide-react';

const Navbar = ({ pageTitle, pageSubtitle, onToggleSidebar }) => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <button className="menu-btn" onClick={onToggleSidebar} style={{ display: 'none', border: 'none', background: 'none', cursor: 'pointer', marginRight: '1rem' }}>
          <Menu size={24} />
        </button>
        <div>
          <div className="page-title">{pageTitle}</div>
          <div className="page-subtitle">{pageSubtitle}</div>
        </div>
      </div>
      <div className="topbar-right" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div className="sem-badge" style={{ background: 'var(--accent)', color: 'white', padding: '7px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>Semester VI</div>
        <div className="notif-btn" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justify_content: 'center', cursor: 'pointer', position: 'relative' }}>
          <Bell size={18} />
          <span className="notif-badge" style={{ position: 'absolute', top: '-2px', right: '-2px', width: '14px', height: '14px', background: 'var(--accent3)', borderRadius: '50%', fontSize: '9px', color: 'white', display: 'flex', alignItems: 'center', justify_content: 'center', fontWeight: '700' }}>3</span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .menu-btn { display: block !important; }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
