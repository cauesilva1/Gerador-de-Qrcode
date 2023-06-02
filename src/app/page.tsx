"use client"

import styles from './page.module.css'
import { useState } from 'react';

export default function Home() {

  const [name, setName] = useState("");
  const [ra, setRa] = useState("");

  const handleDownload = () => {
    // Lógica para obter o link do arquivo
    let fileLink = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${name}:${ra}`;
    
  //   // Criar um link de download
    const downloadLink = document.createElement('a');
    downloadLink.href = fileLink;
    downloadLink.download = `${name}-Qrcode.pdf`; // Nome do arquivo para download

  //   // Simular o clique no link de download
    downloadLink.click();
    
  };

  // e.preventDefault();

  const qrCodeEncoder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const qrCodeEncoder2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRa(e.target.value);
  };

  return (
    <div className={styles.App}>
    <header className={styles.header}>
        <img src="https://www.fasipecuiaba.com.br/template/topo/logo/logotopo.png?v=5750" alt="Logo FASIPE" className={styles.logo}/>
    </header>
    <section className={styles.sectionContainer}>
        <h2 className={styles.h2}> Gerar Qr code</h2>

      <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${name}:${ra}`} alt=""  className={styles.img}/>

      {/* <a href="https://www.w3schools.com/images/myw3schoolsimage.jpg" download="proposed_file_name">Download</a> */}

        <form   id="inf"  className={styles.inf}>
          <div className={styles.inf2}>
            <p className={styles.p}>Nome:</p>
            <input onChange={qrCodeEncoder} className={styles.input} type="text" name="name" id="name" />
          </div>
          <div className={styles.inf2}>
            <p className={styles.p}>ra:</p>
            <input onChange={qrCodeEncoder2} className={styles.input} type="text" name="ra" id="ra" />

          </div>
          <button 
          onClick={handleDownload}
          className={styles.button}
          type="submit" >
            Download QR code
          </button>
        </form>



    </section>
</div>
  )
}
function saveAs(url: string, teste: string) {
  throw new Error('Function not implemented.');
}

