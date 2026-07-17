import React, { useEffect } from 'react';
import styles from './InstagramFeed.module.css';

const InstagramFeed: React.FC = () => {
  useEffect(() => {
    const scriptId = 'elfsight-platform-script';
    // Garante que o script seja adicionado apenas uma vez
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className={styles.instagramContainer}>
      <div className="elfsight-app-1de50f68-b39d-47ef-a86f-02ec09142b39" data-elfsight-app-lazy></div>
    </div>
  );
};

export default InstagramFeed;