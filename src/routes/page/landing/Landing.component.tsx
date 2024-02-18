import React from 'react';
import Image from 'components/image';
import styles from './Landing.module.scss';

const {
  wrapper,
  landing,
  landingText,
  landingImage,
  landingNavigationWrapper,
} = styles;

export default function Landing(): JSX.Element {
  return (
    <div className={wrapper}>
      <div className={landing}>
        <div className={landingText}>
          <h1>Form PWA</h1>
          <p>
            Designed to make form submission easy.
            <br />
            This app is NOT production ready and is for testing purposes only.
          </p>
        </div>
        <div className={landingNavigationWrapper}>
          <a href="https://marcustwilson.com/" target="_blank" rel="noreferrer">
            Learn about the Developer
          </a>
          <p>Privately developed by Marcus</p>
        </div>
        <Image
          className={landingImage}
          src="/assets/landing.png"
          alt="Desktop & Mobile PWA Application"
          width="450px"
          height="310px"
        />
      </div>
    </div>
  );
}
