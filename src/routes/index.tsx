import { component$, useStore, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const state = useStore({
    number: 0,
    updateVisible: false,
    textOne: "Girls",
    textTwo: "All",
    textThree: "Boys",
  });

  const checkTexts = $(() =>
    (state.textOne == "" || state.textOne == " "
      ? (state.textOne = "Girls")
      : (state.textOne = state.textOne))((state.updateVisible = false))
  );

  return (
    <div>
      <div
        class={{
          textsInput: true,
        }}
        style={{
          visibility: state.updateVisible ? `visible` : `hidden`,
        }}
      >
        <input
          value={state.textOne}
          onInput$={(ev) =>
            (state.textOne = (ev.target as HTMLInputElement).value)
          }
        />
        <input
          value={state.textTwo}
          onInput$={(ev) =>
            (state.textTwo = (ev.target as HTMLInputElement).value)
          }
        />
        <input
          value={state.textThree}
          onInput$={(ev) =>
            (state.textThree = (ev.target as HTMLInputElement).value)
          }
        />
        <button onClick$={checkTexts}>OK</button>
      </div>
      <div
        class={{
          container: true,
        }}
        style={{
          visibility: state.updateVisible ? `hidden` : `visible`,
        }}
      >
        <div
          class={{
            item: true,
          }}
          style={{
            "font-size": `${Math.max(-state.number + 30, 30)}px`,
          }}
          onClick$={() => (state.updateVisible = true)}
        >
          {state.textOne}
        </div>
        <div
          class={{
            item: true,
          }}
          style={{
            "font-size": `${130 - Math.abs(state.number)}px`,
          }}
        >
          {state.textTwo}
        </div>
        <div
          class={{
            item: true,
          }}
          style={{
            "font-size": `${Math.max(state.number + 30, 30)}px`,
          }}
        >
          {state.textThree}
        </div>
      </div>
      <input
        style={{
          width: `100%`,
          visibility: state.updateVisible ? `hidden` : `visible`,
        }}
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
