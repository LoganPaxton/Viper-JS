class ViperInterp {
  constructor() {
    this.variables = {};
  }

  interpret(program) {
    const lines = program.split('\n');

    for (const line of lines) {
      const trimmedLine = line.trim();

      if (trimmedLine !== '') {
        this.execute(trimmedLine);
      }
    }
  }

  execute(statement) {
    const tokens = statement.split(' ');

    const command = tokens[0];

    if (command === 'let') {
      const variableName = tokens[1];
      const value = tokens[3];
      this.variables[variableName] = value;
      
    } else if (command === 'print') {
      const variableName = tokens[1];
      console.log(this.variables[variableName]);
      
    } else {
      console.error("Invalid statement:" + statement)
    }
  }
}

module.exports = ViperInterp;
