/** @type {import('@docusaurus/types').DocusaurusConfig} */

const docsVersions = require('./docs-versions.json');
const pathPrefix = process.env.REACT_APP_DOCUSAURUS_ROOT || ''; // Prefix path of the Docusaurus base URL
const ADD_ROUTER = process.env.ADD_ROUTER; // development option to force inclusion of the router

const scripts = [];
if (ADD_ROUTER) {
  scripts.push('/router.js');
} else if (pathPrefix !== '') {
  scripts.push(`${pathPrefix}/router.js`);
}

// Is this site embedded within the developer portal?
const isEmbedded =
  ADD_ROUTER || process.env.REACT_APP_DOCUSAURUS_ROOT !== undefined;

const siteUrl = isEmbedded ? "https://developer-docs.magicleap.cloud" : "http://localhost:3000/"
// When embedded in developer portal the Navbar does not require title, logo and overview
const navbar = {
  items: [
    {
      type: 'doc',
      docId: 'guides/ml2-overview',
      position: 'left',
      label: 'Guides',
    },
    {
      type: 'dropdown',
      label: 'API',
      position: 'left',
      items: [
        {
          label: 'Unity API',
          type: 'doc',
          docId: 'unity-api/api/index',
        },
        {
          type: 'doc',
          docId: 'api-ref/api/indexpage',
          label: 'Native API',
        },

      ],
    },
    {
      type: 'doc',
      docId: 'releases/releases-overview',
      position: 'left',
      label: 'Releases',
    },
    {
      href: 'https://forum.magicleap.cloud',
      position: 'left',
      label: 'Forum',
    },
    {
      type: 'docsVersionDropdown',
      id: 'docVersion',
      label: 'Version',
      position: 'right',
    },
  ],
};

const footer = {
  style: 'dark',
  copyright: `Copyright © ${new Date().getFullYear()} Magic Leap. Built with Docusaurus.`,
};

module.exports = {
  title: 'MagicLeap Developer Documentation',
  tagline: 'Augmented reality platform for Enterprise',
  url: siteUrl,
  baseUrl: `${pathPrefix}/`,
  baseUrlIssueBanner: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MagicLeap', // Usually your GitHub org/user name.
  projectName: 'developer-portal-docs', // Usually your repo name.
  scripts: scripts,
  trailingSlash: true, // Helps the redirects work more consistently if true.
  themeConfig: {
    prism: {
      additionalLanguages: ['csharp', 'bash', 'ini', 'powershell'],
    },
    algolia: {
      apiKey: 'da65530e307839471aec305bfc49e039',
      indexName: 'crawler_magic-leap-2-developer-docs',
      appId: '85QOK3I3DS',
      contextualSearch: true,
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hide the switch in the navbar
      disableSwitch: true,
    },
    navbar: navbar,
    footer: footer,
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          //  {
          //   to: '/docs/category/getting-started',
          //   from: '/docs/guides/getting-started',
          // },
          {
            from: '/docs/guides/unity/getting-started/set-up-development-environment',
            to: '/docs/guides/unity/getting-started/unity-getting-started'
          },
          {
            from: '/docs/guides/native/capi-getting-started',
            to: '/docs/guides/native/getting-started/native-getting-started'
          },
          {
            from: '/docs/guides/developer-tools/lab-tools/ml2-lab-device-stream',
            to: '/docs/guides/developer-tools/ml-hub/ml-hub-device-stream'
          },
          {
            from: '/docs/guides/developer-tools/lab-tools/ml2-lab-package-manager',
            to: '/docs/guides/developer-tools/ml-hub/ml-hub-package-manager'
          },
          {
            from: '/docs/guides/developer-tools/lab-tools/ml2-lab-device-bridge',
            to: '/docs/guides/developer-tools/ml-hub/ml-hub-device-bridge'
          },
          {
            from: '/docs/guides/developer-tools/lab-tools/ml2-os-installer',
            to: '/docs/guides/developer-tools/ml-hub/ml-hub-os-installer'
          },
          // September 2022 Rebranding
          {
            from: '/docs/guides/developer-tools/lab-tools',
            to: '/docs/guides/developer-tools/ml-hub/magic-leap-hub'
          },
          // October 2022 Rebranding
          {
            from: '/docs/guides/device/wearable-led',
            to: '/docs/guides/device/headset-led'
          },
          {
            from: '/docs/guides/developer-tools/lab-tools/lab-2/',
            to: '/docs/guides/developer-tools/ml-hub/magic-leap-hub'
          },
          //API Changes
          {
            from: '/docs/api-ref/indexpage',
            to: '/docs/api-ref/api/indexpage'
          },
          {
            from: '/docs/unity-api',
            to: '/docs/unity-api/api'
          },
          //Feature changes 12/16/2022
          {
            from: '/docs/guides/features/voice-intent-design-guidelines',
            to: '/docs/guides/features/voice-commands/voice-design-guidelines'
          },
          {
            from: '/docs/guides/features/mapping-tool',
            to: '/docs/guides/features/spaces/spaces-tool'
          },
          {
            from: '/docs/guides/features/comfort-content-placement',
            to: '/docs/guides/best-practices/comfort-content-placement'
          },
          {
            from: '/docs/guides/features/headset-fit',
            to: '/docs/guides/features/eye-tracking/headset-fit'
          },
          {
            from: '/docs/guides/unity/perception/marker-tracking/marker-tracker-overview',
            to: '/docs/guides/unity/marker-tracking/marker-tracker-overview'
          },
          {
            from: '/docs/guides/unity/getting-started/import-unity-packages',
            to: '/docs/guides/unity/getting-started/configure-unity-settings'
          },
          //Moving design guides 
          {
            from: '/docs/guides/best-practices/voice-design-guidelines',
            to: '/docs/guides/features/voice-commands/voice-design-guidelines'
          },
          {
            from: '/docs/guides/best-practices/dimming/dimmer-design-guidelines',
            to: '/docs/guides/features/dimmer-feature/dimmer-design-guidelines'
          },
          {
            from: '/docs/guides/best-practices/dimming/dimming-overview',
            to: '/docs/guides/features/dimmer-feature'
          },
          {
            from: '/docs/guides/device/controller-features',
            to: '/docs/guides/features/controller-features'
          },
          {
            from: '/docs/guides/features/global-segmented-dimming-feature',
            to: '/docs/guides/features/dimmer-feature'
          },
          {
            from: '/docs/guides/features/input/bluetooth/unity-bluetooth-input-walkthrough',
            to: '/docs/guides/features/bluetooth-input'
          },
          {
            from: '/docs/guides/features/media/fov',
            to: '/docs/guides/device/fov'
          },
          // Remote Render
          {
            from: '/docs/guides/remote-rendering/remote-rendering-service',
            to: '/docs/guides/remote-rendering/remote-rendering'
          },
          {
            from: '/docs/guides/features/media/ml-camera',
            to: '/docs/guides/features/ml-camera'
          },
          {
            from: '/docs/guides/features/media/media-codecs',
            to: '/docs/guides/features/media-codecs'
          },
          {
            from: '/docs/guides/unity/permissions/permissions-levels',
            to: '/docs/guides/unity/permissions/requesting-permissions'
          },
          {
            from:'/docs/guides/unity/networking/photon-fusion',
            to: '/docs/guides/third-party/networking/photon-fusion'
          },
          {
            from:`/docs/guides/third-party/ptc`,
            to: '/docs/guides/third-party/networking/photon-fusion'
          },
          // Voice Intent Developer Toolkit
          {
            from: '/docs/guides/features/voice-commands/voice-intents-developer-toolkit',
            to: '/docs/guides/features/voice-commands/voice-intent-development-toolkit'
          },
          {
            from: '/docs/guides/features/spatial-mapping/object-occlusion',
            to: '/docs/guides/features/object-occlusion'
          },
        ],
        
        createRedirects(existingPath) {
          if (existingPath.includes('/docs/api-ref/Data-Structures')||
              existingPath.includes('/docs/api-ref/Files')||
              existingPath.includes('/docs/api-ref/Modules')||
              existingPath.includes('/docs/api-ref/Pages')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/docs/api-ref/', '/docs/api-ref/api/'),
            ];
          }

          if (existingPath.includes('/docs/guides/developer-tools/ml-hub/app-sim')) {
          // Redirect docs/guides/developer-tools/ml-hub/app-sim to docs/guides/developer-tools/app-sim
          return [
            existingPath.replace('/docs/guides/developer-tools/ml-hub/app-sim/', '/docs/guides/developer-tools/app-sim/'),
          ];
        }

          if (existingPath.includes('/docs/unity-api/Classes')||
              existingPath.includes('/docs/unity-api/Files')||
              existingPath.includes('/docs/unity-api/MagicLeap')||
              existingPath.includes('/docs/unity-api/MagicLeap.Core')||
              existingPath.includes('/docs/unity-api/UnityEditor.XR.MagicLeap')||
              existingPath.includes('/docs/unity-api/UnityEditor.XR.OpenXR.Features.MagicLeapSupport')||
              existingPath.includes('/docs/unity-api/UnityEngine.XR.MagicLeap')||
              existingPath.includes('/docs/unity-api/UnityEngine.XR.MagicLeap.Native')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/docs/unity-api/', '/docs/unity-api/api/'),
            ];
          }

          if (existingPath.includes('/docs/guides/device')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/docs/guides/device', '/docs/device-guides'),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
    [
      'ideal-image',
      {
        quality: 80,
        max: 1920, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        // disableInDev: false,
      },
    ],

  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        googleTagManager: {
          containerId: 'GTM-KPZG3CL',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // We do not want any 'Edit this page' links
          editUrl: undefined,
          includeCurrentVersion: true,
          lastVersion: 'current',
          versions: docsVersions,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};


