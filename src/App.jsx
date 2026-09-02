import "./index.css";

function App() {
  return (
    <div className="portfolio">

      {/* =========================
          NAVBAR
      ========================= */}
      <nav className="navbar">
        <div className="logo">Ikram.</div>

        <div className="nav-links">
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#internships">Stages</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* =========================
          HERO
      ========================= */}
      <section id="home" className="hero">

        <div className="hero-text">

          <p className="hello">
            Bonjour, je suis
          </p>

          <h1>
            Ikram <span>Beddaou</span>
          </h1>

          <h2>
            Développeuse Informatique
          </h2>

          <p className="description">
            Passionnée par le développement web, l'intelligence artificielle
            et les nouvelles technologies. Je crée des solutions modernes,
            simples et efficaces.
          </p>

          <div className="buttons">

            <a
              href="#projects"
              className="btn primary"
            >
              Voir mes projets
            </a>

            <a
              href="#contact"
              className="btn secondary"
            >
              Me contacter
            </a>

          </div>

        </div>


        <div className="hero-card">

          <div className="profile-circle">
            IB
          </div>

          <h3>
            Développeuse
          </h3>

          <p>
            Web • Python • IA • Data
          </p>

        </div>

      </section>


      {/* =========================
          ABOUT
      ========================= */}
      <section id="about" className="section">

        <h2 className="section-title">
          À propos de moi
        </h2>

        <div className="about-content">

          <div>

            <p>
              Je suis Ikram Beddaou, diplômée en informatique et passionnée
              par les technologies numériques.
            </p>

            <p>
              Mon parcours m'a permis d'acquérir des compétences en
              développement, bases de données, intelligence artificielle
              et analyse de données.
            </p>

            <p>
              Je suis actuellement à la recherche de nouvelles opportunités
              pour développer mes compétences et participer à des projets
              innovants.
            </p>

          </div>


          <div className="about-box">

            <div>
              <strong>BTS</strong>
              <span>
                Informatique
              </span>
            </div>

            <div>
              <strong>Licence</strong>
              <span>
                Sciences Informatiques
              </span>
            </div>

            <div>
              <strong>3+</strong>
              <span>
                Stages
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SKILLS
      ========================= */}
      <section
        id="skills"
        className="section skills-section"
      >

        <h2 className="section-title">
          Mes compétences
        </h2>

        <div className="skills-grid">


          {/* DEVELOPPEMENT */}

          <div className="skill-card">

            <div className="skill-icon">
              💻
            </div>

            <h3>
              Développement
            </h3>

            <p>
              HTML, CSS, JavaScript, React, Python
            </p>

          </div>


          {/* BASES DE DONNEES */}

          <div className="skill-card">

            <div className="skill-icon">
              🗄️
            </div>

            <h3>
              Bases de données
            </h3>

            <p>
              SQL, Oracle, gestion et manipulation des données
            </p>

          </div>


          {/* IA */}

          <div className="skill-card">

            <div className="skill-icon">
              🤖
            </div>

            <h3>
              Intelligence artificielle
            </h3>

            <p>
              Machine Learning, Deep Learning, TensorFlow, Keras
            </p>

          </div>


          {/* DATA */}

          <div className="skill-card">

            <div className="skill-icon">
              📊
            </div>

            <h3>
              Data Science
            </h3>

            <p>
              Pandas, NumPy, Scikit-learn et analyse de données
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          STAGES
      ========================= */}
      <section
        id="internships"
        className="section internships-section"
      >

        <h2 className="section-title">
          Mes stages
        </h2>


        <div className="internships-grid">


          {/* STAGE 1 */}

          <div className="internship-card">

            <div className="internship-number">
              01
            </div>

            <div className="internship-icon">
              💻
            </div>

            <h3>
              Service des douanes
            </h3>

            <p className="internship-date">
              Mai 2024 - Juin 2024
            </p>

            <p>
              Automatisation des incidents et exploration des plateformes
              utilisées.
            </p>

            <div className="tags">

              <span>
                Informatique
              </span>

              <span>
                Automatisation
              </span>

            </div>

          </div>


          {/* STAGE 2 */}

          <div className="internship-card">

            <div className="internship-number">
              02
            </div>

            <div className="internship-icon">
              🎓
            </div>

            <h3>
              Faculté de lettres Ibn Tofail
            </h3>

            <p className="internship-date">
              Juillet 2024 - Septembre 2024
            </p>

            <p>
              Réalisation d'une application de gestion des doctorants,
              classement des dossiers et archivage.
            </p>

            <div className="tags">

              <span>
                Application
              </span>

              <span>
                Gestion
              </span>

              <span>
                Archivage
              </span>

            </div>

          </div>


          {/* STAGE 3 */}

          <div className="internship-card">

            <div className="internship-number">
              03
            </div>

            <div className="internship-icon">
              ⚡
            </div>

            <h3>
              Office National de l'Électricité et de l'Eau Potable
            </h3>

            <p className="internship-date">
              Stage
            </p>

            <p>
              Expérience professionnelle dans le domaine informatique
              au sein de l'Office National de l'Électricité et de l'Eau Potable.
            </p>

            <div className="tags">

              <span>
                Informatique
              </span>

              <span>
                Stage
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PROJECTS
      ========================= */}
      <section
        id="projects"
        className="section"
      >

        <h2 className="section-title">
          Mes projets
        </h2>

        <div className="projects-grid">


          {/* PROJECT 1 */}

          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <h3>
              Smart Irrigation IoT
            </h3>

            <p>
              Système d'irrigation intelligente basé sur l'IoT permettant
              d'optimiser la gestion des ressources en eau.
            </p>

            <div className="tags">

              <span>
                Python
              </span>

              <span>
                IoT
              </span>

              <span>
                IA
              </span>

            </div>

          </div>


          {/* PROJECT 2 */}

          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>
              Analyse des émissions CO₂
            </h3>

            <p>
              Analyse et exploration de données mondiales sur les émissions
              de CO₂ avec Python et des techniques de Data Science.
            </p>

            <div className="tags">

              <span>
                Python
              </span>

              <span>
                Pandas
              </span>

              <span>
                Data Science
              </span>

            </div>

          </div>


          {/* PROJECT 3 */}

          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <h3>
              NeuroCare AI
            </h3>

            <p>
              Concept d'une solution basée sur l'intelligence artificielle
              pour accompagner l'analyse des symptômes neurologiques.
            </p>

            <div className="tags">

              <span>
                IA
              </span>

              <span>
                Chatbot
              </span>

              <span>
                Deep Learning
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================= */}
      <section
  id="contact"
  className="section contact"
>
  <h2 className="section-title">
    Contactez-moi
  </h2>

  <p>
    Vous avez un projet, une opportunité ou simplement envie
    d'échanger ? N'hésitez pas à me contacter.
  </p>

  <div className="buttons">

    <a
      href="mailto:ikram.beddaou@gmail.com"
      className="btn primary"
    >
      📧 Envoyer un email
    </a>

    <a
      href="/CV_Ikram_Beddaou.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="btn secondary"
    >
      📄 Voir mon CV
    </a>

    <a
      href="/CV_Ikram_Beddaou.pdf"
      download="CV_Ikram_Beddaou.pdf"
      className="btn secondary"
    >
      ⬇️ Télécharger mon CV
    </a>

  </div>

</section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer>

        <p>
          © 2026 Ikram Beddaou — Portfolio
        </p>

      </footer>

    </div>
  );
}

export default App;