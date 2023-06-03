"use client"

import styles from './page.module.css'
import { useState } from 'react';
import axios from 'axios';
import fs from 'fs';

export default function Home() {

  const [name, setName] = useState("");
  const [ra, setRa] = useState("");
  const [converter, setConverter] = useState("");

  // e.preventDefault();

  const qrCodeEncoder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const qrCodeEncoder2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRa(e.target.value);
  };


  async function converterImagemParaBase64(urlImagem: string): Promise<string> {
    try {
      // Fazer a requisição GET para obter a imagem
      const resposta = await axios.get(urlImagem, { responseType: 'arraybuffer' });
  
      // Converter o buffer da imagem para base64
      const imagemBase64 = Buffer.from(resposta.data).toString('base64');
      const imagemUrl = `data:${resposta.headers['content-type']};base64,${imagemBase64}`;
      return imagemUrl;
    } catch (erro) {
      console.error('Erro ao obter a imagem do servidor remoto:', erro);
      return '';
    }
  }
  
  const urlImagem = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${name}:${ra}`;
  converterImagemParaBase64(urlImagem).then((imagemUrl) => {
  console.log(imagemUrl);
  setConverter(imagemUrl)
});

  return (
    <div className={styles.App}>
    <header className={styles.header}>
        <img src="https://www.fasipecuiaba.com.br/template/topo/logo/logotopo.png?v=5750" alt="Logo FASIPE" className={styles.logo}/>
    </header>


    <section className={styles.sectionContainer}>
        <h2 className={styles.h2}> Gerar Qr code</h2>

        <a href={converter} download>
          <img src={converter} alt=""  className={styles.img}/>
        </a>

        <div   id="inf"  className={styles.inf}>
          <div className={styles.inf2}>
            <p className={styles.p}>Nome:</p>
            <input onChange={qrCodeEncoder} className={styles.input} type="text" name="name" id="name" />
          </div>
          <div className={styles.inf2}>
            <p className={styles.p}>ra:</p>
            <input onChange={qrCodeEncoder2} className={styles.input} type="text" name="ra" id="ra" />

          </div>
          <button 
          className={styles.button}
          type="button">
            Clique na imagem para baixar o QRcode
          </button>
        </div>

    </section>
</div>
  )
}

