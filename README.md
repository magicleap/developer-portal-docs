# Developer Portal Docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

The Developer Portal Docs application is built on [node.js](https://nodejs.org).
If not already installed, follow the guide for [download and installation of node.js](https://nodejs.org/en/download/) for your platform.
An LTS (long-term support) release is recommended, and at least version 12.22.1 is required.

To install required dependencies of the Docusaurus application, open a terminal in this directory (the repository root) and run:

```console
yarn install --frozen-lockfile
```

## Local Development

To test your changes to the documentation content or the Docusaurus app, open a terminal in this directory and run:

```console
yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.
If, for whatever reason, your browser does not open or if it is unexpectedly closed, you can surf to this URL to find the Docusaurus app:

- [http://localhost:3000/](http://localhost:3000/)

## Authoring Content

Content in Docusaurus is written primarily in [Markdown](https://daringfireball.net/markdown) files in the `docs/` folder of the repository.
Any files with `.md`, `.mdx`, or `.markdown` extensions placed in this folder will be discovered automatically by Docusaurus and added to the sidebar.
These Markdown files may be organized in subfolders, which are presented in the sidebar as nested items with disclosure controls.

The titles and ordering of subfolder sections can be customized in `_category_.json` files in each folder.
Likewise the ordering of pages within a folder can be customized in a special header in each Markdown source file (an extension to the standard Markdown syntax). This repository includes examples of both mechanisms.
In the case of page titles, the first level (`#`) heading of the page is taken as the sidebar title.

### Static Resources

Static resources such as images should be placed in the `static/` folder of the repository (feel free to organize them in further nested subfolders).
They can be referenced in your Markdown files relative to that location, for example, like so:

```markdown
![Docusaurus logo](/img/docusaurus.png)
```

to present the file `docusaurus.png` in the page, that file being located in the repository at `static/img/docusaurus.png`.
Images and other resources are resolved automatically within the `static/` folder, so do not include it in the resource path.

## Build

To generate a static website from your Markdown sources, run:

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Documentation Search

A search function is integrated in the static (off-line) build.
To test this, first build the project as described in the previous subsection.
Then launch the static Docusaurus service using:

```console
yarn serve
```

This "serves" the statically built documentation, which is a different mode of operation to the `run` action that dynamically renders the content and watches for changes to make hot updates.
Point your browser at the configured URL (e.g., [http://localhost:3000/](http://localhost:3000/)) to view the searchable documentation.

IMPORTANT: PLEASE READ THIS NOTICE CAREFULLY BEFORE USING THE MAGIC LEAP 2 DEVELOPER RESOURCES PUBLISHED ON THIS WEBSITE.

Welcome, and thank you for exploring our Magic Leap 2 developer resources. Please note that your use of the ML2 developer resources in this repository is governed by the Magic Leap 2 Software License Agreement, the latest version of which is available at https://www.magicleap.com/software-license-agreement-ml2(the "ML2 LICENSE AGREEMENT").

By downloading any of the ML2 developer resources, YOU REPRESENT YOU HAVE READ, UNDERSTAND, AND AGREE TO BE BOUND BY THE TERMS AND CONDITIONS OF THE ML2 LICENSE AGREEMENT, and the materials contained this repository are deemed SDK Materials (as defined in the ML2 License Agreement). IF YOU DO NOT AGREE TO THE ML2 LICENSE AGREEMENT, THEN YOU MAY NOT CONTINUE WITH THE DOWNLOAD OR USE OF THE DEVELOPER RESOURCES PUBLISHED ON THIS WEBSITE
