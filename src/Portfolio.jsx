import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Color Scheme - Teal/Cyan Modern Tech
  const colors = {
    primary: '#0d9488',        // Teal
    primaryLight: '#14b8a6',   // Light Teal
    cyan: '#06b6d4',           // Cyan
    dark: '#4a5566',           // Dark Gray
    darkText: '#5a6b7f',       // Dark Gray Text
    lightBg: '#f0fdfa',        // Very Light Teal
    white: '#ffffff',
    gray: '#6b7d8f',           // Medium Gray
    lightGray: '#e2e8f0',      // Light Slate
  };

  // Smooth scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 80) current = s.id;
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Styles
  const styles = {
    body: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      backgroundColor: '#ffffff',
      color: colors.darkText,
      lineHeight: '1.7',
      fontSize: '16px',
    },
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: `rgba(255, 255, 255, 0.9)`,
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${colors.lightGray}`,
      zIndex: 100,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    },
    navContainer: {
      maxWidth: '780px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '60px',
    },
    logo: {
      fontWeight: 700,
      fontSize: '1rem',
      letterSpacing: '-0.01em',
      cursor: 'pointer',
      color: colors.primary,
      transition: 'color 0.2s',
    },
    navLinks: {
      display: 'flex',
      gap: '28px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navLink: {
      fontSize: '0.88rem',
      color: colors.gray,
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'color 0.2s',
      border: 'none',
      background: 'none',
      padding: 0,
    },
    navLinkActive: {
      color: colors.darkText,
      fontWeight: 700,
    },
    section: {
      padding: '80px 0',
    },
    container: {
      maxWidth: '780px',
      margin: '0 auto',
      padding: '0 24px',
    },
    sectionLabel: {
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#aaa',
      marginBottom: '10px',
    },
    sectionTitle: {
      fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      marginBottom: '12px',
      color: colors.darkText,
    },
    divider: {
      width: '40px',
      height: '3px',
      background: colors.primary,
      borderRadius: '2px',
      margin: '16px 0 44px',
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '60px',
    },
    heroEyebrow: {
      fontSize: '0.85rem',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: colors.primary,
      marginBottom: '16px',
    },
    h1: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      marginBottom: '20px',
      color: colors.darkText,
    },
    tagline: {
      fontSize: '1.15rem',
      color: colors.gray,
      maxWidth: '520px',
      marginBottom: '36px',
    },
    buttonGroup: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '10px 22px',
      borderRadius: '8px',
      fontSize: '0.88rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.2s',
      border: 'none',
    },
    buttonPrimary: {
      background: colors.primary,
      color: '#fff',
    },
    buttonPrimaryHover: {
      background: colors.primaryLight,
    },
    buttonOutline: {
      border: `1.5px solid ${colors.lightGray}`,
      color: colors.darkText,
      background: 'transparent',
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '20px',
    },
    skillCard: {
      background: '#fff',
      border: `1px solid ${colors.lightGray}`,
      borderRadius: '12px',
      padding: '22px 24px',
      transition: 'all 0.2s',
      cursor: 'pointer',
    },
    skillCardHover: {
      boxShadow: '0 4px 20px rgba(13, 148, 136, 0.1)',
      transform: 'translateY(-2px)',
    },
    tag: {
      fontSize: '0.72rem',
      fontWeight: 600,
      padding: '3px 9px',
      borderRadius: '20px',
      background: colors.lightBg,
      color: colors.primary,
    },
    timelineCard: {
      background: '#fff',
      border: `1px solid ${colors.lightGray}`,
      borderRadius: '14px',
      padding: '24px 26px',
      display: 'grid',
      gridTemplateColumns: '52px 1fr',
      gap: '18px',
      alignItems: 'start',
      transition: 'all 0.2s',
      marginBottom: '20px',
    },
    projectCard: {
      background: '#fff',
      border: `1px solid ${colors.lightGray}`,
      borderRadius: '14px',
      padding: '28px 30px',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '16px',
      alignItems: 'start',
      transition: 'all 0.2s',
      marginBottom: '20px',
    },
    projectLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      fontSize: '0.82rem',
      fontWeight: 600,
      color: colors.darkText,
      padding: '6px 14px',
      border: `1.5px solid ${colors.lightGray}`,
      borderRadius: '7px',
      whiteSpace: 'nowrap',
      transition: 'all 0.2s',
      flexShrink: 0,
      textDecoration: 'none',
      background: 'transparent',
      cursor: 'pointer',
    },
    scrollTopButton: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      background: colors.primary,
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      opacity: showScrollTop ? 1 : 0,
      visibility: showScrollTop ? 'visible' : 'hidden',
      transition: 'all 0.3s',
      zIndex: 99,
      boxShadow: '0 4px 12px rgba(13, 148, 136, 0.3)',
    },
  };

  // Data
  const experience = [
    {
      title: 'Machine Learning Engineer',
      company: 'Stealth AI Startup',
      location: 'New York, NY',
      period: 'July 2025 – Present',
      details: ['Building the new generation of language models.'],
    },
    {
      title: 'Research Associate',
      company: 'George Mason University',
      location: 'Virginia, United States',
      period: 'November 2024 – June 2025',
      details: [
        'Architected a pipeline for generating synthetic iris images using Stable Diffusion 3.5, DreamBooth, and LoRA fine-tuning.',
        'Created a SOTA system for anomaly detection in hyperspectral fingerprint samples.',
      ],
    },
    {
      title: 'Research Associate',
      company: 'New York University',
      location: 'New York, NY',
      period: 'Aug 2024 – Oct 2024',
      details: [
        'Built a platform to live stream, transcribe, and analyze radio news using LLMs (Gemini, Mistral, WhisperX).',
        'Developed a full-stack web app with seamless user interaction and data insights (React, Django, PostgreSQL).',
      ],
    },
    {
      title: 'Course Assistant',
      company: 'New York University',
      location: 'New York, NY',
      period: 'Sept 2023 – May 2024',
      details: [
        'Assisted faculty in delivering advanced deep learning and machine learning courses.',
        'Guided students through complex concepts with hands-on projects.',
      ],
    },
    {
      title: 'Data Scientist',
      company: 'Standard Motor Products',
      location: 'New York, NY',
      period: 'June 2023 – Aug 2023',
      details: [
        'Optimized data entry and validation procedures to reduce errors by 60% and decrease program run-time by 20%.',
      ],
    },
  ];

  const education = [
    {
      degree: 'M.S. Computer Engineering',
      school: 'New York University',
      location: 'New York, NY',
      period: 'May 2024',
      details: 'GPA: 3.8 / 4.0',
      badges: ['Machine Learning', 'Deep Learning', 'High-Performance ML', 'Big Data'],
    },
    {
      degree: 'B.Tech Information Technology',
      school: 'Manipal Institute of Technology, MAHE',
      location: 'Manipal, India',
      period: 'July 2022',
      details: 'GPA: 8.53 / 10.0 · Minor: Big Data',
      badges: ['Machine Learning', 'Data Science', 'Big Data Analytics', 'NLP'],
    },
  ];

  const publications = [
    {
      title: 'WavePulse: Real-time Content Analytics of Radio Livestreams',
      venue: 'Proceedings of the ACM on Web Conference 2025, pp. 3731-3750',
      year: '2025',
      authors: 'G Mittal, S Gupta, S Wagle, C Chopra, AJ DeMattee, N Memon, et al.',
    },
    {
      title: 'Mitigating the impact of attribute editing on face recognition',
      venue: '2024 IEEE International Joint Conference on Biometrics (IJCB), pp. 1-10',
      year: '2024',
      authors: 'S Banerjee, SP Mullangi, S Wagle, C Hegde, N Memon',
      cited: 2,
    },
    {
      title: 'Disguise face classification using efficientnet deep learning',
      venue: 'Human-Centric Smart Computing: Proceedings of ICHCSC 2022, pp. 305-314',
      year: '2022',
      authors: 'G Padmashree, SG Wagle, AK Karunakar',
      cited: 3,
    },
    {
      title: 'Sentiment classification of English and Hindi music lyrics using supervised machine learning algorithms',
      venue: '2022 2nd Asian Conference on Innovation in Technology (ASIANCON), pp. 1-6',
      year: '2022',
      authors: 'N Sumith, S Wagle, P Ghosh, K Kishore',
      cited: 3,
    },
    {
      title: 'Adversarial jamming and catching games over AWGN channels with mobile players',
      venue: '2021 17th International Conference on Wireless and Mobile Computing',
      year: '2021',
      authors: 'G Perin, A Buratto, NM Anselmi, S Wagle, L Badia',
      cited: 10,
    },
  ];

  const projects = [
    {
      title: 'WavePulse: Real-time Content Analytics of Radio Livestreams',
      description: 'Full-stack platform processing 480,000 hours from 396 radio stations with real-time transcription (WhisperX: 8.4% WER) and LLM-based analysis. Achieved 99.7% availability over 4.5B words.',
      tags: ['React', 'Django', 'PostgreSQL', 'WhisperX', 'LLMs', 'GPU'],
      link: 'https://github.com/shrutz510/WavePulse',
    },
    {
      title: 'Distributed Data Parallelism for Language Models',
      description: 'Scalable deep learning training system using PyTorch\'s DDP module achieving 20× speedup on 4 GPUs with a final loss of 1.14.',
      tags: ['PyTorch', 'Distributed Training', 'NLP', 'GPU'],
      link: 'https://github.com/shrutz510/Distributed-Data-Parallelism-for-Translator',
    },
    {
      title: 'Finance ML System: Loan Default Prediction',
      description: 'ML pipeline for loan default prediction achieving 89.4% ROC-AUC using XGBoost and time-series analysis.',
      tags: ['XGBoost', 'Time Series', 'Feature Engineering', 'Python'],
      link: 'https://github.com/shrutz510/Loan-Default-Prediction',
    },
    {
      title: 'ML Pipeline for Airbnb Property Analysis',
      description: 'Full-system ML pipeline for large-scale Airbnb listing analysis using Azure Data Lake and PySpark with Random Forest classification.',
      tags: ['PySpark', 'Azure', 'Random Forest', 'SQL'],
      link: 'https://github.com/shrutz510/Airbnb-Property-Listing-Analysis',
    },
  ];

  const skills = [
    {
      icon: '🤖',
      title: 'Machine Learning',
      description: 'Supervised & unsupervised learning, model selection, evaluation.',
      tags: ['scikit-learn', 'XGBoost', 'NLTK', 'SpaCy'],
    },
    {
      icon: '🧠',
      title: 'Deep Learning & GenAI',
      description: 'Neural networks, diffusion models, LLMs, and computer vision.',
      tags: ['PyTorch', 'TensorFlow', 'LLaVA', 'Llama', 'Gemini'],
    },
    {
      icon: '👁️',
      title: 'Computer Vision',
      description: 'Generative image models, biometrics, and attribute editing.',
      tags: ['Stable Diffusion', 'ControlNet', 'DreamBooth', 'LoRA'],
    },
    {
      icon: '⚙️',
      title: 'Engineering & Infra',
      description: 'Full-stack development, distributed systems, and cloud pipelines.',
      tags: ['React', 'Django', 'PostgreSQL', 'AWS', 'PySpark'],
    },
    {
      icon: '🎙️',
      title: 'Speech & NLP',
      description: 'Transcription, semantic search, and large-scale text analytics.',
      tags: ['WhisperX', 'FAISS', 'BGE-M3', 'Transformers'],
    },
    {
      icon: '💬',
      title: 'Languages',
      description: 'Primary languages for ML, data, and software engineering.',
      tags: ['Python', 'SQL', 'C++', 'JavaScript', 'TypeScript'],
    },
  ];

  return (
    <div style={styles.body}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <span
            style={{ ...styles.logo, cursor: 'pointer' }}
            onClick={scrollToTop}
            onMouseEnter={(e) => e.target.style.color = colors.primaryLight}
            onMouseLeave={(e) => e.target.style.color = colors.primary}
          >
            Shruti Wagle
          </span>
          <ul style={styles.navLinks}>
            {['about', 'experience', 'education', 'publications', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                style={{
                  ...styles.navLink,
                  ...(activeSection === item ? styles.navLinkActive : {}),
                }}
                onMouseEnter={(e) => !activeSection.includes(item) && (e.target.style.color = colors.darkText)}
                onMouseLeave={(e) => !activeSection.includes(item) && (e.target.style.color = colors.gray)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{ ...styles.section, ...styles.hero, background: `linear-gradient(135deg, ${colors.lightBg} 0%, #ffffff 100%)` }}>
        <div style={styles.container}>
          <p style={styles.heroEyebrow}>Data Scientist & ML Engineer</p>
          <h1 style={styles.h1}>Hi, I'm Shruti Wagle 👋</h1>
          <p style={styles.tagline}>
            I turn raw data into actionable insights — building machine learning models,
            designing data pipelines, and crafting stories with data.
          </p>
          <div style={styles.buttonGroup}>
            <button
              onClick={() => scrollToSection('projects')}
              style={styles.button}
              onMouseEnter={(e) => e.target.style.background = colors.primaryLight}
              onMouseLeave={(e) => e.target.style.background = colors.primary}
            >
              View My Work
            </button>
            <a
              href="https://github.com/shrutz510"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.button, ...styles.buttonOutline, textDecoration: 'none' }}
              onMouseEnter={(e) => e.target.style.borderColor = colors.primary}
              onMouseLeave={(e) => e.target.style.borderColor = colors.lightGray}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shruti-wagle"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.button, ...styles.buttonOutline, textDecoration: 'none' }}
              onMouseEnter={(e) => e.target.style.borderColor = colors.primary}
              onMouseLeave={(e) => e.target.style.borderColor = colors.lightGray}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ ...styles.section, background: colors.lightBg, borderTop: `1px solid ${colors.lightGray}`, borderBottom: `1px solid ${colors.lightGray}` }}>
        <div style={styles.container}>
          <p style={styles.sectionLabel}>About Me</p>
          <h2 style={styles.sectionTitle}>Passionate about data-driven solutions</h2>
          <div style={styles.divider}></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
            <div>
              <p style={{ marginBottom: '16px' }}>
                I'm a Data Scientist and Machine Learning Engineer with a passion for solving real-world problems through data. I enjoy the full journey — from exploratory analysis and feature engineering to model training, evaluation, and deployment.
              </p>
              <p style={{ marginBottom: '16px' }}>
                I thrive at the intersection of research and engineering, building systems that are not just accurate but reliable and scalable. I'm always learning, whether it's the latest advances in deep learning or better ways to communicate insights to non-technical stakeholders.
              </p>
              <p>
                Outside of work, you'll find me reading ML papers, contributing to open-source projects, or experimenting with side projects that scratch my curiosity.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { label: 'Focus Area', value: 'Machine Learning & AI' },
                { label: 'GitHub', value: 'github.com/shrutz510', link: 'https://github.com/shrutz510' },
                { label: 'LinkedIn', value: 'linkedin.com/in/shruti-wagle', link: 'https://www.linkedin.com/in/shruti-wagle' },
              ].map((fact, i) => (
                <div key={i} style={{ background: '#fff', border: `1px solid ${colors.lightGray}`, borderRadius: '10px', padding: '18px 20px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#aaa', marginBottom: '4px' }}>
                    {fact.label}
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: colors.darkText }}>
                    {fact.link ? (
                      <a href={fact.link} target="_blank" rel="noopener noreferrer" style={{ color: colors.primary, textDecoration: 'underline', textDecorationOffset: '3px' }}>
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <div style={styles.container}>
          <p style={styles.sectionLabel}>Skills</p>
          <h2 style={styles.sectionTitle}>What I work with</h2>
          <div style={styles.divider}></div>
          <div style={styles.skillsGrid}>
            {skills.map((skill, i) => (
              <div
                key={i}
                style={styles.skillCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = styles.skillCardHover.boxShadow;
                  e.currentTarget.style.transform = styles.skillCardHover.transform;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{skill.icon}</div>
                <h3 style={{ marginBottom: '8px', fontSize: '0.95rem', fontWeight: 600, color: colors.darkText }}>{skill.title}</h3>
                <p style={{ fontSize: '0.85rem', color: colors.gray, marginTop: '4px', marginBottom: '12px' }}>{skill.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {skill.tags.map((tag, j) => (
                    <span key={j} style={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={styles.section}>
        <div style={styles.container}>
          <p style={styles.sectionLabel}>Work Experience</p>
          <h2 style={styles.sectionTitle}>Where I've worked</h2>
          <div style={styles.divider}></div>
          {experience.map((job, i) => (
            <div key={i} style={styles.timelineCard}>
              <div style={{ fontSize: '1.3rem' }}>🚀</div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: colors.darkText }}>{job.title}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#aaa', whiteSpace: 'nowrap' }}>{job.period}</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: colors.gray, marginBottom: '10px' }}>{job.company} · {job.location}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {job.details.map((detail, j) => (
                    <li key={j} style={{ fontSize: '0.875rem', color: colors.gray, paddingLeft: '14px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#bbb' }}>–</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{ ...styles.section, background: colors.lightBg, borderTop: `1px solid ${colors.lightGray}`, borderBottom: `1px solid ${colors.lightGray}` }}>
        <div style={styles.container}>
          <p style={styles.sectionLabel}>Education</p>
          <h2 style={styles.sectionTitle}>Where I studied</h2>
          <div style={styles.divider}></div>
          {education.map((edu, i) => (
            <div key={i} style={styles.timelineCard}>
              <div style={{ fontSize: '1.3rem' }}>🎓</div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: colors.darkText }}>{edu.degree}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#aaa', whiteSpace: 'nowrap' }}>{edu.period}</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: colors.gray, marginBottom: '10px' }}>{edu.school} · {edu.location}</div>
                <p style={{ fontSize: '0.82rem', color: colors.gray, marginBottom: '8px' }}>{edu.details}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {edu.badges.map((badge, j) => (
                    <span
                      key={j}
                      style={{
                        display: 'inline-block',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '2px 9px',
                        borderRadius: '20px',
                        background: colors.lightBg,
                        color: colors.primary,
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" style={{ ...styles.section, background: '#ffffff' }}>
        <div style={styles.container}>
          <p style={styles.sectionLabel}>Publications</p>
          <h2 style={styles.sectionTitle}>Research & Papers</h2>
          <div style={styles.divider}></div>
          {publications.map((pub, i) => (
            <div key={i} style={styles.timelineCard}>
              <div style={{ fontSize: '1.3rem' }}>📄</div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: colors.darkText }}>{pub.title}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#aaa', whiteSpace: 'nowrap' }}>{pub.year}</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: colors.gray, marginBottom: '10px' }}>{pub.venue}</div>
                <p style={{ fontSize: '0.82rem', color: colors.gray, marginBottom: '8px' }}>{pub.authors}</p>
                {pub.cited && (
                  <span
                    style={{
                      display: 'inline-block',
                      marginTop: '10px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 9px',
                      borderRadius: '20px',
                      background: colors.lightBg,
                      color: colors.primary,
                    }}
                  >
                    Cited {pub.cited} times
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <div style={styles.container}>
          <p style={styles.sectionLabel}>Projects</p>
          <h2 style={styles.sectionTitle}>Things I've built</h2>
          <div style={styles.divider}></div>
          {projects.map((project, i) => (
            <div key={i} style={styles.projectCard}>
              <div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '8px', fontWeight: 600, color: colors.darkText }}>{project.title}</h3>
                <p style={{ fontSize: '0.9rem', color: colors.gray }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '14px' }}>
                  {project.tags.map((tag, j) => (
                    <span key={j} style={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.projectLink}
                onMouseEnter={(e) => e.target.style.borderColor = colors.primary}
                onMouseLeave={(e) => e.target.style.borderColor = colors.lightGray}
              >
                View ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ ...styles.section, background: colors.lightBg, borderTop: `1px solid ${colors.lightGray}` }}>
        <div style={styles.container}>
          <p style={styles.sectionLabel}>Contact</p>
          <h2 style={styles.sectionTitle}>Let's work together</h2>
          <div style={styles.divider}></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <div>
              <p style={{ marginBottom: '24px' }}>
                I'm open to new opportunities, collaborations, and interesting conversations about data and ML. Feel free to reach out — I usually respond within a day.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href="https://www.linkedin.com/in/shruti-wagle"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 18px',
                    border: `1.5px solid ${colors.lightGray}`,
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                    color: colors.darkText,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.primary;
                    e.currentTarget.style.boxShadow = `0 2px 12px rgba(13, 148, 136, 0.1)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.lightGray;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>💼</span>
                  linkedin.com/in/shruti-wagle
                </a>
                <a
                  href="https://github.com/shrutz510"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 18px',
                    border: `1.5px solid ${colors.lightGray}`,
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                    color: colors.darkText,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.primary;
                    e.currentTarget.style.boxShadow = `0 2px 12px rgba(13, 148, 136, 0.1)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.lightGray;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>💻</span>
                  github.com/shrutz510
                </a>
              </div>
            </div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    border: `1.5px solid ${colors.lightGray}`,
                    borderRadius: '8px',
                    fontFamily: 'inherit',
                    fontSize: '0.9rem',
                    background: '#fff',
                    color: colors.darkText,
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.primary}
                  onBlur={(e) => e.target.style.borderColor = colors.lightGray}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    border: `1.5px solid ${colors.lightGray}`,
                    borderRadius: '8px',
                    fontFamily: 'inherit',
                    fontSize: '0.9rem',
                    background: '#fff',
                    color: colors.darkText,
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.primary}
                  onBlur={(e) => e.target.style.borderColor = colors.lightGray}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  border: `1.5px solid ${colors.lightGray}`,
                  borderRadius: '8px',
                  fontFamily: 'inherit',
                  fontSize: '0.9rem',
                  background: '#fff',
                  color: colors.darkText,
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => e.target.style.borderColor = colors.primary}
                onBlur={(e) => e.target.style.borderColor = colors.lightGray}
              />
              <textarea
                placeholder="Your message…"
                required
                style={{
                  width: '100%',
                  minHeight: '110px',
                  padding: '11px 14px',
                  border: `1.5px solid ${colors.lightGray}`,
                  borderRadius: '8px',
                  fontFamily: 'inherit',
                  fontSize: '0.9rem',
                  background: '#fff',
                  color: colors.darkText,
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  resize: 'none',
                }}
                onFocus={(e) => e.target.style.borderColor = colors.primary}
                onBlur={(e) => e.target.style.borderColor = colors.lightGray}
              />
              <button
                type="submit"
                style={{
                  ...styles.button,
                  ...styles.buttonPrimary,
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => e.target.style.background = colors.primaryLight}
                onMouseLeave={(e) => e.target.style.background = colors.primary}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px 0', borderTop: `1px solid ${colors.lightGray}`, textAlign: 'center', fontSize: '0.82rem', color: '#aaa' }}>
        <div style={styles.container}>
          <p>© 2026 Shruti Wagle · Built with ♥ and deployed with React</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        style={styles.scrollTopButton}
        title="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default Portfolio;
