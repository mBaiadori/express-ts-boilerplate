## Run this commands in sequentially (powershell)

yarn init -y

mkdir src ; cd src ; ni index.ts; mkdir main, domain, infra, errors, presentation, utils; cd ../

ni .gitignore, .env, .editorconfig, jest.config.ts, readme.md

yarn add express compression ts-node helmet express-fileupload cors safe-regex tsconfig-paths

yarn add -D typescript jest @types/jest ts-jest eslint @types/node supertest @types/supertest @types/express ts-node-dev

tsc --init

yarn run eslint --init

yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^7.2.0 eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest prettier eslint-config-prettier eslint-plugin-prettier
