import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
            <div className={styles.buttonsContainer}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/KanaryCoin">
                Documentation 📚
              </Link>
              <span className={styles.buttonSeparator} />
              <Link
                className="button button--secondary button--lg"
                to="https://kanary.site/">
                Homepage 🌍
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

