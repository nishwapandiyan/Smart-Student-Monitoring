
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Attendance from './components/Attendance';
import Marks from './components/Marks';
import Performance from './components/Performance';
import Certificates from './components/Certificates';
import Marksheets from './components/Marksheets';
import Profile from './components/Profile';
import Login from './components/Login';
import './styles/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [activePage, setActivePage] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('studentUser');
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (storedUser && loginStatus === 'true') {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('isLoggedIn');
  };

  const renderPage = () => {
    switch (activePage) {
      case 'overview': return <Overview setActivePage={setActivePage} />;
      case 'attendance': return <Attendance />;
      case 'marks': return <Marks studentName={user?.username || 'Arjun Ravi'} />;
      case 'performance': return <Performance />;
      case 'certificates': return <Certificates studentName={user?.username || 'Arjun Ravi'} />;
      case 'marksheets': return <Marksheets studentName={user?.username || 'Arjun Ravi'} />;
      case 'profile': return <Profile user={user} />;
      default: return <Overview setActivePage={setActivePage} />;
    }
  };

  const getPageTitle = () => {
    if (activePage === 'overview') return `Good Morning, ${user?.username?.split(' ')[0] || 'Arjun'} 👋`;
    const titles = {
      attendance: 'Attendance Tracker',
      marks: 'Marks & Grades',
      performance: 'Overall Performance',
      certificates: 'Certificates & Awards',
      marksheets: 'Semester Marksheets',
      profile: 'Personal Details'
    };
    return titles[activePage] || 'Student Portal';
  };

  const getPageSubtitle = () => {
    if (activePage === 'overview') return "Here's your academic snapshot for today";
    const subtitles = {
      attendance: 'Detailed attendance by subject and calendar view',
      marks: 'Internal assessments, semester exams, and final grades',
      performance: 'Comprehensive academic performance analytics',
      certificates: 'All your achievements in one place',
      marksheets: 'Download official marksheets for each semester',
      profile: 'Overview of your student profile'
    };
    return subtitles[activePage] || '';
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
      />
      
      <main className="main-content">
        <Navbar 
          pageTitle={getPageTitle()}
          pageSubtitle={getPageSubtitle()}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        
        {renderPage()}
        
        <div style={{ marginTop: '40px', padding: '20px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <button 
            onClick={handleLogout}
            style={{ padding: '8px 24px', borderRadius: '8px', border: '1px solid var(--border)', background: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
          >
            Sign Out
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
