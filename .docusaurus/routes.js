
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags','0cc'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','ec0'),
    routes: [
      {
        path: '/docs/airdrop/metodos',
        component: ComponentCreator('/docs/airdrop/metodos','7f0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/airdrop/wallet',
        component: ComponentCreator('/docs/airdrop/wallet','eb1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/colabs/colabs',
        component: ComponentCreator('/docs/colabs/colabs','341'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/equipo/about-us',
        component: ComponentCreator('/docs/equipo/about-us','ba9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/KanaryCoin',
        component: ComponentCreator('/docs/KanaryCoin','6d2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/proyecto/join-the-team',
        component: ComponentCreator('/docs/proyecto/join-the-team','115'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/proyecto/objectives',
        component: ComponentCreator('/docs/proyecto/objectives','6b7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/proyecto/strategy',
        component: ComponentCreator('/docs/proyecto/strategy','a64'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tokenomics',
        component: ComponentCreator('/docs/Tokenomics','75c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
