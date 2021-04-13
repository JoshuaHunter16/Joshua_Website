import './App.css';
import headshot from './img/headshot.JPG'
import cpp from './img/C++Logo.png'
import c from './img/CLogo.png'
import css from './img/CSSLogo.png'
import html from './img/HTMLLogo.png'
import java from './img/JavaLogo.png'
import py from './img/PythonLogo.png'
import asm from './img/x86Logo.png'
import email from './img/JEmail.png'
import fb from './img/JFacebook.png'
import insta from './img/JInstagram.png'
import linked from './img/JLinkedin.png'
import spotify from './img/JSpotify.png'
import twitter from './img/JTwitter.png'



function App() {
  return (
      <div className="App">
        <p class="tab">
          <img src={headshot} style={{width:500 + 'px', height:500 + 'px'}}/>
            <a href="https://www.linkedin.com/in/joshuachunter/" target="_blank" class="fa fa-linkedin"><img
              src={linked} style={{width:150 + 'px', height:150+ 'px'}}/></a>
          <a href="mailto: jchunter16@att.net" target="_blank" class="fa fa-email">
            <img src={email} style={{width:150 + 'px', height:150 + 'px'}}/></a>
          <a href="https://www.instagram.com/joshuahunter16/" target="_blank" class="fa fa-instagram"><img
              src={insta} style={{width:150 + 'px', height: 150+ 'px'}}/></a>
          <a href="https://twitter.com/GrilledCheeseJH" target="_blank" class="fa fa-twitter"><img
              src={twitter}
              style={{width: 150 + 'px', height: 150 + 'px'}}/></a>
          <a href="https://www.facebook.com/joshua.hunter.5477" target="_blank" class="fa fa-facebook"><img
              src={fb} style={{width: 150 + 'px', height: 150 + 'px'}}/></a>
          <a href="https://open.spotify.com/user/joshuahannah16?si=66cee86f946142ec" target="_blank"
             class="fa fa-spotify"><img src={spotify} style={{width: 150 + 'px', height: 150 + 'px'}}/></a>
        </p>

        <h1 class="nameHeader">
			<span>
				Joshua Hunter
			</span>
        </h1>

        <h2 class="jobTitleHeader">
			<span>
				Computer Scientist
			</span>
        </h2>

        <p class="profileDesc">
          Ambitious and hard-working sophomore computer science student from McKinney, Texas.
          Skilled in software engineering, coding, problem solving, and leadership.
          I am actively seeking a position that I can use my skills and talents to not only grow in this profession,
          but to also be an active contributor and leader to my peers.
        </p>

        <div style={{textAlign: 'center'}}>
          <h3 class="header"><b>EDUCATION</b></h3>
          <h4 style={{fontSize: 140+ '%'}}><b>Baylor University</b></h4>
          <h4>Bachelor of Science, Computer Science</h4>
          <h4>MAY 2023</h4>
          <h4>Current GPA: 3.82</h4>
          <p style={{marginLeft: 20 + '+ '%'', marginRight: 20 + '+ '%''}}><b>Relevant Courses:</b>
            Introduction to Computer Science I, Introduction to Computer Science II,
            Discrete Structures, Computer Systems, Data Structures, Introduction to Algorithms,
            Software Engineering I, Calculus I / II / III, Probability and Statistics
          </p>

          <h3 class="header"><b>EXPERIENCE</b></h3>
          <h4 style={{fontSize: 140+ '%', marginBottom: 0}}><b>Academic Tutor</b></h4>
          <h5 style={{marginBottom: 0, marginTop: 15+ 'px'}}>Baylor University Tutoring Center</h5>
          <h5 style={{marginTop: 15+ 'px'}}>AUGUST 2020 – PRESENT</h5>
          <p style={{marginLeft: 20+ '%', marginRight: 20+ '%', marginTop: 30+ 'px'}}>Virtually tutor students in the subjects of
            Computer Science, Calculus, Religion, Chemistry/Geology, and Mathematics</p>
          <hr size="1" width="25+ '%'" color="#AB6F6F"/>
          <h4 style={{fontSize: 140+ '%', marginBottom: 0}}><b>Academic Tutor</b></h4>
          <h5 style={{marginBottom: 0, marginTop: 15+ 'px'}}>Baylor University Tutoring Center</h5>
          <h5 style={{marginTop: 15+ 'px'}}>AUGUST 2020 – PRESENT</h5>
          <p style={{marginLeft: 20+ '%', marginRight: 20+ '%', marginTop: 30+ 'px'}}>Virtually tutor students in the subjects of
            Computer Science, Calculus, Religion, Chemistry/Geology, and Mathematics</p>

          <h3 class="header"><b>ACTIVITIES</b></h3>
          <h4 style={{fontSize: 130+ '%', marginBottom: 0}}>Theta Tau ΘΤ</h4>
          <h5 style={{fontSize: 80+ '%', marginTop: 5+ 'px'}}><i>Scribe & Treasurer</i></h5>
          <hr size="1" width="25+ '%'" color="#AB6F6F"/>
          <h4 style={{fontSize: 130+ '%'}}>Golden Wave Band</h4>
          <hr size="1" width="25+ '%'" color="#AB6F6F"/>
          <h4 style={{fontSize: 130+ '%'}}>Clarinet Studio</h4>
          <hr size="1" width="25+ '%'" color="#AB6F6F"/>
          <h4 style={{fontSize: 130+ '%'}}>Baylor Wind Ensemble</h4>
          <hr size="1" width="25+ '%'" color="#AB6F6F"/>
          <h4 style={{fontSize: 130+ '%'}}>Baylor Courtside Band</h4>
          <hr size="1" width="25+ '%'" color="#AB6F6F"/>
          <h4 style={{fontSize: 130+ '%'}}>Alpha Lambda Delta Honor Society</h4>

          <h3 class="header"><b>LANGUAGES</b></h3>
          <img src={cpp} style={{width:65+ 'px', height:75+ 'px',marginRight: 20+ 'px'}}/>
          <img src={c} style={{width:75+ 'px', height:75+ 'px'}}/>
          <img src={java} style={{width:75+ 'px', height:75+ 'px',marginRight: 2+ 'px'}}/>
          <img src={py} style={{width:70+ 'px', height:70+ 'px', marginRight: 25+ 'px'}}/>
          <img src={asm} style={{width:65+ 'px', height:65+ 'px', marginRight: 12+ 'px'}}/>
          <img src={html} style={{width:75+ 'px', height:75+ 'px', marginRight: 12+ 'px'}}/>
          <img src={css} style={{width:55+ 'px', height:75+ 'px'}}/>
        </div>
      </div>
  );
}

export default App;
