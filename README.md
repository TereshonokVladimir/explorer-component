# File Explorer React App

This project is a simple file explorer application built with React and TypeScript. It allows users to navigate through a folder hierarchy and view the contents of files. The application supports plain text files and images.

## Features

- **Folder Hierarchy**: Navigate through nested folders.
- **File List**: View the list of files and folders in the selected directory.
- **File Viewer**: Display the contents of plain text files and images.
- **Dynamic Icons**: Different icons for folders, text files, and image files.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- npm or yarn package manager.

### Installation

1. Clone the repository:
   ```bash
    git clone https://github.com/yourusername/file-explorer.git

2. Navigate to the project directory:
   ```bash
    cd file-explorer

3. Install the dependencies:
   ```bash
    npm install or yarn install


### Usage

1. To run the app in the development mode, use the following command:
    ```bash
    npm start
    or
    yarn start

  Open http://localhost:3000 to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

2. Building for Production
    ```bash
    npm build
    or
    yarn build

  The build artifacts will be stored in the build folder.

### Project Structure 

    src/
    ├── components/
    │   ├── explorer-component/
    │   │   ├── explorer-component.tsx
    │   │   ├── explorer-component.module.css
    │   ├── file-list/
    │   │   ├── file-list.tsx
    │   │   ├── file-list.module.css
    │   ├── folder-hierarchy/
    │   │   ├── folder-hierarchy.tsx
    │   │   ├── folder-hierarchy.module.css
    ├── data/
    │   ├── mock-data.ts
    ├── types/
    │   ├── file.ts
    │   ├── folder.ts
    ├── App.tsx
    ├── index.tsx

> components/: Contains the main components of the application.
> data/: Contains mock data used for the file explorer.
> types/: Contains TypeScript type definitions.
> App.tsx: The main app component.
> index.tsx: The entry point of the application.

### Contributing

- Contributions are always welcome! Please feel free to submit a Pull Request.

### Contact

- Tereshonok Volodymyr - tereshonokvova@gmail.com

- Project Link: https://github.com/TereshonokVladimir/file-explorer