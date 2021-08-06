module.exports = {
  roots: ["<rootDir>/src"],
  testEnviroment: "node",
  trasnform: {
    ".+\\ts$": "ts-jest",
  },
  moduleNameMapper: { "@/(.*)": "<rootDir>/src/$1" },
};
