
import React from 'react';
import { LayoutDashboard, Calendar, FileText, BarChart, Award, FileStack, UserCircle } from 'lucide-react';

const Sidebar = ({ activePage, setActivePage, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={20} />, section: 'Main' },
    { id: 'attendance', label: 'Attendance', icon: <Calendar size={20} /> },
    { id: 'marks', label: 'Marks & Grades', icon: <FileText size={20} /> },
    { id: 'performance', label: 'Performance', icon: <BarChart size={20} /> },
    { id: 'certificates', label: 'Certificates', icon: <Award size={20} />, section: 'Documents' },
    { id: 'marksheets', label: 'Marksheets', icon: <FileStack size={20} /> },
    { id: 'profile', label: 'Personal Details', icon: <UserCircle size={20} />, section: 'Profile' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">EduTrack<span>Student Portal</span></div>
      </div>
      <div className="student-mini">
        <div className="avatar">AR</div>
        <div className="student-mini-info">
          <strong>Arjun Ravi</strong>
          <span>21CS047 · CSE</span>
        </div>
      </div>
      <nav className="nav">
        {menuItems.map((item, index) => (
          <React.Fragment key={item.id}>
            {item.section && <div className="nav-section">{item.section}</div>}
            <div 
              className={`nav-item ${activePage === item.id ? 'active' : ''}`} 
              onClick={() => {
                setActivePage(item.id);
                if (window.innerWidth <= 768) setIsOpen(false);
              }}
            >
              <span className="nav-icon">{item.icon}</span> {item.label}
            </div>
          </React.Fragment>
        ))}
      </nav>
      <div className="sidebar-footer">Academic Year 2023–24</div>
    </aside>
  );
};

export default Sidebar;
