const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'KANARY | POLKADOT MEMECOIN',
  tagline: '𝙏𝙝𝙚 𝙙𝙚𝙛𝙞𝙣𝙞𝙩𝙞𝙫𝙚 𝙙𝙤𝙘𝙪𝙢𝙚𝙣𝙩𝙖𝙩𝙞𝙤𝙣 𝙛𝙤𝙧 𝙩𝙝𝙤𝙨𝙚 𝙥𝙚𝙤𝙥𝙡𝙚 𝙬𝙝𝙤 𝙬𝙖𝙣𝙩 𝙩𝙤 𝙠𝙣𝙤𝙬 𝙢𝙤𝙧𝙚 𝙖𝙗𝙤𝙪𝙩 𝙩𝙝𝙚 𝙥𝙧𝙤𝙟𝙚𝙘𝙩',
  url: 'https://KanaryCoin.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/BALL1.svg',
  organizationName: 'KanaryCoin', // Usually your GitHub org/user name.
  projectName: 'KanaryCoin.github.io', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/BALL1.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'KanaryCoin',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/kanarytoken',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/memecoinpolkadot',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KanaryCoin. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
