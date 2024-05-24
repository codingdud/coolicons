const fs = require('fs');
const exec = require('child_process').exec;

const packageJson = require('./package.json');

const dependencies = packageJson.dependencies;

const checkDependency = (dependency) => {
  return new Promise((resolve) => {
    exec(`npm view ${dependency}`, (err) => {
      if (err) {
        resolve(dependency);
      } else {
        resolve(null);
      }
    });
  });
};

const main = async () => {
  const nonExistentDependencies = await Promise.all(
    Object.keys(dependencies).map(checkDependency)
  );

  const toRemove = nonExistentDependencies.filter(Boolean);

  if (toRemove.length > 0) {
    console.log('Removing non-existent dependencies:', toRemove);

    toRemove.forEach((dep) => {
      delete packageJson.dependencies[dep];
    });

    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

    console.log('Updated package.json');
  } else {
    console.log('All dependencies exist');
  }
};

main();
