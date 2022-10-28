import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const state = useStore({
    number: 0,
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
            "font-size": `${Math.max(-state.number + 30, 30)}px`,
          }}
        >
          Girls
        </div>
        <div
          class={{
            item: true,
          }}
          style={{
            "font-size": `${130 - Math.abs(state.number)}px`,
          }}
        >
          Everyone
        </div>
        <div
          class={{
            item: true,
          }}
          style={{
            "font-size": `${Math.max(state.number + 30, 30)}px`,
          }}
        >
          Boys
        </div>
      </div>
      <input
        style={{ width: `100%` }}
        type="range"
        value={state.number}
        min={-100}
        max={100}
        onInput$={(ev) => {
          state.number = (ev.target as HTMLInputElement).valueAsNumber;
        }}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Singer Chooser",
  meta: [{ name: "apple-mobile-web-app-capable", content: "yes" }],
};
