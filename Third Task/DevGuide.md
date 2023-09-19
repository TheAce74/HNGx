# Developer Guide

Before reading this ensure you go through the [README](./README.md) file

## Technologies Used

- [React](https://react.dev/)
- [Sass](https://sass-lang.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Vite](https://vitejs.dev/)
- [Supabase](https://supabase.com/)
- Others are listed in the [package.json](./package.json) file

## Directory Structure

- **root:** The "root" directory, as its name implies, is the root of the project containing files like the entry file of the project(index.html), the license and readme files, package.json etc.
- **public:** This directory holds global assets that would be referenced directly in the html file e.g. favicons.
- **src:** This directory contains the major directories and files that run the project itself
  - **assets:** This contains project resources like images, videos etc.
  - **components:** This contains generic components not bound to a particular page i.e. they are reusable across the entire project
  - **context:** I opted in for Context API and the useState hook for global state management
  - **hooks:** This contains the custom hooks I used throughout the project
  - **pages:** This contains the files for each page in the site
  - **scss:** This contains the sass style files. I utilized sass partials to ensure my style directory structure is the same with the react directory structure for easy understanding. This also maximizes scalability and modularity.
  - **utils:** This contains the utility scripts that I used throughout the project's codebase

## Happy Coding 🚀
