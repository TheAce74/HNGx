# MovieBox

![MovieBox Logo](./src/assets/logoDark.svg)

MovieBox is a web application that allows you to discover and explore a vast collection of movies, TV shows, and more. With MovieBox, you can find information about your favorite films, and watch trailers.

**Live Demo:** [MovieBox Live](https://hngxsecondtask.netlify.app/)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Browse Movies and TV Shows:** Explore a vast database of movies, TV shows, and more.
- **Search:** Find specific content using the search functionality.
- **Movie Details:** Get detailed information about movies, including trailers, genre etc.

## Getting Started

Follow these instructions to set up and run MovieBox locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) and [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) or any other package manager installed on your computer.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/TheAce74/HNGx.git
   ```

2. Navigate to the project folder:

   ```bash
   cd Second Task
   ```

3. Install dependencies:

   ```bash
   yarn
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access MovieBox.

**Note:** Ensure you create an account and get your own API key from [TMBD](https://www.themoviedb.org/). Create a .env file, and save your API key in an environment variable called **VITE_API_KEY**, else you'll come across a **401 roadblock**.

## Usage

- Explore movies and TV shows by browsing, and searching.
- Click on a movie or show to view detailed information, including trailers and genres.
- Enjoy discovering new content!

## Contributing

I welcome contributions from the open-source community to make MovieBox even better. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to your fork: `git push origin feature-name`.
5. Create a pull request.

For major changes, please open an issue first to discuss the proposed changes.

## License

This project is licensed under the [MIT License](./LICENSE.md).
