import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';


const HeroBanner = require("@site/static/img/skadi_banner.png").default
const svgList = [
  {
    title: 'bilibili',
    Svg: require('@site/static/img/bilibili.svg').default,
    link: 'https://space.bilibili.com/11966801',
    color: '#00b3ef'
  },
  {
    title: 'github',
    Svg: require('@site/static/img/github.svg').default,
    link: 'https://github.com/Nova-Noir',
  }
]
const buttonList = [
  {
    title: 'Blog',
    to: '/blog'
  },
  {
    title: 'About',
    to: '/about'
  }
]

const Svg = ({ Svg, link, color=''}) => {
  return (
    <a href={link} target='_blank'>
      <Svg className={styles.svg} style={{ fill: color }} />
    </a>
  )
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.hero}>
      <div className={styles.leftComponent}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <h1 className={styles.heroSubtitle}>――{siteConfig.tagline}</h1>
        <p className={styles.heroContent}>
          巨型二次元高手 💨
          <br />
          想写一个好看的主页但是我写了一晚上就这水平, 还在造... ❤
        </p>
        <div className={styles.svgContainer}>
          {svgList.map((item, _) => {
            return <Svg {...item}/>
          })}
        </div>
        <div className={styles.buttonContainer}>
          {buttonList.map((item, _) => {
            return <Link className={"button button--secondary button--lg " + styles.button} to={item.to}>{item.title}</Link>
          })}
        </div>
      </div>
      <div className={styles.rightComponent}>
        <img src={HeroBanner} alt='HeroImg' />
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="blog,novanoir,novano1r,nova,ctf,pwn,博客,">
      <main>
        <HomepageHeader />
      </main>
    </Layout>
  );
}
