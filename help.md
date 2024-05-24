Here, we need to move react to peerDependencies because it’s typically used as a
 peer dependency in library packages. This allows consumers to use one version of
React without conflicts. To do this, add the following lines to your package.json 
and remove React from devDependencies:


npm config get

npm config fix

npm config set //registry.npmjs.org/:_authToken=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