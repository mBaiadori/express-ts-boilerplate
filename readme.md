## Run this commands in sequentially (powershell)

yarn init -y

mkdir src ; cd src ; ni index.ts; mkdir main, domain, infra, errors, presentation, utils; cd ../

ni .gitignore, .env, .editorconfig, jest.config.ts, readme.md, .prettierrc.json

yarn add express compression ts-node helmet express-fileupload cors safe-regex tsconfig-paths cross-env

yarn add -D typescript jest @types/jest ts-jest eslint @types/node supertest @types/supertest @types/express ts-node-dev dotenv

tsc --init

yarn run eslint --init

yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint eslint-plugin-import eslint-plugin-import-helpers @typescript-eslint/parser@latest prettier eslint-config-prettier eslint-plugin-prettier
