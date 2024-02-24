import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Polkadot Ecosystem',
    Svg: require('../../static/img/logo_polkadot_200x200.svg').default,
    description: (
      <>
        The Polkadot ecosystem is one of the most pioneering and technologically advanced, but it was missing something
          <code>MEMECOINS</code>
      </>
    ),
  },
  {
    title: 'Best Memecoin',
    Svg: require('../../static/img/logo_kanary_200x200.svg').default,
    description: (
      <>
        No memecoin currently tries to innovate, we are different, we come to change the rules of the game
      </>
    ),
  },
  {
    title: 'Perfect Economy',
    Svg: require('../../static/img/kanary._cuadro.svg').default,
    description: (
      <>
        We are designing an innovative method so that any investor feels comfortable investing in Kanary
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
