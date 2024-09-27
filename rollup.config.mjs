import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";
import packageJson from "./package.json" assert { type: "json" };
import terser from "@rollup/plugin-terser";
import { visualizer } from "rollup-plugin-visualizer";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          "use client": "",
        },
      }),
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        skip: ["react", "react-dom"], // Don't bundle React and React DOM
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [
          "**/*.test.tsx",
          "**/*.test.ts",
          "**/*.stories.tsx",
          "**/*.stories.ts",
        ],
        declaration: true, // Generate declaration files
        declarationDir: "dist/types", // Output directory for declarations
      }),
      postcss({
        extensions: [".css"],
        inject: false, // No CSS injection into JS
        extract: "styles.css", // Extract CSS to a single file
        minimize: true, // Minify the CSS
      }),
      terser({
        compress: {
          drop_console: true, // Remove console logs
          dead_code: true, // Eliminate dead code
        },
        output: {
          comments: false, // Remove comments from output
        },
      }),
      // visualizer({
      //   // Add this plugin to generate the visual report
      //   filename: "bundle-analysis.html",
      //   open: true,
      //   gzipSize: true, // Show gzip size
      //   brotliSize: true, // Show brotli size
      // }),
    ],
    external: ["react", "react-dom", "react/jsx-runtime", "primereact"], // Externalize dependencies
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/], // Prevent CSS from being included in types bundle
  },
];
