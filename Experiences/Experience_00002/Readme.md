# Experience 2

![Alt text](../../Documentation/Npm.jpg?raw=true "Documentation")

This example shows the doppeldangër problem of Npm. This problem manifest when we use a package that is also dependencies of another one.
If you pay close attention to the `package.json`, you will see that:

- we have imported `minimatch` version ^5.1.0
- we have imported two packages `s3glob` and `unglob`

The latest version of a package is always flatten. It means, the latest version of a package will be under the `node_modules` of the project. However, if another version of the same packages is needed as a dependencies of the packages our project need. It will be install under the node_modules inside the package.

This simple idea implies that if we are installing packages that need the same version of a package we are already using under a more recent version, the package will be install twice.

If we go check inside the node_modules after installing `Experience_00002`, we will find the package minimatch of version 5.1.0. The same version has the one in our `package.json`. Now if we check inside the folder `s3glob` and `unglob`, we can find that there is 2 node_modules containing both a package `minimtach` with the exact same version. This is **a doppeldangër**.
