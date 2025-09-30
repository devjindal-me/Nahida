import Image from 'next/image';

export const History = () => {
  return (
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
  );
};
