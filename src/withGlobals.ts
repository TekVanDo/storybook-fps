import { StoryFn as StoryFunction, StoryContext } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";
import { FpsMeter } from 'frame-rate-meter';
let fps: FpsMeter = null;
export const withGlobals = (StoryFn: StoryFunction, context: StoryContext) => {
  const [{ fpsMeterAddon }] = useGlobals();
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    const selectorId = isInDocs ? `#anchor--${context.id} .docs-story` : `#root`;

    displayToolState(selectorId, { fpsMeterAddon, isInDocs });
  }, [fpsMeterAddon]);

  return StoryFn(undefined, undefined);
};

function displayToolState(selector: string, state: any) {
  if (state.fpsMeterAddon && !fps) {
    // todo change to container
    fps = new FpsMeter({ theme: 'dark', position: 'topRight', maxFps: 60 });
  } else if (fps !== null) {
    fps.destroy();
    fps = null;
  }
}
