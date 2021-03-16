const parseFunction = require('parse-function');

const parseFunctionApp = parseFunction({ ecmaVersion: 2017 });

class DependencyContainer {
  constructor() {
    this.Dependencies = {};
    this.Factories = {};
  }

  // Register = (name, dependency) => {
  //     this.dependencies[name] = dependency;
  // }
  InitializedFactory = (Name, Factory) => {
    this.Factories[Name] = Factory;
  };
  GetInstance = (Name) => {
    if (!this.Dependencies[Name]) {
      const factory = this.Factories[Name];
      this.Dependencies[Name] = factory && this.InjectFactory(factory);
      if (!this.Dependencies[Name])
        throw new Error(`Cannot find module ${Name}`);
    }
    return this.Dependencies[Name];
  };
  InjectFactory = (factory) => {
    const fnArgs = parseFunctionApp
      .parse(factory)
      .args.map((dependency) => this.GetInstance(dependency));
    return factory.apply(null, fnArgs);
  };
}
module.exports = DependencyContainer;
