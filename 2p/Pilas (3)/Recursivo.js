let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };

function sumSalaries(department) {
    if (Array.isArray(department)) { // caso (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // suma del Array
    } else { // caso (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // llama recursivamente a subdepartamentos, suma los resultados
      }
      return sum;
    }
  }
  console.log(company);