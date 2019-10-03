#!/usr/bin/env node

const path = require('path')
const clipboardy = require('clipboardy');
const argv = require('yargs').argv

const problemPackage = argv._[0];

const execCommand = require('../util/execCommand')

const {devDependencies, dependencies} = require(path.resolve(process.cwd(), 'package.json'));
const problemPackageVersion = {...devDependencies, ...dependencies}[problemPackage]

const nodeVersion = execCommand('node -v');
const npmVersion =  execCommand('npm -v');
const yarnVersion = execCommand('yarn -v');

const report = `${argv._[0]} version : ${problemPackageVersion}
node version : ${nodeVersion}npm version : ${npmVersion}yarn version : ${yarnVersion}`

clipboardy.writeSync(report.toString());
clipboardy.readSync();

console.log(`A copy succeeded!!!👇 

==========
${report}
==========`);
