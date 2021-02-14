class Programmer {
  constructor(name) {
    this.name = name
  }

  code() {
    console.log(`${this.name} is coding ...`);
  }
}

class Frontend extends Programmer {
  angular() {
    console.log(`${this.name} is creating Angular app ...`);
  }
}

class Backend extends Programmer {
  nodejs() {
    console.log(`${this.name} is programming NodeJS ...`);
  }
}

class Fullstack extends Frontend {
  nodejs() {
    console.log(`${this.name} is programming NodeJS ...`); // Дублирование кода
  }
}

const programmer = new Programmer('Programmer')
programmer.code()

const frontend = new Frontend('Frontend')
frontend.code()
frontend.angular()

const backend = new Backend('Backend')
backend.code()
backend.nodejs()

const fullstack = new Fullstack('Fullstack')
fullstack.code()
fullstack.angular()
fullstack.nodejs()