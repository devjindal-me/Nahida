'use client';

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scroll for navigation links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Intersection Observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('fade-in-section');
      observer.observe(section);
    });

    return () => {
      document.removeEventListener('click', handleClick);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Image src="/assets/logo.svg" alt="logo" width={200} height={50} />
          <nav className="header-menu">
            <a href="#profile">Profile</a>
            <a href="#history">History</a>
            <a href="#skills">Skills</a>
          </nav>
          <a href="https://devjindal.me" id="port-link">My Portfolio</a>
        </div>
      </header>

      <section className="intro" id="intro">
        <div className="intro-container">
          <Image 
            src="/assets/nahida.webp" 
            alt="Nahida" 
            className="intro-img"
            width={800}
            height={600}
            priority
          />
          <div className="main-container">
            <h1 className="main-title">Nahida</h1>
            <p className="main-subtitle">The Dendro Archon</p>
          </div>
        </div>
      </section>

      <section className="profile" id="profile">
        <div className="profile-container">
          <Image 
            className="profile-img" 
            src="/assets/arana.webp" 
            alt="Arana" 
            width={100} 
            height={100}
          />
          <p className="profile-p">
            Nahida is a playable 5 star dendro character in <strong>Genshin Impact</strong>, and the current <strong>Dendro Archon</strong>. 
            <br /><br /> 
            Having been freed from her extensive confinement in the <strong>Sanctuary of Surasthana</strong>, she now strives to have a stronger presence in <strong>Sumeru</strong>.
            <br />✦
          </p>
          <Image 
            className="profile-img2" 
            src="/assets/aranara-2.webp" 
            alt="Aranara" 
            width={100} 
            height={100}
          />
        </div>
      </section>

      <section className="history" id="history">
        <div className="history-container">
          <Image 
            src="/assets/nahida-bg.jpg" 
            alt="nahida background" 
            width={600} 
            height={800}
          />
          <div className="history-info">
            <h2 className="history-h2">History</h2>
            <p className="history-p">
              Lesser Lord Kusanali, also known by her Goetic name Buer, is the <strong>God of Wisdom</strong> and the current <strong>Dendro Archon</strong> among <strong>The Seven</strong> who presides over <strong>Sumeru</strong>.
            </p>
            <p className="history-p-alt">
              She is also the new incarnation of the previous Dendro Archon, <strong>Greater Lord Rukkhadevata</strong>, who created her from the purest branch of <strong>Irminsul</strong> in order to be her successor. She currently resides in her vessel as Nahida.
            </p>
            <p className="history-p">
              She is the youngest and among the newest of The Seven, having risen to this position following the death of Greater Lord Rukkhadevata during the <strong>cataclysm</strong> five hundred years ago.
            </p>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="skills-container">
          <h1 className="skills-h1">Skills <span>/ Passives</span> </h1>
          <ul className="skills-ul">
            <li>Catalyst</li>
            <li>Dendro</li>
            <li>DPS | Sub-DPS</li>
          </ul>

          {/* normal attack */}
          <div className="skill-container">
            <Image 
              className="skill-icon" 
              src="/assets/normal-attack.webp" 
              alt="normal attack" 
              width={80} 
              height={80}
            />
            <div className="skill-info">
              <span className="skill-type">Normal attack</span>
              <h2 className="skill-name">Akara</h2>
              <p className="skill-p">
                Performs up to 4 attacks that deal Dendro DMG to opponents in front of her.
                <br /><br />
                <span>Charged Attack</span> <br />
                Consumes a certain amount of Stamina to deal <strong>AoE Dendro DMG</strong> to opponents in front of her after a short casting time.
                <br /><br />
                <span>Plunging Attack</span> <br />
                Calling upon the might of Dendro, Nahida plunges towards the ground from mid-air, damaging all opponents in her path. Deals <strong>AoE Dendro DMG</strong> upon impact with the ground.
              </p>
            </div>
          </div>

          {/* elemental skill */}
          <div className="skill-container">
            <Image 
              className="skill-icon" 
              src="/assets/elemental-skill.webp" 
              alt="elemental skill" 
              width={80} 
              height={80}
            />
            <div className="skill-info">
              <span className="skill-type">Elemental Skill</span>
              <h2 className="skill-name">All Schemes to Know</h2>
              <p className="skill-p">
                <span>Press</span> <br />
                Sends forth karmic bonds of wood and tree from her side, dealing <strong>AoE Dendro DMG</strong> and marking up to 8 opponents hit with the Seed of Skandha.When held, this skill will trigger differently.
                <br /><br />
                <span>Hold</span> <br />
                Enters Aiming Mode, which will allow you to select a limited number of opponents within a limited area. During this time, Nahida&apos;s resistance to interruption will be increased.When released, this skill deals <strong>Dendro DMG</strong> to these opponents and marks them with the Seed of Skandha.Aiming Mode will last up to 5s and can select a maximum of 8 opponents.
                <br /><br />
                <span>Seed of Skandha</span> <br />
                Opponents who have been marked by the Seed of Skandha will be linked to one another up till a certain distance.After you trigger Elemental Reactions on opponents who are affected by the Seeds of Skandha or when they take DMG from Dendro Cores (including Burgeon and Hyperbloom DMG), Nahida will unleash Tri-Karma Purification on the opponents and all connected opponents, dealing <strong>Dendro DMG</strong> based on her ATK and Elemental Mastery. You can trigger at most 1 Tri-Karma Purification within a short period of time.
              </p>
            </div>
          </div>

          {/* elemental burst */}
          <div className="skill-container">
            <Image 
              className="skill-icon" 
              src="/assets/normal-attack.webp" 
              alt="elemental burst" 
              width={80} 
              height={80}
            />
            <div className="skill-info">
              <span className="skill-type">Elemental Burst</span>
              <h2 className="skill-name">Illusory Heart</h2>
              <p className="skill-p">
                Manifests the Court of Dreams and expands the Shrine of Maya. <br />
                When the Shrine of Maya field is unleashed, the following effects will be separately unleashed based on the Elemental Types present within the party.
                <br /><br />
                <Image className="pyro" src="/assets/pyro.svg" alt="pyro" width={20} height={20} />
                <span className="pyro-span"><strong>pyro: </strong>Nahida remains within the Shrine of Maya, the DMG dealt by Tri-Karma Purification from &quot;All Schemes to Know&quot; is increased.</span>
                <br />
                <Image className="electro" src="/assets/electro.svg" alt="electro" width={20} height={20} />
                <span className="electro-span"><strong>electro: </strong>While Nahida remains within the Shrine of Maya, the DMG dealt by Tri-Karma Purification from &quot;All Schemes to Know&quot; is increased.</span>
                <br />
                <Image className="hydro" src="/assets/hydro.svg" alt="hydro" width={20} height={20} />
                <span className="hydro-span"><strong>hydro: </strong>While Nahida remains within the Shrine of Maya, the DMG dealt by Tri-Karma Purification from &quot;All Schemes to Know&quot; is increased.</span>
                <br /><br />
                If there are at least 2 party members of the aforementioned Elemental Types present when the field is deployed, the aforementioned effects will be increased further.
                <br /><br />
                Even if Nahida is not on the field, these bonuses will still take effect so long as party members are within the Shrine of Maya.
              </p>
            </div>
          </div>
          <Image className="skill-deco" src="/assets/deco.svg" alt="decoration" width={200} height={200} />
        </div>
      </section>

      <footer className="footer">
        <p className="footer-p">
          Project by <a href="https://github.com/devjindal-me">Dev Jindal</a> on GitHub.<br />
          Game and character by <a href="https://genshin.hoyoverse.com/en/home?utm_source=fab&utm_medium=home">Genshin Hoyoverse</a>.
        </p>
      </footer>
    </>
  );
}