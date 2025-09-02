import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/github-quickstart-guide/__docusaurus/debug',
    component: ComponentCreator('/github-quickstart-guide/__docusaurus/debug', 'bb4'),
    exact: true
  },
  {
    path: '/github-quickstart-guide/__docusaurus/debug/config',
    component: ComponentCreator('/github-quickstart-guide/__docusaurus/debug/config', '6c0'),
    exact: true
  },
  {
    path: '/github-quickstart-guide/__docusaurus/debug/content',
    component: ComponentCreator('/github-quickstart-guide/__docusaurus/debug/content', '387'),
    exact: true
  },
  {
    path: '/github-quickstart-guide/__docusaurus/debug/globalData',
    component: ComponentCreator('/github-quickstart-guide/__docusaurus/debug/globalData', 'ac9'),
    exact: true
  },
  {
    path: '/github-quickstart-guide/__docusaurus/debug/metadata',
    component: ComponentCreator('/github-quickstart-guide/__docusaurus/debug/metadata', 'cc0'),
    exact: true
  },
  {
    path: '/github-quickstart-guide/__docusaurus/debug/registry',
    component: ComponentCreator('/github-quickstart-guide/__docusaurus/debug/registry', '8f5'),
    exact: true
  },
  {
    path: '/github-quickstart-guide/__docusaurus/debug/routes',
    component: ComponentCreator('/github-quickstart-guide/__docusaurus/debug/routes', '8e1'),
    exact: true
  },
  {
    path: '/github-quickstart-guide/',
    component: ComponentCreator('/github-quickstart-guide/', '9b4'),
    routes: [
      {
        path: '/github-quickstart-guide/',
        component: ComponentCreator('/github-quickstart-guide/', '5b5'),
        routes: [
          {
            path: '/github-quickstart-guide/',
            component: ComponentCreator('/github-quickstart-guide/', 'c55'),
            routes: [
              {
                path: '/github-quickstart-guide/',
                component: ComponentCreator('/github-quickstart-guide/', 'fec'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
