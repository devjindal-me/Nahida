import Image from 'next/image';

export const Hero = () => {
  return (
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
  );
};
