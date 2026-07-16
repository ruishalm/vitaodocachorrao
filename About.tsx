import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      <h1>Vitão do Cachorrão: O Deputado do Povo</h1>
      <p className={styles.introText}>
        Conheça a história, a luta e o compromisso de Vitão do Cachorrão, um homem que veio do povo e trabalha para o povo.
      </p>

      <section className={styles.sectionCard}>
        <h2>Minha História</h2>
        <p>
          Vitor Alexandre Rodrigues nasceu em Sorocaba em 4 de fevereiro de 1977. Filho de Vera Eunice Antunes e Rubens Rodrigues, é casado com Camila e pai de duas filhas, a Paola e a Julia. Durante muitos anos trabalhou como servente de pedreiro, até montar um comércio no Jardim Zulmira, na Zona Oeste de Sorocaba, um carrinho de cachorro-quente.
        </p>
        <p>
          No Vitão Lanches, Vitor Alexandre Rodrigues se tornou o Vitão do Cachorrão (Cachorrão é o nome dado ao cachorro-quente na região de Sorocaba) e iniciou um trabalho social com a comunidade da região, bem como a da Zona Norte onde reside.
        </p>
      </section>

      <section className={styles.sectionCard}>
        <h2>Trajetória Política</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <h3>2008 - Candidato a Vereador</h3>
            <p>Concorreu a uma vaga na Câmara Municipal de Sorocaba pelo PSDC, obtendo 1.489 votos.</p>
          </div>
          <div className={styles.timelineItem}>
            <h3>2012 - Segunda Tentativa</h3>
            <p>Pelo PRB, conseguiu 3.975 votos, sendo o 14º mais votado, mas não conquistou vaga por conta do coeficiente eleitoral.</p>
          </div>
          <div className={styles.timelineItem}>
            <h3>2016 - Eleito Vereador</h3>
            <p>Pelo MDB, foi eleito com 7.555 votos, o quarto vereador mais votado de Sorocaba.</p>
          </div>
          <div className={styles.timelineItem}>
            <h3>2020 - Vereador Mais Votado</h3>
            <p>Fez história e foi o vereador mais votado na cidade com 7.754 votos.</p>
          </div>
          <div className={styles.timelineItem}>
            <h3>2022 - Deputado Estadual</h3>
            <p>Seu trabalho foi reconhecido mais uma vez, sendo eleito Deputado Estadual pelo partido Republicanos, com 56.729 votos.</p>
          </div>
        </div>
      </section>

      <section className={styles.sectionCard}>
        <h2>Compromisso Social</h2>
        <p>
          Vitão do Cachorrão se destaca pela luta da qualidade de vida das pessoas de baixa renda da periferia, saúde e moradia digna.
        </p>
        <p>
          Ele já atendeu mais de 30 mil pessoas em seu Escritório do Povo, localizado na entrada do Jardim Nova Esperança, periferia de Sorocaba e, agora, no Parlamento paulista deseja expandir a sua atuação aos municípios paulistas.
        </p>
      </section>

    </div>
  );
};

export default About;
