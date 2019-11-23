/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "零碎",
  tagline: "弱水三千，只取一瓢",
  url: "https://liujinxing.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "liujinxing", // Usually your GitHub org/user name.
  projectName: "piece", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "零碎",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      links: [
        { to: "blog", label: "博客", position: "left" },
        {
          href: "https://github.com/liujinxing/piece",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} liujinxing.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
