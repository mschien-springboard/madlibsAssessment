### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  A front end framework created by facebook developers. Uses "components" that are reusable and also allows you control state changes when rerendering these components. Can be great for organizing the structure of an application and for building single pages applications.

- What is Babel?
  transpiles various languages to work with older browsers, this includes turning JSX into usable js/html.

- What is JSX?
  combines html and js into one language, but needs to be converted to be useable by browser.

- How is a Component created in React?
  you define them as functions (used to be class based) then return the jsx that will be rendered within said function.

- What are some difference between state and props?
  props are static and are passed down into components when they are rendered,  state is mutable and can be changed during different phases of a component life cycle, theres also various ways to use stored state information in multiple components at once vs props that need to be passed on hierarchically 

- What does "downward data flow" refer to in React?
  refers to passing data from parent components to child compontents, like mentioned above.

- What is a controlled component?
  A component that is controlled and dependant on react, react looks for changes in the component and updates when there is input or something is rerendered, the changes can be related to state or various things.

- What is an uncontrolled component?
  A component that isnt dependant on react or state, possibly certain inputs that dont use state like file uploads.

- What is the purpose of the `key` prop when rendering a list of components?
  gives a component a unique key, used when rerendering components which happens constantly. without the key there could be issues rendering things in correct order or performance issues.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  an array index may change making it a bad choice, like if something were added for example.

- Describe useEffect.  What use cases is it used for in React components?
  runs code after the initial render of a component and after each rerender after that. good for api calls, timers possibly.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  creates an object that holds a key of current and an assigned value, doesn't trigger a rerender on change.

- When would you use a ref? When wouldn't you use one?
  commonly used to reference a dom element and reset timers.

- What is a custom hook in React? When would you want to write one?
  custom hooks are normally used when you want to take a common state pattern and reuse it as a seperate file, this file would contain the logic for a custom hook. something like useLocalStorage may be called by many components so you could reuse it.