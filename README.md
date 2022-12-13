# Angular Formation

## Installation

- Installing Angular:

```
$ npm i -g @angular/cli
```

- Checking installed version:

```
$ ng version
```

## First project: Hello world!

- We use the `ng new` command to create a new project in Angular. When executing this command, a new folder will be created containing a directory structure with the necessary files to start a project in this framework:

```
$ ng new hello-world
         [project-name]
```

- Run the application:

```
$ cd hello-world && ng serve

// or 

$ cd hello-world && npm start
```

## Project Calculator

- We use the `ng new` command to create a new project in Angular. When executing this command, a new folder will be created containing a directory structure with the necessary files to start a project in this framework:

```
$ ng new calculator
         [project-name]
```

- Run the application:

```
$ cd calculator && ng serve

// or 

$ cd calculator && npm start
```

### Creating the Calculator module

- The module is created using the following command:

```
$ ng g module calculator

CREATE src/app/calculator/calculator.module.ts
```

### Creating the Calculator component

- The component is created using the following command:

```
$ ng g component calculator/calculator

CREATE src/app/calculator/calculator/calculator.component.css
CREATE src/app/calculator/calculator/calculator.component.html
CREATE src/app/calculator/calculator/calculator.component.spec.ts
CREATE src/app/calculator/calculator/calculator.component.ts 
UPDATE src/app/calculator/calculator.module.ts 
```

### Creating the Calculator service

- The service is created using the following command:

```
$ ng g service calculator/services/calculator

CREATE src/app/calculator/services/calculator.service.spec.ts 
CREATE src/app/calculator/services/calculator.service.ts 
```