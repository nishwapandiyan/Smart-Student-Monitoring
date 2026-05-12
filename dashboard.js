// ==========================================
// 1. NAVIGATION & UI LOGIC
// ==========================================

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  
  const items = document.querySelectorAll('.nav-item');
  items.forEach(item => {
    if (item.getAttribute('onclick') && item.getAttribute('onclick').includes("'" + id + "'")) {
      item.classList.add('active');
    }
  });
  closeSidebar();
}

function toggleSidebar() {
  document.body.classList.toggle('sidebar-open');
}

function closeSidebar() {
  document.body.classList.remove('sidebar-open');
}

function showTab(tabId, groupId) {
  const tabs = document.querySelectorAll('#' + groupId + ' .tab');
  const contents = document.querySelectorAll('[id^="tab-"]');
  tabs.forEach(t => t.classList.remove('active'));
  contents.forEach(c => c.classList.remove('active'));
  
  const targetIdx = ['sem6','sem5','sem4','sem3','sem2','sem1'].indexOf(tabId);
  if (targetIdx >= 0) tabs[targetIdx].classList.add('active');
  const targetEl = document.getElementById('tab-' + tabId);
  if (targetEl) targetEl.classList.add('active');
}

function showToast(msg) {
  const t = document.getElementById('cert-toast');
  if (t) {
    t.textContent = msg;
    t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 2800);
  }
}

function logout() {
  localStorage.setItem('isLoggedIn', 'false');
  window.location.href = 'index.html';
}

// ==========================================
// 2. USER DATA LOGIC
// ==========================================

function getDashboardUserName() {
  const storedUser = JSON.parse(localStorage.getItem('studentUser'));
  return storedUser?.username?.trim() || 'Student';
}

function updateDashboardUser() {
  const displayName = getDashboardUserName();
  const shortName = displayName.split(' ').slice(0, 2).join(' ');
  
  // UI Elements to update
  const avatar = document.querySelector('.avatar');
  const userLabel = document.querySelector('.student-mini-info strong');
  const greeting = document.querySelector('.page-title');
  const profileAvatarBig = document.querySelector('.profile-avatar-big');
  const profileName = document.querySelector('.profile-name');
  const fullNameDetail = document.querySelector('.detail-grid .detail-item:first-child .detail-val');

  // Update names
  if (userLabel) userLabel.textContent = displayName;
  if (profileName) profileName.textContent = displayName;
  if (fullNameDetail) fullNameDetail.textContent = displayName;
  if (greeting && greeting.textContent.includes('Good Morning')) {
    greeting.textContent = `Good Morning, ${shortName} 👋`;
  }

  // Create & Update Initials
  const initials = shortName
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);

  if (avatar) avatar.textContent = initials || 'ST';
  if (profileAvatarBig) profileAvatarBig.textContent = initials || 'ST';
}

// Run user update when page loads
document.addEventListener('DOMContentLoaded', updateDashboardUser);

// ==========================================
// 3. PDF TEMPLATE ENGINE
// ==========================================

/**
 * Creates a hidden iframe, injects the HTML template, and triggers the browser's Print to PDF
 */
function printTemplateAsPDF(htmlContent, documentTitle) {
  const iframe = document.createElement('iframe');
  iframe.style.position = 'absolute';
  iframe.style.width = '0px';
  iframe.style.height = '0px';
  iframe.style.border = 'none';
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow.document;
  doc.title = documentTitle; // Sets the default file name
  doc.open();
  doc.write(htmlContent);
  doc.close();

  // Give the browser a tiny moment to apply CSS before printing
  setTimeout(() => {
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
    // Cleanup iframe after printing dialog closes
    setTimeout(() => document.body.removeChild(iframe), 1000);
  }, 250);
}

// ==========================================
// 4. CERTIFICATE GENERATOR
// ==========================================

function generateCertificate(name) {
  const studentName = getDashboardUserName();
  const issueDate = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  const certId = `CERT-${Math.floor(100000 + Math.random() * 900000)}`;

  const template = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        @page { size: A4 landscape; margin: 0; }
        body { font-family: 'Georgia', serif; padding: 40px; margin: 0; color: #1a1814;}
        .border-wrap { border: 12px solid #c8a84b; padding: 10px; height: calc(100vh - 80px); box-sizing: border-box;}
        .inner-wrap { border: 2px solid #c8a84b; height: 100%; padding: 40px; text-align: center; position: relative; box-sizing: border-box;}
        .inst { font-size: 36px; font-weight: bold; color: #2a4a7a; margin-bottom: 8px;}
        .dept { font-size: 18px; color: #555; margin-bottom: 40px; text-transform: uppercase; letter-spacing: 2px; }
        .cert-title { font-size: 48px; font-weight: bold; color: #c8a84b; margin: 30px 0; font-family: 'Times New Roman', serif; text-transform: uppercase;}
        .name { font-size: 32px; font-weight: bold; color: #2d5a27; border-bottom: 2px dashed #c8a84b; display: inline-block; padding: 0 20px; margin: 10px 0; }
        .footer { display: flex; justify-content: space-between; position: absolute; bottom: 40px; left: 50px; right: 50px; }
        .sign-block { text-align: center; }
        .sign-line { border-top: 1px solid #000; width: 200px; padding-top: 8px; margin-top: 60px; font-weight: bold; font-size: 16px;}
      </style>
    </head>
    <body>
      <div class="border-wrap">
        <div class="inner-wrap">
          <div class="inst">V.S.B. Engineering College</div>
          <div class="dept">NH - 67, Covai Road, Karudayampalayam Post, Karur - 639111</div>
          <div style="font-size:14px; color:#555; margin-bottom: 24px;">Karur District, Tamil Nadu, India</div>
          <div style="font-size:14px; color:#555; margin-bottom: 24px;">Phone: +91 99944 96212 | 82200 80832 · admission@vsbec.com · principal@vsbec.org · vsbec.edu.in</div>
          <div class="cert-title">${name}</div>
          <p style="font-size: 20px;">This is to proudly certify that</p>
          <div class="name">${studentName}</div>
          <p style="font-size: 18px;">(Roll No: 21CS047 • B.Tech - ECE)</p>
          <p style="font-size: 20px;">has successfully completed the prescribed program requirements<br>and demonstrated academic excellence.</p>
          
          <div class="footer">
            <div class="sign-block">
                <div class="sign-line">Head of Department</div>
            </div>
            <div class="sign-block">
                <div class="sign-line">Principal</div>
            </div>
          </div>
          <div style="position:absolute; bottom:15px; left:50px; font-size:12px; color:#888;">ID: ${certId} | Date: ${issueDate}</div>
        </div>
      </div>
    </body>
    </html>
  `;

  printTemplateAsPDF(template, `${name.replace(/\s+/g, '_')}_${studentName.replace(/\s+/g, '_')}`);
  showToast(`✓ ${name} preparing for download...`);
}

// ==========================================
// 5. MARKSHEET GENERATOR
// ==========================================

function downloadMarksheet(sem) {
  const studentName = getDashboardUserName();
  const issueDate = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  
  // Data for the marksheets
  const data = {
    I: { sgpa: '7.80', result: 'PASS', subjects: [['EC101', 'Engineering Mathematics I', '4', 'A'], ['EC102', 'Basic Electrical Engineering', '3', 'B+'], ['EC103', 'Basic Electronics', '4', 'S'], ['EC104', 'Engineering Drawing', '2', 'S']] },
    II: { sgpa: '8.10', result: 'PASS', subjects: [['EC201', 'Engineering Mathematics II', '4', 'A'], ['EC202', 'Circuit Theory', '3', 'B+'], ['EC203', 'Electronic Devices', '4', 'S'], ['EC204', 'Digital Logic Design', '3', 'A']] },
    III: { sgpa: '8.30', result: 'PASS', subjects: [['EC301', 'Network Theory', '4', 'A'], ['EC302', 'Analog Electronics', '4', 'S'], ['EC303', 'Signals and Systems', '3', 'A'], ['EC304', 'Electronic Measurements Lab', '2', 'S']] },
    IV: { sgpa: '8.50', result: 'PASS', subjects: [['EC401', 'Control Systems', '4', 'S'], ['EC402', 'Communication Systems', '4', 'A'], ['EC403', 'Electromagnetic Fields', '4', 'B+'], ['EC404', 'Microelectronics', '3', 'A']] },
    V: { sgpa: '8.90', result: 'PASS', subjects: [['EC501', 'VLSI Design', '4', 'S'], ['EC502', 'Embedded Systems', '4', 'A'], ['EC503', 'Antenna and Wave Propagation', '3', 'B+'], ['EC504', 'Digital Signal Processing', '4', 'S']] },
    VI: { sgpa: '8.74', result: 'PROVISIONAL', subjects: [['EC601', 'Wireless Communication', '4', 'S'], ['EC602', 'Optical Communication', '4', 'A'], ['EC603', 'Radar Systems', '3', 'B+'], ['EC604', 'Instrumentation', '4', 'S'], ['EC605', 'Project Work', '4', 'A'], ['EC606', 'Seminar', '2', 'S']] },
  };

  const record = data[sem] || data['VI'];

  // Dynamically generate table rows
  let tableRows = '';
  if (sem === 'ALL' || sem === 'PROFILE') {
    tableRows = `<tr><td colspan="5" style="text-align:center; padding: 30px;">Consolidated marksheet view is available at the Registrar's Office.</td></tr>`;
  } else {
    record.subjects.forEach((sub, index) => {
      tableRows += `
        <tr>
          <td style="text-align: center;">${index + 1}</td>
          <td>${sub[0]}</td>
          <td>${sub[1]}</td>
          <td style="text-align: center;">${sub[2]}</td>
          <td style="text-align: center; font-weight: bold;">${sub[3]}</td>
        </tr>
      `;
    });
  }

  const template = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        @page { size: A4 portrait; margin: 20mm; }
        body { font-family: 'Helvetica Neue', Helvetica, sans-serif; color: #333; margin: 0; }
        .header { text-align: center; border-bottom: 3px solid #2a4a7a; padding-bottom: 20px; margin-bottom: 30px; }
        .inst { font-size: 28px; font-weight: bold; color: #2a4a7a; text-transform: uppercase;}
        .doc-title { text-align: center; font-size: 20px; font-weight: bold; margin-bottom: 30px; text-decoration: underline; }
        .student-info { display: flex; justify-content: space-between; border: 1px solid #ddd; padding: 15px; background: #fafafa; margin-bottom: 30px; border-radius: 8px;}
        .info-col { display: flex; flex-direction: column; gap: 8px; font-size: 14px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
        th, td { border: 1px solid #ccc; padding: 12px; text-align: left; }
        th { background: #f4f6f9; color: #2a4a7a; text-transform: uppercase; font-size: 12px;}
        .summary-box { display: flex; justify-content: flex-end; gap: 40px; margin-bottom: 50px; font-size: 16px; }
        .summary-box div { background: #f4f6f9; padding: 10px 20px; border: 1px solid #ccc; border-radius: 6px; }
        .footer { display: flex; justify-content: space-between; margin-top: 80px; font-size: 14px; font-weight: bold; }
        .sign { border-top: 1px solid #333; width: 200px; text-align: center; padding-top: 10px; }
        .watermark { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg); font-size: 100px; color: rgba(0,0,0,0.04); z-index: -1; white-space: nowrap; pointer-events: none; }
      </style>
    </head>
    <body>
      <div class="watermark">OFFICIAL COPY</div>
      
      <div class="header">
        <div class="inst">V.S.B. Engineering College</div>
        <div>NH - 67, Covai Road, Karudayampalayam Post, Karur - 639111, Tamil Nadu, India</div>
        <div style="margin-top: 6px; font-size: 14px; color: #555;">Phone: +91 99944 96212 | 82200 80832 · admission@vsbec.com · principal@vsbec.org · vsbec.edu.in</div>
      </div>
      
      <div class="doc-title">STATEMENT OF GRADES - SEMESTER ${sem}</div>
      
      <div class="student-info">
        <div class="info-col">
          <span><strong>Student Name:</strong> ${studentName}</span>
          <span><strong>Register No:</strong> 21CS047</span>
          <span><strong>Programme:</strong> B.Tech - ECE</span>
        </div>
        <div class="info-col">
          <span><strong>Date of Issue:</strong> ${issueDate}</span>
          <span><strong>Institution Code:</strong> 9225</span>
        </div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th style="width: 50px;">S.No</th>
            <th style="width: 100px;">Course Code</th>
            <th>Course Title</th>
            <th style="width: 80px;">Credits</th>
            <th style="width: 80px;">Grade</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
      
      <div class="summary-box">
        <div><strong>Result:</strong> ${record ? record.result : 'N/A'}</div>
        <div><strong>SGPA:</strong> ${record ? record.sgpa : 'N/A'}</div>
      </div>

      <div class="footer">
        <div class="sign">Prepared By</div>
        <div class="sign">Controller of Examinations</div>
      </div>
    </body>
    </html>
  `;

  printTemplateAsPDF(template, `Marksheet_Sem${sem}_${studentName.replace(/\s+/g, '_')}`);
  showToast(`✓ Semester ${sem} Marksheet preparing for download...`);
}