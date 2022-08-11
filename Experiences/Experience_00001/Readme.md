# Experience 1

![Alt text](../../Documentation/Npm.jpg?raw=true "Documentation")

This example shows the phantom dependencies problem of Npm. A phantom dependencies is the use of a dependencies not listed in the `package.json`. The problem happens because of the way Npm flatten the dependencies upon installation.

In the file `index.js`, I am using the package `minimatch`, `brace-expansion` and `balanced-match`. However, if we look inside the `package.json`, we are only listing the package `minimatch`. We are capable of using `brace-expansion` and `balanced-match` by playing with the flatten concept of Npm. Since `brace-expansion` and `balanced-match` are dependencies of `minimatch`, they have been installed inside the node_modules. They are exactly located at a place where I can using it in my code. There are **phantom dependencies**.

Phantom dependencies can create an error when passing the project to someone else. As the package is not listed in the `package.json`, we are installing and using the version required by the package.json of one of our package listed in the `package.json`. Because of that, if the author of the package we are using update our phantom dependencies, our project might suddenly stop working. As we missed the update of the package, we might endup with an unforseen breaking change.
