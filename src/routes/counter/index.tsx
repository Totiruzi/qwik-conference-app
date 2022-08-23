import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({ count: 0 });
  console.log('Render Root');
  return (
    <div>
      <CounterChild store={store}/>
      <p>
        <button
          onClick$={() => {
            console.log('Click');
            store.count++
          }}
        >
          Click
        </button>
        <button onClick$={() => console.log("ABC")}>Hello</button>
      </p>
    </div>
  );
});

export const CounterChild = component$((props: {store: {count: number}}) => {
  console.log('Render CounterChild');
  return (
    <p>Count: {props.store.count}</p>
  )
});


////////////////////////////////////////////////////////////////////////////////

// export const Counter_onClick = () => store.count++;

// import { useLexicalScope } from "@builder.io/qwik";
// export const Counter_onClick = () => {
//   const [store] = useLexicalScope();
//   store.count++;
// };
