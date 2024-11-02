export interface Tool {
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

export const envTools: Tool[] = [
  {
    category: "Essentials",
    name: "Visual Studio Code",
    description:
      "A software that helps you write code, with features like highlighting words and suggesting corrections.",
    url: "https://code.visualstudio.com/download",
    image: "https://code.visualstudio.com/assets/images/code-stable.png",
    installCommands: {
      mac: "brew install --cask visual-studio-code",
      windows: "choco install vscode",
      linux: "sudo snap install code --classic",
    },
  },
  {
    category: "Essentials",
    name: "Git",
    description:
      "A tool that helps you save and track changes to your code, like saving different versions of your work.",
    url: "https://git-scm.com/download",
    image: "https://git-scm.com/images/logo@2x.png",
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
    image: "https://nodejs.org/static/logos/nodejsDark.svg",
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
    image:
      "https://www.docker.com/wp-content/uploads/2023/08/logo-guide-logos-1.svg",
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
    image:
      "https://github.com/npm/logos/blob/master/npm%20logo/npm-logo-black.png?raw=true",
    installCommands: {
      mac: "brew install npm",
      windows: "choco install npm",
      linux: "sudo apt install npm",
    },
  },
  {
    category: "Essentials",
    name: "Python",
    description:
      "A versatile and popular programming language used for web development, data analysis, artificial intelligence, and more.",
    url: "https://www.python.org/downloads/",
    image: "https://www.python.org/static/community_logos/python-logo.png",
    installCommands: {
      mac: "brew install python",
      windows: "choco install python",
      linux: "sudo apt install python3",
    },
  },
];

export const testTools: Tool[] = [
  {
    category: "Dev-Test",
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
];

export const platformTools: Tool[] = [
  {
    category: "Mobile App",
    name: "React Native",
    description:
      "A tool that lets you write one set of code to create apps for both iPhones and Android phones.",
    url: "https://reactnative.dev/docs/environment-setup",
    image: "https://reactnative.dev/img/header_logo.svg",
    installCommands: {
      mac: "npm install -g react-native-cli",
      windows: "npm install -g react-native-cli",
      linux: "npm install -g react-native-cli",
    },
  },
  {
    category: "Mobile App",
    name: "Flutter",
    description:
      "A tool from Google to create smooth and colorful apps for phones, the web, and desktops.",
    url: "https://flutter.dev/docs/get-started/install",
    image:
      "https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg",
    installCommands: {
      mac: "brew install --cask flutter",
      windows: "choco install flutter",
      linux: "snap install flutter --classic",
    },
  },
  {
    category: "Mobile App",
    name: "Android Studio",
    description:
      "A program from Google to make Android phone apps, with tools to design and test the apps.",
    url: "https://developer.android.com/studio",
    image:
      "https://developer.android.com/static/studio/images/android-studio-stable.svg",
    installCommands: {
      mac: "brew install --cask android-studio",
      windows: "choco install android-studio",
      linux: "snap install android-studio --classic",
    },
  },
  {
    category: "Web App - Frontend",
    name: "React",
    description:
      "A tool from Facebook to help make fast, interactive websites by organizing code in a simple way.",
    url: "https://reactjs.org/docs/getting-started.html",
    image: "https://react.dev/images/brand/logo_light.svg",
    installCommands: {
      mac: "npm install -g create-react-app",
      windows: "npm install -g create-react-app",
      linux: "npm install -g create-react-app",
    },
  },
  {
    category: "Platform",
    subcategory: "Desktop App",
    name: "Electron",
    description:
      "A framework for building cross-platform desktop applications with web technologies like JavaScript, HTML, and CSS.",
    url: "https://www.electronjs.org/docs/latest",
    image: "https://www.electronjs.org/assets/img/logo.svg",
    installCommands: {
      mac: "npm install -g electron",
      windows: "npm install -g electron",
      linux: "npm install -g electron",
    },
  },

  {
    category: "Backend",
    name: "Express",
    description:
      "A helper for Node.js that makes creating servers (for handling website data) much simpler and faster.",
    url: "https://expressjs.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    installCommands: {
      mac: "npm install -g express",
      windows: "npm install -g express",
      linux: "npm install -g express",
    },
  },
  {
    category: "Platform",
    subcategory: "Backend",
    name: "FastAPI",
    description:
      "A modern, fast (high-performance) web framework for building APIs with Python, based on standard Python type hints.",
    url: "https://fastapi.tiangolo.com/",
    image: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
    installCommands: {
      mac: "pip install fastapi",
      windows: "pip install fastapi",
      linux: "pip install fastapi",
    },
  },
  {
    category: "Platform",
    subcategory: "Backend",
    name: "Flask",
    description:
      "A lightweight WSGI web application framework in Python, great for simple web applications and RESTful APIs.",
    url: "https://flask.palletsprojects.com/",
    image:
      "https://flask.palletsprojects.com/en/stable/_images/flask-horizontal.png",
    installCommands: {
      mac: "pip install flask",
      windows: "pip install flask",
      linux: "pip install flask",
    },
  },
  {
    category: "Platform",
    subcategory: "Backend",
    name: "Django",
    description:
      "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    url: "https://www.djangoproject.com/download/",
    image:
      "https://static.djangoproject.com/img/logos/django-logo-negative.png",
    installCommands: {
      mac: "pip install django",
      windows: "pip install django",
      linux: "pip install django",
    },
  },
];

export const dbTools: Tool[] = [
  {
    category: "Database",
    subcategory: "SQL",
    name: "PostgreSQL",
    description:
      "A powerful, open-source database system that helps store and manage large amounts of data securely.",
    url: "https://www.postgresql.org/download/",
    image:
      "https://wiki.postgresql.org/images/thumb/a/a4/PostgreSQL_logo.3colors.svg/540px-PostgreSQL_logo.3colors.svg.png",
    installCommands: {
      mac: "brew install postgresql",
      windows: "choco install postgresql",
      linux: "sudo apt install postgresql",
    },
  },
  {
    category: "Database",
    subcategory: "SQL",
    name: "MySQL",
    description:
      "A widely used database system that organizes and stores data, commonly used in web applications.",
    url: "https://dev.mysql.com/downloads/",
    image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
    installCommands: {
      mac: "brew install mysql",
      windows: "choco install mysql",
      linux: "sudo apt install mysql-server",
    },
  },
  {
    category: "Database",
    subcategory: "No-SQL",
    name: "MongoDB",
    description:
      "A popular NoSQL database that stores data in a flexible format, great for handling large and varied datasets.",
    url: "https://www.mongodb.com/try/download/community",
    image:
      "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress",
    installCommands: {
      mac: "brew tap mongodb/brew && brew install mongodb-community",
      windows: "choco install mongodb",
      linux: "sudo apt install -y mongodb",
    },
  },
  {
    category: "Database",
    subcategory: "GUI",
    name: "pgAdmin",
    description:
      "A management tool for PostgreSQL databases, with features for running SQL queries, visualizing data, and more.",
    url: "https://www.pgadmin.org/download/",
    image: "https://www.postgresql.org/media/img/about/press/elephant.png",
    installCommands: {
      mac: "brew install --cask pgadmin4",
      windows: "choco install pgadmin4",
      linux: "sudo apt install pgadmin4",
    },
  },
  {
    category: "Database",
    subcategory: "GUI",
    name: "MongoDB Compass",
    description:
      "An intuitive GUI for MongoDB, allowing users to explore and interact with their MongoDB data.",
    url: "https://www.mongodb.com/try/download/compass",
    image:
      "https://images.contentstack.io/v3/assets/blt7151619cb9560896/blt5b387e6afdd329fb/655cedcc36b54587cdcd5425/compass-search.svg",
    installCommands: {
      mac: "brew install --cask mongodb-compass",
      windows: "choco install mongodb-compass",
      linux: "sudo snap install mongodb-compass",
    },
  },
];
