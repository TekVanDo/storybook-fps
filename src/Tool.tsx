import React, { useCallback } from "react";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";
import { useGlobals } from "@storybook/manager-api";

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
