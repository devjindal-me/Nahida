import Image from 'next/image';

export const Profile = () => {
  return (
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
  );
};
