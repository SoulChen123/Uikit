import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import json from "@rollup/plugin-json";
import pkg from "./clean-package.config.json" assert { type: "json" };

export default {
  input: "src/index.ts",
  output: [
    { file: pkg.replace.main, format: "cjs" },
    { file: pkg.replace.module, format: "es" }
  ],
  external: ["@oxfun/sdk"],
  plugins: [
    url(),
    typescript({
      tsconfig: "tsconfig.json",
      emitDeclarationOnly: true,
      declaration: true,
      declarationDir: "dist"
    }),
    json()
  ]
};
