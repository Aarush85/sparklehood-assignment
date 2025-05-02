#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const strip = require('strip-comments');

function removeCommentsInDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      removeCommentsInDir(fullPath);
    } else if (fullPath.endsWith('.ts')) {
      const code = fs.readFileSync(fullPath, 'utf-8');
      const noComments = strip(code);
      fs.writeFileSync(fullPath, noComments, 'utf-8');
      console.log(`Removed comments from ${fullPath}`);
    }
  });
}

const srcDir = path.join(__dirname, 'src');
removeCommentsInDir(srcDir); 