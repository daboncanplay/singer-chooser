import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const state = useStore({
    number: 60,
  });

  return (
    <div>
      <div
        class={{
          container: true,
        }}
      >
        <div
          class={{
            item: true,
          }}
          style={{
            "font-size": `${state.number}px`,
          }}
        >
          Girls
        </div>
        <div
          class={{
            item: true,
          }}
          style={{
            "font-size": `${120 - state.number}px`,
          }}
        >
          Boys
        </div>
      </div>
      <input
        style={{ width: `100%` }}
        type="range"
        value={state.number}
        min={10}
        max={110}
        onInput$={(ev) => {
          state.number = (ev.target as HTMLInputElement).valueAsNumber;
        }}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Singer Chooser",
};
