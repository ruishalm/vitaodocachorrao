import React, { useState } from 'react';
import styles from './GabineteDoPovo.module.css';

const GabineteDoPovo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! (Funcionalidade de envio real não implementada)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={styles.contactPage}>
      <h1>Gabinete do Povo</h1>
      <p className={styles.introText}>
        Sua opinião, sugestão ou dúvida é muito importante para nós. Utilize o formulário abaixo ou
        entre em contato através dos nossos canais.
      </p>

      <div className={styles.contactContent}>
        <section className={styles.contactFormSection}>
          <h2>Envie sua Mensagem</h2>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Assunto:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mensagem:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
          </form>
        </section>

        <section className={styles.contactInfoSection}>
          <h2>Nossos Contatos</h2>
          <div className={styles.infoGroup}>
            <h3>Endereço do Gabinete</h3>
            <p>Assembleia Legislativa de São Paulo</p>
            <p>Av. Pedro Álvares Cabral, 201 - Sala T55, Térreo</p>
            <p>São Paulo - SP, CEP: 04097-900</p>
          </div>
          <div className={styles.infoGroup}>
            <h3>Telefone</h3>
            <p>(11) 3886-6864 / 6865</p>
          </div>
          <div className={styles.infoGroup}>
            <h3>Email</h3>
            <p><a href="mailto:vitaodocachorrao@al.sp.gov.br">vitaodocachorrao@al.sp.gov.br</a></p>
          </div>
          <div className={styles.infoGroup}>
            <h3>Redes Sociais</h3>
            <ul className={styles.socialLinks}>
              <li><a href="https://facebook.com/vitaodocachorrao" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/vitaodocachorrao" target="_blank" rel="noopener noreferrer">Twitter (X)</a></li>
              <li><a href="https://instagram.com/vitaodocachorrao" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GabineteDoPovo;
