
export const downloadFile = (filename, content) => {
  const blob = new Blob([content], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
};

export const generateCertificateContent = (name, certificateType) => {
  return `ARASAN GANESAN INSTITUTE OF TECHNOLOGY
Department of Computer Science & Engineering

${certificateType.toUpperCase()}

This is to certify that

${name}
Roll No: 922523106137
B.Tech - ECE
Batch: 2021-2025

is a bonafide student of this institution.

CGPA: 8.74 | Semester: VI

Issued on: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}

Principal                    HOD - CSE
(Signature & Seal)           (Signature)`;
};

export const generateMarksheetContent = (name, sem) => {
  const data = {
    I: { sgpa: '7.80', subjects: 'Engineering Maths, Physics, Chemistry, Basic Electrical, Programming Fundamentals, Lab' },
    II: { sgpa: '8.10', subjects: 'Advanced Maths, Data Structures, Digital Electronics, OOP, Environmental Science, Lab' },
    III: { sgpa: '8.30', subjects: 'Discrete Maths, Computer Organization, Java Programming, DBMS, Networking Basics, Lab' },
    IV: { sgpa: '8.50', subjects: 'DAA, Computer Architecture, Software PM, Microprocessors, Elective I, Lab' },
    V: { sgpa: '8.90', subjects: 'Theory of Computation, Compiler Design, OS, Web Technologies, Mobile Computing, Mini Project' },
    VI: { sgpa: '8.74 (Provisional)', subjects: 'Machine Learning, Computer Networks, Software Engineering, Database Systems, Cloud Computing, Project' },
    ALL: { sgpa: 'CGPA 8.74', subjects: 'All Semesters I through VI' },
  };
  const d = data[sem] || data['VI'];
  
  return `==============================================
         OFFICIAL MARKSHEET
==============================================
Institution: Arasan Ganesan Institute of Technology
University: Anna University, Chennai

Student: ${name.toUpperCase()}
Roll Number: 21CS047
Department: Computer Science & Engineering
Programme: B.Tech | Batch: 2021-2025

SEMESTER ${sem}
----------------------------------------------
Subjects: ${d.subjects}

SGPA / Result: ${d.sgpa}
${sem === 'ALL' ? 'Cumulative CGPA: 8.74\nTotal Credits: 142/180\nResult: FIRST CLASS WITH DISTINCTION' : ''}

Issued On: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
==============================================
Controller of Examinations
(Official Document — For Reference Only)
==============================================`;
};
