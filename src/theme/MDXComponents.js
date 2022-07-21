import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import { Titulo, Paragrafo } from "../components/Title";
import { Quadro, QuadroFlex } from "../components/Quadro";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  Titulo: Titulo,
  Paragrafo: Paragrafo,
  Quadro: Quadro,
  QuadroFlex: QuadroFlex,
};
