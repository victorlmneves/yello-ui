module.exports = {
  bundler: '@vuepress/bundler-vite',
  title: 'Yello UI Library',
  themeConfig: {
    // darkMode: false,
    sidebar: [
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/DekpButton.md',
          '/components/DekpInput.md',
          '/components/DekpTextarea.md'
        ]
      }
    ]
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
  ],
}