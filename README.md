# mern-with-typescript-practice
A responsive MERN stack note taking app with cookie sessions instead of JWT auth built with TS.

# initialization
## setting up packages with TS in mind
- mkdir backend frontend
- cd backend; npm init -y
- npm i --save-dev typescript;
- npx tsc --init        // for generating the tsconfig.json
- For TS projects we also need to install a package that contains the type related to a package so that our code works properly and TS knows what types the different functions and variables have, so:
- npm i express
- npm i --save-dev @types/express

## naming conventions and folder structure
- keep all the source code in `src`, everything outside it is for configuration


## package.json and scripts:
- required for some web hostings: "main": "dist/server.js",
- `"dev": "npx tsc; node --env-file .env --watch --trace-warnings dist/server.js"`
or install nodemon and ts-node then do:
- `"dev":"npx nodemon src/server.ts"`
- npm i -D eslint
