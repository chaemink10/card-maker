<<<<<<< HEAD
import React from 'react';
import style from './footer.module.css';

const Footer = (props) => (
  <footer className={style.footer}>Code your dream</footer>
);
=======
import React, { memo } from 'react';
import style from './footer.module.css';

const Footer = memo(() => (
  <footer className={style.footer}>Code your dream</footer>
));
>>>>>>> parent of 12f1372... Updates

export default Footer;
