/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Button } from "@mui/material";

export function App() {
  return (
    <>
      <Button variant="outlined">MUI Button</Button>
    </>
  );
}

export const MUIButton = /*#__PURE__*/ qwikify$(App);
