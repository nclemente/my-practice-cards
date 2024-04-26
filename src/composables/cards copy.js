const safe = text => text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
const pre = text => `<pre>${ safe ( text ) }</pre>`

const all_cards = [
  // {
  //   question: `Who's the best?`,
  //   answer: `[It is )?Noliani`,
  // },

  // Creating a Vue Application
  {
    question: `How can you create a new Vue project with NPM?`,
    answer: `<pre>npm create vue@latest</pre>`,
  },
  {
    question: `What does SFC stands for?`,
    answer: `Single-File Component`,
  },
  {
    question: `What's the official Vue project scaffolding tool called?`,
    answer: `<pre>create-vue</pre>`,
  },
  {
    question: `With what API is ${ pre('<script setup>') } used?`,
    answer: `Composition API`,
  },
  {
    question: `What script tag is used to use Vue directly from a CDN?`,
    answer: `${ pre('<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>') }`,
  },
  {
    question: `The Vue CDN version is good for:`,
    answer: `enhancing static HTML or integrating with a backend framework`,
  },
  {
    question: `You cannot use ______ with Vue CDN version`,
    answer: `Single-File Component syntax`,
  },
  {
    question: `Every Vue application starts by creating a new:`,
    answer: `application instance, in the form of <pre>const app = createApp(App)</pre>`,
  },
  {
    question: `How do you create a new Vue application instance`,
    answer: `<pre>const app = createApp(App)</pre>`,
  },
  {
    question: `<pre>import App from './App.vue'</pre> is usually the ______ of a Vue application`,
    answer: `root component`,
  },
  {
    question: `How do you pass the root component <pre>import App from './App.vue'</pre> to create a new Vue application`,
    answer: `<pre>createApp(App)</pre>`,
  },
  {
    question: `How do you mount the Vue application <pre>const app = createApp(App)</pre> into the container element ${ pre('<div id=\"app\"></div>' ) }`,
    answer: `<pre>app.mount('#app')</pre>`,
  },
  {
    question: `Should the .mount() method be called <b>before</b> or <b>after</b> all app configurations and asset registrations are done?`,
    answer: `after`,
  },

  // Reactivity

  {
    question: `Using what function is the recommended way to declare reactive state?`,
    answer: `<pre>ref()</pre>`,
  },
  {
    question: `How does the <b>ref()</b> function returns its argumnet?`,
    answer: `It returns wrapped within a <b>ref</b> object`,
  },
  {
    question: `Where is the argument object stored in a <b>ref</b> object?`,
    answer: `In the <pre>.value</pre> property`,
  },
  {
    question: `It is not needed to append <b>.value</b> when using the ref in the template becuase refs are ______  when used inside templates`,
    answer: `automatically unwrapped`,
  },
  {
    question: `You can mutate a ref directly in event handlers inside templates becuase refs are ______  when used inside templates`,
    answer: `automatically unwrapped`,
  },
  {
    question: `Name the <b>alternative</b> way to declare reactive state`,
    answer: `<pre>reactive()</pre>`,
  },
  {
    question: `What data types cannot be used with <b>reactive()</b>`,
    answer: `primitive types like string, number or boolean`,
  },
  {
    question: `What happens to the individual variables when a reactive() object is destructured: <pre>let { count } = reactive({ count: 0 })</pre>?`,
    answer: `They lose reactivity`,
  },
  {
    question: `What happens to a reactive() variable when the value/object is replaced/re-assigned?<br /><pre>let state = reactive({ count: 0 })<br />state = reactive({ count: 1 })</pre>`,
    answer: `It loses reactivity`,
  },

  // Computed

  {
    question: `A ________ property automatically tracks its reactive dependencies.`,
    answer: `<pre>computed()</pre>`,
  },
  {
    question: `A computed property automatically tracks only dependencies inside of it that are:`,
    answer: `reactive`,
  },
  {
    question: `The results of a computed property are _______, so that it will only re-evaluate when some of its reactive dependencies have changed`,
    answer: `cached`,
  },
  {
    question: `Does a computed property has to run the getter function every time it's called?`,
    answer: `No, it's value is cached`,
  },
  {
    question: `Why will this computed property never update? <pre>const now = computed(() => Date.now())</pre>`,
    answer: `Because <pre>Date.now()</pre> is not a reactive dependency`,
  },
  {
    question: `What is the alternative to a computed property when you don't want to use caching?`,
    answer: `a method call`,
  },
  {
    question: `If you attempt to assign a new value to a computed property, you will receive a:`,
    answer: `runtime warning`,
  },
  {
    question: `In order to be able to assign a value to a computed property, you need to provide a:`,
    answer: `setter function`,
  },
  {
    question: `What could be considered as <i>side-effects</i> inside a getter function?`,
    answer: `<pre><ul><li>Mutating other state</li><li>Making async requests</li><li>Mutating the DOM</li></ul></pre>`,
  },
  {
    question: `A computed return value should be treated as:`,
    answer: `read-only`,
  },
  {
    question: `The recommended way to mutate a computed property is by mutating any of its:`,
    answer: `reactive dependencies`,
  },
  {
    question: `How do you add a setter to a computed property`,
    answer: `<pre>computed({
  get() {},
  set(value) {}
})</pre>`,
  },

  // Template Syntax

  {
    question: `What is the most basic form of data binding`,
    answer: `Text interpolation`,
  },
  {
    question: `What syntax does text interpolation uses`,
    answer: `the "Mustache" syntax`,
  },
  {
    question: `What is this syntax used for?
    <br />${ pre('<span>Message: {{ msg }}</span>') }`,
    answer: `It is used for <b>text interpolation</b>`,
  },
  {
    question: `The double mustaches interpret the data as`,
    answer: `Plain text, not HTML`,
  },
  {
    question: `In order to output a text variable as real HTML, you will need to use`,
    answer: `The <pre>v-html<> directive, in the form
    <br />${ pre('<span v-html="rawHtml">Some text</span>') }`,
  },
  {
    question: `In order to output a text variable as real HTML, you will need to use`,
    answer: `The <pre>v-html</pre> directive`,
  },
  {
    question: `What are <b>Directives</b> in Vue?`,
    answer: `Directives are special attributes provided by Vue that apply special reactive behavior to the rendered DOM`,
  },
  {
    question: `How are <b>Directives</b> prefixed`,
    answer: `Directives are prefixed with <b><pre>v-</pre></b>`,
  },
  {
    question: `What will happen to the contents of this ${ pre('span') }?
    <br />${ pre('<span> v-html="rawHtml"</span>') }`,
    answer: `The contents of the span will be replaced with the value of the rawHtml property.`,
  },
  {
    question: `Dynamically rendering arbitrary HTML on your website can be very dangerous because it`,
    answer: `can easily lead to XSS vulnerabilities`,
  },
  {
    question: `What does the <pre>v-bind</pre> directive does`,
    answer: `The v-bind directive instructs Vue to keep an attribute in a given element in sync with a given component's property`,
  },
  {
    question: `What happens to the final rendered element if a value in <pre>v-bind</pre> is <pre>null</pre> or <pre>undefined</pre>?`,
    answer: `The attribute is removed from the rendered element`,
  },
  {
    question: `The semicolon (:) is a shorthand for:`,
    answer: pre ( `v-bind` ),
  },
  {
    question: `This code ${ pre('<div :id></div>') } is valid only if...`,
    answer: `there is also a variable called <pre>id</pre>,
    since the attribute has the same name with the JavaScript value being bound
    <br /><i>(only available in Vue 3.4 and above)</i>`,
  },
  {
    question: `How does <pre>v-bind</pre> renders HTML attributes when bound to a <pre>boolean</pre> value?`,
    answer: `The HTML attribute is either rendered on or removed from element depending on the truthy or falsy value of the variable`,
  },
  {
    question: `What is the following code equivalent to?
    <pre>const obj = {
  id: 'container',
  class: 'wrapper'
}</pre>
    <br />...
    <br />${ pre ( '<div v-bind="obj"></div>' ) }`,
    answer: pre ( `<div
  :id="obj.id"
  :class="obj.class">
</div>` ),
  },
  {
    question: `Are any kind of properties accessible in template expressions?`,
    answer: `No, since template expressions are sandboxed and only have access to commonly used built-in globals such as <pre>Math</pre> and <pre>Date</pre>`,
  },
  {
    question: `At what point will a function called inside a binding expression be called?`,
    answer: `Every time the component updates`,
  },
  {
    question: `In what template positions can <b>JavaScript expressions</b> be used?`,
    answer: `<ul><li>Inside text interpolations (double mustaches)</li><li>In the attribute value of Vue directives</li></ul>`,
  },
  {
    question: `Why is this code invalid:
    ${ pre ( '<span>{{ var a = 1 }}</span>' ) }`,
    answer: `The JavaScript insie the mustaches is not an expression, it is a statement`,
  },
  {
    question: `What should this code be replaced with in order to make it valid:
    ${ pre ( '<span>{{ if (ok) { return message } }}</span>' ) }`,
    answer: `A ternary expression, like:
    <br />${ pre ( '<span>{{ ok ? message : \'\' }}</span>' ) }
    <br />
    <br />Or a function:
    <br />${ pre ( '<span>{{ get_message(ok) }}</span>' ) }`,
  },
  {
    question: `Directive attribute values are expected to be single JavaScript expressions with the exception of:`,
    answer: `<pre>v-for</pre>, <pre>v-on</pre> and <pre>v-slot</pre>`,
  },
  {
    question: `How do you add an argument to a directive?`,
    answer: `By using a colon after the directive name:
    <br />${ pre ('<a v-bind:href="url">' ) }
    <br />${ pre ('<a v-on:click="doSomething">' ) }`,
  },
// <br />
// <pre>
// </pre>
// ${ safe('
// ') }
  // Transitions

  {
    question: `What <b>two</b> native Vue components can help work with transitions and animations`,
    answer: `Transition and TransitionGroup`,
  },
  {
    question: `The Transition component can help work with transitions and animations only in response to:`,
    answer: `state changes`,
  },
];

const shuffle_cards = cards => {
  cards.sort ( (q1, q2) => Math.random() - .5 )
  console.log('SORTED cards', cards)
}

export const useCards = () => {
  return {
    all_cards,
    shuffle_cards,
  }
}