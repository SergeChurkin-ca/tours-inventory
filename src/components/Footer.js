import React from 'react';
import '../styles/styles.css'

const Footer = () => {
  return (
    <footer>
      <ul class="social">
        <li>
          <a
            className="tw-ic mr-3 "
            role="button"
            href="https://twitter.com/ChurkinSerge"
            target="blank"
          >
            <i class="fab fa-lg fa-twitter "></i>
          </a>
        </li>

        <li>
          <a
            className="li-ic mr-3"
            role="button"
            href="https://www.linkedin.com/in/sergechurkin/"
            target="blank"
          >
            <i class="fab fa-lg fa-linkedin-in "></i>
          </a>
        </li>

        <li>
          <a
            className="git-ic mr-3 "
            role="button"
            href="https://github.com/sergechurkin-ca"
            target="blank"
          >
            <i class="fab fa-lg fa-github "></i>
          </a>
        </li>

        <li>
          <a
            className="email-ic mr-3"
            role="button"
            href="mailto:sergechurkin@gmai.com"
          >
            <i className="far fa-lg fa-envelope "></i>
          </a>
        </li>
      </ul>
      <p class="trademark ">2020 created by serge churkin <a href="https://serge-web.com">    www.serge-web.com</a>
    </p>
    </footer>
  );
};

export default Footer;
