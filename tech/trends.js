let i = 100;
export const trends = [
  // 70'
  { id: i++, content: 'Operating Systems', start: '1970-01-01', type: 'L', trend: 'BIGBANG', group: 'system' },
  { id: i++, content: 'CPU', start: '1971-01-01', type: 'L', trend: 'BIGBANG', group: 'system' },
  { id: i++, content: 'Programming Languages', start: '1960-01-01', type: 'L', trend: 'BIGBANG', group: 'programming' },
  { id: i++, content: 'Mainframes', start: '1950-01-01', type: 'L', trend: 'BIGBANG', group: 'system' },
  { id: i++, content: 'Personal Computers', start: '1979-01-01', type: 'L', trend: 'PC', group: 'system' },
  // 80'
  { id: i++, content: 'Video Games', start: '1980-01-01', type: 'L', trend: 'PC', group: 'domain' },
  { id: i++, content: 'Windows', start: '1985-01-01', type: 'L', trend: 'PC', group: 'system' },
  { id: i++, content: 'TCP/IP', start: '1983-01-01', type: 'L', trend: 'BIGBANG', group: 'system' },
  // 90'
  // L
  { id: i++, content: 'World Wide Web', start: '1993-01-01', type: 'L', trend: 'INTERNET', group: 'domain' },
  { id: i++, content: 'Office Softwares', start: '1990-01-01', type: 'L', trend: 'PC', group: 'domain' },
  // M
  { id: i++, content: 'Client-Server', start: '1992-01-01',  type: 'M', trend: 'ARCHITECTURE', group: 'programming' },
  { id: i++, content: 'SQL', start: '1979-01-01',  type: 'M', trend: 'ARCHITECTURE', group: 'programming' },
  { id: i++, content: 'Design Patterns', start: '1994-01-01', type: 'M', trend: 'OOO', group: 'programming' },
  { id: i++, content: 'UML', start: '1997-01-01', type: 'M', trend: 'OOO', group: 'programming' },

  // 2000'
  // L
  { id: i++, content: 'HTML', start: '1997-01-01',  type: 'L', trend: 'INTERNET', group: 'programming' },
  { id: i++, content: 'Web 2.0', start: '2004-01-01',  type: 'L', trend: 'INTERNET', group: 'programming' },
  { id: i++, content: 'E-commerce', start: '2000-01-01',  type: 'L', trend: 'INTERNET', group: 'domain' },
  { id: i++, content: 'Open-Source', start: '1998-01-01',  type: 'L', trend: 'OSS', group: 'programming' },
  { id: i++, content: 'Social Networks', start: '2006-01-01',  type: 'L', trend: 'INTERNET', group: 'domain' },
  { id: i++, content: 'Smartphones', start: '2007-01-01',  type: 'L', trend: 'MOBILE', group: 'domain' },
  // M
  { id: i++, content: 'SOA & XML', start: '2002-01-01', type: 'M', trend: 'ARCHITECTURE', group: 'programming' },
  { id: i++, content: 'Apache Fundation', start: '1999-01-01', type: 'M', trend: 'OSS', group: 'programming' },
  { id: i++, content: 'ERP', start: '2000-01-01', type: 'M', trend: 'ARCHITECTURE', group: 'domain' },
  { id: i++, content: 'PHP', start: '1998-01-01', type: 'M', trend: 'INTERNET', group: 'programming' },
  { id: i++, content: 'Flash', start: '1996-01-01', type: 'M', trend: 'INTERNET', group: 'programming' },

  // S
  { id: i++, content: 'IE6', start: '2001-01-01', type: 'S', trend: 'INTERNET', group: 'system' },  
  { id: i++, content: 'Android', start: '2009-01-01', type: 'S', trend: 'MOBILE', group: 'system' },
  { id: i++, content: 'Struts', start: '2001-01-01', type: 'S', trend: 'OOO', group: 'programming' },
  { id: i++, content: 'J2EE', start: '2000-01-01', type: 'S', trend: 'OOO', group: 'programming' },
  { id: i++, content: 'Integration Patterns', start: '2004-01-01', type: 'S', trend: 'ARCHITECTURE', group: 'programming' },
  { id: i++, content: 'MDD', start: '2002-01-01', type: 'S', trend: 'ARCHITECTURE', group: 'programming' },
  { id: i++, content: 'CSS3', start: '2016-01-01', type: 'S', trend: 'INTERNET', group: 'programming' },
  { id: i++, content: 'Java', start: '2000-01-01', type: 'S', trend: 'OOO', group: 'programming' },
  { id: i++, content: 'Chrome V8', start: '2009-01-01', type: 'S', trend: 'INTERNET', group: 'programming' },
  { id: i++, content: 'JQuery', start: '2006-01-01', type: 'S', trend: 'INTERNET', group: 'programming' },
  { id: i++, content: 'Angular', start: '2011-01-01', type: 'S', trend: 'INTERNET', group: 'programming' },

  // 2010'
  // L
  { id: i++, content: 'AR/VR', start: '2010-01-01',  type: 'L', trend: 'AR/VR', group: 'domain' },
  { id: i++, content: 'Internet of Things', start: '2009-01-01', type: 'L', trend: 'BIGDATA', group: 'domain' },
  { id: i++, content: 'Blockchains', start: '2014-01-01', type: 'L', trend: 'BLOCKCHAIN', group: 'domain' },
  { id: i++, content: 'Cloud Computing', start: '2008-01-01', type: 'L', trend: 'DEV EXP', group: 'system' },
  { id: i++, content: 'Deep Learning', start: '2011-01-01', type: 'L', trend: 'BIGDATA', group: 'domain' },
  { id: i++, content: 'Devops', start: '2009-01-01', type: 'L', trend: 'DEV EXP', group: 'system' },
  { id: i++, content: 'Low code', start: '2018-01-01', type: 'L', trend: 'DEV EXP', group: 'programming' },

  // M
  { id: i++, content: 'Microservices', start: '2012-01-01',  type: 'M', trend: 'ARCHITECTURE', group: 'programming' },
  { id: i++, content: 'Big Data', start: '2010-01-01', type: 'M', trend: 'BIGDATA', group: 'programming' },
  { id: i++, content: 'ES6', start: '2015-01-01', type: 'M', trend: 'DEV EXP', group: 'programming' },
  { id: i++, content: 'NoSQL', start: '2009-01-01', type: 'M', trend: 'BIGDATA', group: 'programming' },
  { id: i++, content: 'Docker', start: '2013-01-01', type: 'M', trend: 'DEV EXP', group: 'domain' },
  { id: i++, content: 'Github', start: '2008-01-01', type: 'M', trend: 'DEV EXP', group: 'programming' },
  { id: i++, content: 'Agile', start: '2009-01-01', type: 'M', trend: 'DEV EXP', group: 'domain' },  

  // S
  { id: i++, content: 'Angular', start: '2010-01-01', type: 'S', trend: 'DEV EXP', group: 'programming' },  
  { id: i++, content: 'Bootstrap', start: '2011-01-01', type: 'S', trend: 'DEV EXP', group: 'programming' },  
  { id: i++, content: 'React', start: '2014-01-01', type: 'S', trend: 'DEV EXP', group: 'programming' }, 
  { id: i++, content: 'Spring', start: '2004-01-01', type: 'S', trend: 'DEV EXP', group: 'programming' }, 
  { id: i++, content: '.Net', start: '2003-01-01', type: 'S', trend: 'OOO', group: 'programming' }, 
  { id: i++, content: '.Net Core', start: '2017-01-01', type: 'S', trend: 'DEV EXP', group: 'programming' }, 
  { id: i++, content: 'HTML5', start: '2010-01-01', type: 'S', trend: 'DEV EXP', group: 'programming' },

  // 2020'
  { id: i++, content: 'Quantum Computing', start: '2019-01-01', type: 'L', trend: 'BIGDATA', group: 'system' },
  { id: i++, content: 'ChatGPT', start: '2023-01-01', type: 'L', trend: 'BIGDATA', group: 'domain' },
  { id: i++, content: 'Copilot', start: '2021-01-01', type: 'L', trend: 'BIGDATA', group: 'domain' },
];
