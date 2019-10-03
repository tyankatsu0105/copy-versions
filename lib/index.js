#!/usr/bin/env node

const path = require('path')
const clipboardy = require('clipboardy');

const problemPackage = 'cowsay';

const execCommand = require('../util/execCommand')

const {devDependencies, dependencies} = require(path.resolve(process.cwd(), 'package.json'));
const problemPackageVersion = {...devDependencies, ...dependencies}[problemPackage]

const nodeVersion = execCommand('node -v');
const yarnVersion = execCommand('yarn -v');
const npmVersion =  execCommand('npm -v');

const report = `package version : ${problemPackageVersion}
node version : ${nodeVersion}yarn version : ${yarnVersion}
npm version : ${npmVersion}`

clipboardy.writeSync(report.toString());

clipboardy.readSync();

