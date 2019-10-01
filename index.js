#!/usr/bin/env node

const path = require('path')
const execa = require('execa');

const problemPackage = 'cowsay';

const {devDependencies, dependencies} = require(path.resolve(__dirname, 'package.json'));
const problemPackageVersion = {...devDependencies, ...dependencies}[problemPackage]

const execSync = require('child_process').execSync;
const nodeVersion =  execSync('node -v');
const yarnVersion =  execSync('yarn -v');
const npmVersion =  execSync('npm -v');

const report = `package version : ${problemPackageVersion}\nnode version : ${nodeVersion}yarn version : ${yarnVersion}npm version : ${npmVersion}`

// (async () => {
//   const {stdout} = await execa('echo', report);
//   console.log(stdout);
//   //=> 'unicorns'
// })();