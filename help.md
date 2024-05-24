Here, we need to move react to peerDependencies because it’s typically used as a
 peer dependency in library packages. This allows consumers to use one version of
React without conflicts. To do this, add the following lines to your package.json 
and remove React from devDependencies: