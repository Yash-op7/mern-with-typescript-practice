# mern-with-typescript-practice
A responsive MERN stack note taking app with cookie sessions instead of JWT auth built with TS.

# initialization
- mkdir backend frontend
- cd backend; npm init -y
- npm i --save-dev typescript;
- npx tsc --init        // for generating the tsconfig.json
- For TS projects we also need to install a package that contains the type related to a package so that our code works properly and TS knows what types the different functions and variables have, so:
- npm i express
- npm i --save-dev @types/express
