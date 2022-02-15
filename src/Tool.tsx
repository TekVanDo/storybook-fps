import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const [{ fpsMeterAddon }, updateGlobals] = useGlobals();

  const toggleFpsMeter = useCallback(() =>
      updateGlobals({
        fpsMeterAddon: fpsMeterAddon ? undefined : true,
      }), [fpsMeterAddon]);

  return (
    <IconButton key={TOOL_ID} active={fpsMeterAddon} title="Enable fps-meter" onClick={toggleFpsMeter}>
      <Icons icon="cpu"/>
    </IconButton>
  );
};
