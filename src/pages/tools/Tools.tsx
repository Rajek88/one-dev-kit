interface Tool {
  category: string;
  subcategory?: string;
  name: string;
  description: string;
  url: string;
  image: string;
  installCommands: {
    mac: string;
    windows: string;
    linux: string;
  };
}

export const tools: Tool[] = [
  {
    category: "Essentials",
    name: "Git",
    description:
      "A tool that helps you save and track changes to your code, like saving different versions of your work.",
    url: "https://git-scm.com/download",
    image: "/images/git.png",
    installCommands: {
      mac: "brew install git",
      windows: "choco install git",
      linux: "sudo apt install git",
    },
  },
  {
    category: "Essentials",
    name: "Node.js",
    description:
      "A program that helps you run JavaScript (a coding language) outside of a browser, so you can create apps with it.",
    url: "https://nodejs.org/en/download/",
    image: "/images/nodejs.png",
    installCommands: {
      mac: "brew install node",
      windows: "choco install nodejs",
      linux: "sudo apt install nodejs",
    },
  },
  {
    category: "Essentials",
    name: "Docker",
    description:
      'A tool that packages all parts of an app so it works the same on any computer, like a "to-go" box for software.',
    url: "https://www.docker.com/products/docker-desktop/",
    image: "/images/docker.png",
    installCommands: {
      mac: "brew install --cask docker",
      windows: "choco install docker-desktop",
      linux: "sudo apt install docker",
    },
  },
  {
    category: "Essentials",
    name: "npm",
    description:
      "A place to find and download code tools for JavaScript; it helps you install and manage these tools easily.",
    url: "https://www.npmjs.com/get-npm",
    image: "/images/npm.png",
    installCommands: {
      mac: "brew install npm",
      windows: "choco install npm",
      linux: "sudo apt install npm",
    },
  },
  {
    category: "Productivity",
    name: "Visual Studio Code",
    description:
      "A software that helps you write code, with features like highlighting words and suggesting corrections.",
    url: "https://code.visualstudio.com/download",
    image: "/images/vscode.png",
    installCommands: {
      mac: "brew install --cask visual-studio-code",
      windows: "choco install vscode",
      linux: "sudo snap install code --classic",
    },
  },
  {
    category: "Productivity",
    name: "Postman",
    description:
      "A tool that helps you test and send data to servers, like checking if a login page works.",
    url: "https://www.postman.com/downloads/",
    image: "/images/postman.png",
    installCommands: {
      mac: "brew install --cask postman",
      windows: "choco install postman",
      linux: "sudo snap install postman",
    },
  },
  {
    category: "Productivity",
    name: "ESLint",
    description:
      "A tool that checks your JavaScript code for errors, like a spelling checker for coding.",
    url: "https://eslint.org/docs/latest",
    image: "/images/eslint.png",
    installCommands: {
      mac: "npm install -g eslint",
      windows: "npm install -g eslint",
      linux: "npm install -g eslint",
    },
  },
  {
    category: "Platform",
    subcategory: "Mobile App",
    name: "React Native",
    description:
      "A tool that lets you write one set of code to create apps for both iPhones and Android phones.",
    url: "https://reactnative.dev/docs/environment-setup",
    image: "/images/react-native.png",
    installCommands: {
      mac: "npm install -g react-native-cli",
      windows: "npm install -g react-native-cli",
      linux: "npm install -g react-native-cli",
    },
  },
  {
    category: "Platform",
    subcategory: "Mobile App",
    name: "Flutter",
    description:
      "A tool from Google to create smooth and colorful apps for phones, the web, and desktops.",
    url: "https://flutter.dev/docs/get-started/install",
    image: "/images/flutter.png",
    installCommands: {
      mac: "brew install --cask flutter",
      windows: "choco install flutter",
      linux: "snap install flutter --classic",
    },
  },
  {
    category: "Platform",
    subcategory: "Mobile App",
    name: "Android Studio",
    description:
      "A program from Google to make Android phone apps, with tools to design and test the apps.",
    url: "https://developer.android.com/studio",
    image: "/images/android-studio.png",
    installCommands: {
      mac: "brew install --cask android-studio",
      windows: "choco install android-studio",
      linux: "snap install android-studio --classic",
    },
  },
  {
    category: "Platform",
    subcategory: "Web App - Frontend",
    name: "React",
    description:
      "A tool from Facebook to help make fast, interactive websites by organizing code in a simple way.",
    url: "https://reactjs.org/docs/getting-started.html",
    image: "/images/react.png",
    installCommands: {
      mac: "npm install -g create-react-app",
      windows: "npm install -g create-react-app",
      linux: "npm install -g create-react-app",
    },
  },
  {
    category: "Platform",
    subcategory: "Backend",
    name: "Express",
    description:
      "A helper for Node.js that makes creating servers (for handling website data) much simpler and faster.",
    url: "https://expressjs.com/",
    image: "/images/express.png",
    installCommands: {
      mac: "npm install -g express",
      windows: "npm install -g express",
      linux: "npm install -g express",
    },
  },
];
