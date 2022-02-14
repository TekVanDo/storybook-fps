import { StoryFn as StoryFunction, StoryContext } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";
import { FpsMeter } from 'frame-rate-meter/dist';
let fps: FpsMeter = null;
export const withGlobals = (StoryFn: StoryFunction, context: StoryContext) => {
  const [{ myAddon }] = useGlobals();
  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    // Execute your side effect here
    // For example, to manipulate the contents of the preview
    const selectorId = isInDocs
      ? `#anchor--${context.id} .docs-story`
      : `#root`;

    displayToolState(selectorId, {
      myAddon,
      isInDocs,
    });
  }, [myAddon]);

  return StoryFn();
};

function displayToolState(selector: string, state: any) {
  const rootElement = document.querySelector(selector);
  if (state.myAddon && !fps) {
    fps = new FpsMeter({ theme: 'dark', position: 'topRight', maxFps: 60 });
  } else if (fps !== null) {
    fps.destroy();
    fps = null;
  }
  let preElement = rootElement.querySelector("pre");

  if (!preElement) {
    preElement = document.createElement("pre");
    preElement.style.setProperty("margin-top", "2rem");
    preElement.style.setProperty("padding", "1rem");
    preElement.style.setProperty("background-color", "#eee");
    preElement.style.setProperty("border-radius", "3px");
    preElement.style.setProperty("max-width", "600px");
    rootElement.appendChild(preElement);
  }

  preElement.innerText = `This snippet is injected by the withGlobals decorator.
It updates as the user interacts with the ⚡ tool in the toolbar above.
<FpsView/>
${JSON.stringify(state, null, 2)}
`;
}
