/* eslint-disable */
import moduleAlias from 'module-alias';
import path from 'path';

// Check the env
const NODE_ENV = process.env.NODE_ENV ?? 'development';

// Configure moduleAlias
if (__filename.endsWith('js')) {
  // Si on est dans dist/config.js, on remonte d'un niveau puis on va dans dist
  const isInDist = __dirname.endsWith('dist');
  const rootDir = isInDist ? path.join(__dirname, '..') : __dirname;

  moduleAlias.addAlias('@src', path.join(rootDir, 'dist'));
}
