# PicPuzzle

PicPuzzle is a web application that allows you to explore, organize, and interact with your photos. PicPuzzle transforms your image gallery into an immersive experience, where you&apos;re not just a viewer but a curator of your visual stories.

**Live Demo:** [PicPuzzle Live](https://hngxthirdtask.netlify.app/)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration
- User Authentication
- Responsive Image Gallery
- Drag and Drop Functionality
- Multiple Image Loading
- Search/Filter Functionality
- User-friendly Feedback

## Getting Started

Follow these instructions to set up and run PicPuzzle locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) and [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) or any other package manager installed on your computer.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/TheAce74/HNGx.git
   ```

2. Navigate to the project folder:

   ```bash
   cd Third Task
   ```

3. Install dependencies:

   ```bash
   yarn
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access PicPuzzle.

**Note:** Ensure you create an account and get your own API key and url from [Supabase](https://supabase.com/). Create a .env file, save your supabase url in an environment variable called **VITE_SUPABASE_URL** and save your API key in an environment variable called **VITE_SUPABASE_KEY**, else you'll come across a **401 roadblock**.

## Usage

- Register on or login to the platform.
- Enjoy the awesome image gallery
- Filter and reorder images as you deem fit

## Contributing

I welcome contributions from the open-source community to make PicPuzzle even better. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to your fork: `git push origin feature-name`.
5. Create a pull request.

For major changes, please open an issue first to discuss the proposed changes.

## License

This project is licensed under the [MIT License](./LICENSE.md).
