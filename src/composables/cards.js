const safe = text => text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
const pre = text => `<pre>${ safe ( text ) }</pre>`

const all_cards = [
  // {
  //   question: `Who's the best?`,
  //   answer: `Noliani Clemente 😉`,
  // },

  // <br />
  // <pre>
  // </pre>
  // ${ pre(``) }
  
  // Creating a Vue Application

  {
    question: `How can you create a new Vue project with NPM?`,
    answer: `<pre>npm create vue@latest</pre>`,
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
    question: `Every Vue application starts by creating a new:`,
    answer: `Application instance, in the form of <pre>const app = createApp(App)</pre>`,
  },
  {
    question: `How do you create a new Vue application instance`,
    answer: `<pre>const app = createApp(App)</pre>`,
  },
  {
    question: `A new application instance needs to be passed a:`,
    answer: `Root component`,
  },
  {
    question: `How do you mount the Vue application <pre>const app = createApp(App)</pre> into the container element ${ pre('<div id=\"app\"></div>' ) }`,
    answer: `<pre>app.mount('#app')</pre>`,
  },
  {
    question: `Should the .mount() method be called <b>before</b> or <b>after</b> all app configurations and asset registrations are done?`,
    answer: `<b>After</b> all app configurations and asset registrations are done`,
  },

  // Reactivity

  {
    question: `What data types cannot be used with <b>reactive()</b>`,
    answer: `primitive types like string, number or boolean`,
  },
  {
    question: `What happens to the individual variables when a reactive() object is destructured: <pre>let { count } = reactive({ count: 0 })</pre>?`,
    answer: `They lose reactivity`,
  },
  {
    question: `Is this code valid?<br />
    ${ pre(`const obj = ref({ property: 'content' })
<div>{{ obj.value.property }}</div>`) }`,
    answer: `No, ${ pre(`.value`) } is not called on a template since reference objects are automatically unwrapped`,
  },
  {
    question: `Does a computed property automatically tracks every value inside of it?`,
    answer: `No, only reactive dependencies`,
  },
  {
    question: `How many times is ${ pre(`comp_prop`) } property evaluated?<br />
    ${ pre(`const obj = ref({ count: 0 })
const comp_prop = computed(() => obj.value.count / 2)
obj.value.count++

<div>{{ comp_prop }}</div>
<span v-html="comp_prop" }}</span>
<label>{{ comp_prop }}</label>
`) }`,
    answer: `Only once, since its value is cached`,
  },
  {
    question: `Why will this computed property never update? ${ pre(`const now = computed(() => Date.now())`) }`,
    answer: `Because ${ pre(`Date.now()`) } is not a reactive dependency`,
  },
  {
    question: `If you attempt to assign a new value to a <b>computed</b> property, you will receive a:`,
    answer: `runtime warning, since it is getter only by default`,
  },
  {
    question: `How do you add a setter to a computed property`,
    answer: pre(`computed({
  get() {},
  set(value) {}
})`),
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
    question: `Do double mustaches interpret the data as <b>plain text</b> or <b>HTML</b>?`,
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
    question: `Dynamically rendering arbitrary HTML with ${ pre('v-html') } can be very dangerous because it`,
    answer: `can easily lead to XSS vulnerabilities`,
  },
  {
    question: `What does the ${ pre('v-bind') } directive does`,
    answer: `The v-bind directive instructs Vue to keep an attribute in a given element in sync with a given component's property`,
  },
  {
    question: `What happens to the final rendered element if a value in ${ pre('v-bind') } is ${ pre('null') } or ${ pre('undefined') }?`,
    answer: `The attribute is removed from the rendered element`,
  },
  {
    question: `The semicolon (:) is a shorthand for:`,
    answer: pre( `v-bind` ),
  },
  {
    question: `This code ${ pre('<div :id></div>') } (with no argument passed) is valid only if...`,
    answer: `there is also a variable called <pre>id</pre>,
    since the attribute has the same name with the JavaScript value being bound
    <br /><i>(only available in Vue 3.4 and above)</i>`,
  },
  {
    question: `How does ${ pre('v-bind') } renders HTML attributes when bound to a ${ pre('boolean') } value?`,
    answer: `The HTML attribute is either rendered on or removed from element depending on the truthy or falsy value of the variable`,
  },
  {
    question: `What is the following code equivalent to?
    ${ pre(`
const obj = {
  id: 'container',
  class: 'wrapper'
}`) }
    <br />...
    <br />${ pre('<div v-bind="obj"></div>') }`,
    answer: pre(`<div
  :id="obj.id"
  :class="obj.class">
</div>`),
  },
  {
    question: `Are all JavaScript global properties and methods accessible in template expressions?`,
    answer: `No, since template expressions are sandboxed and only have access to commonly used JavaScript globals such as <pre>Math</pre> and <pre>Date</pre>`,
  },
  {
    question: `At what point will a function called inside a binding expression be called?`,
    answer: `Every time the component updates`,
  },
  {
    question: `In what template positions can <b>JavaScript expressions</b> be used?`,
    answer: `<ul>
      <li>Inside text interpolations (double mustaches)</li>
      <li>In the attribute value of Vue directives (${ pre('v-bind') }, ${ pre('v-on') }, ${ pre('v-if') }, etc.)</li>
    </ul>`,
  },
  {
    question: `Why is this code invalid:
    ${ pre( '<span>{{ var a = 1 }}</span>' ) }`,
    answer: `The JavaScript insie the mustaches is not an expression, it is a statement`,
  },
  {
    question: `What should this code be replaced with in order to make it valid:
    ${ pre( '<span>{{ if (ok) { return message } }}</span>' ) }`,
    answer: `A ternary expression, like:
    <br />${ pre( '<span>{{ ok ? message : \'\' }}</span>' ) }
    <br />
    <br />Or a function:
    <br />${ pre( '<span>{{ get_message(ok) }}</span>' ) }`,
  },
  {
    question: `Directive attribute values are expected to be single JavaScript expressions with the exception of:`,
    answer: `${ pre('v-for') }, ${ pre('v-on') } and ${ pre('v-slot') }`,
  },
  {
    question: `How do you add an argument to a directive?`,
    answer: `By using a colon after the directive name:
    <br />${ pre('<a v-bind:href="url">' ) }
    <br />${ pre('<a v-on:click="doSomething">' ) }`,
  },
  
  {
    question: `Can a ${ pre(`:key`) } can be applied to a ${ pre(`template`) }?<br />
    ${ pre(`
<template v-for="item in items" :key="item.id">...</template>`) }`,
    answer: `Yes, ${ pre(`:key`) } can be applied to a ${ pre(`template`) }`,
  },
  {
    question: `Is this code valid?<br />
    ${ pre(`
    <div v-for="item in items" v-if="item.prop">`) }`,
    answer: `No, it is not advised to use ${ pre(`v-if`) } in the same element as ${ pre(`v-for`) },
    since ${ pre(`v-if`) } has precedence it won't be able to access the ${ pre(`item`) }`,
  },
  {
    question: `What will be the first number rendered here?<br />
    ${ pre(`
<div v-for="n in 10">`) }`,
    answer: `1, for loop ranges are one (1) based`,
  },
  {
    question: `What is the simplest way to iterate the properties of an object in the template?`,
    answer: `${ pre(`<div v-for="value of my_object">`) }
    <br />Or ${ pre(`<div v-for="(value, key) in my_object>`) }`,
  },
  {
    question: `Which one is the correct syntax?<br />
    ${ pre(`<div v-for="item of items">
<div v-for="item in items">`) }`,
    answer: `Both are accepted`,
  },
  {
    question: `Is this valid?<br />
    ${ pre(`<div v-for="{ property } in items>`) }`,
    answer: `Yes, deconstruction is allowed in for loops`,
  },
  {
    question: `Will this trigger any updates to the array?<br />
    ${ pre(`const my_array = ref([...])
my_array.value.filter(...)`) }`,
    answer: `No, since ${ pre(`filter`) } does not mutate the array<br />
    An object replacement would have to be made<br />
    ${ pre(`const my_array = ref([...])
my_array.value = my_array.value.filter(...)`) }`,
  },
  {
    question: `Is this code following good practices?<br />
    ${ pre(`const sorted_array = computed(()=> my_array.sort(...))`) }`,
    answer: `No, since ${ pre(`sort`) } mutates the array itself.<br />
A copy of the array should be used instead<br />
${ pre(`const sorted_array computed(()=> [ ...my_array ].sort(...))`) }`,
  },
  {
    question: `Is this following valid?<br />
    ${ pre(`<li v-for="item in items" :key="JSON.stringify(item)">{{ item }}</li>`) }`,
    answer: `Yes, because the item is being turned into a string befored being added as a ${ pre(`:key`) }`,
  },
  {
    question: `Is this following good practices?<br />
    ${ pre(`<li v-for="(item, index) in items" :key="index">{{ item }}</li>`) }`,
    answer: `No, using the ${ pre(`index`) } as the ${ pre(`:key`) } in a for loop can cause element tracking problems when these change positions in the array`,
  },
  {
    question: `What things can be triggered by changing a componet's ${ pre(`:key`) }?`,
    answer: `Lifecycle Hooks or Transitions`,
  },
  {
    question: `What happes to elements with a ${ pre(`:key`) } no longer present?`,
    answer: `They get destroyed`,
  },
  {
    question: `When is ${ pre(`v-if`) } more efficient than ${ pre(`v-show`) }?`,
    answer: `When faster initial load times are needed`,
  },
  {
    question: `When is ${ pre(`v-show`) } more efficient than ${ pre(`v-if`) }?`,
    answer: `When frequent toggles need to be handled`,
  },
  {
    question: `What is the difference between ${ pre(`v-if`) } and ${ pre(`v-show`) }?`,
    answer: `${ pre(`v-if`) } removes the element completely from the DOM<br />
    ${ pre(`v-show`) } only changes the display property of the element to ${ pre(`display: none`) }`,
  },
  
  // Event Handlers

  {
    question: `Is there any value passed to this ${ pre(`my_function`) }?<br />
    ${ pre(`<button @click="my_function"></button>`) }`,
    answer: `Yes, the value of ${ pre(`$event`) } is always passed to functions in an event handler`,
  },
  {
    question: `In an event handler, how can you pass a value along with the default ${ pre(`$event`) } variable`,
    answer: `By explicitly passing the values:<br />
    ${ pre(`
<button @click="my_function( 'my_value', $event )"></button>`) } `,
  },
  {
    question: `Does these lines of code have the same effect?<br />
    ${ pre(`
<div @click.prevent.self="my_function">...</div>
<div @click.self.prevent="my_function">...</div>`) }`,
    answer: `No, since the modifiers are applied in order:
    <ul>
      <li>The first will prevent default effects on events from the element itself and its children</li>
      <li>The second will only prevent default effects on events from the element itself but not its children</li>
    </ul>`,
  },
  {
    question: `Is this code valid?<br />
    ${ pre(`<form @submit.prevent>`) }`,
    answer: `Yes, a handler function is not required for an event, and it will prevent the default form submission behavior`,
  },

  // Form Bindings

  {
    question: `What value types can be bound to the ${ pre(`class`) } and ${ pre(`style`) } attributes of an element?`,
    answer: `Objects, arrays and strings`,
  },
  {
    question: `Is this code valid?<br />
    ${ pre(`
const base_styles = reactive({ color: 'blue' })
const overriding_styles = computed(()=>{ color: 'red' })
<div :style="[base_styles, overriding_styles]">`) }`,
    answer: `Yes, arrays and reactive objects can be combined to style an HTML element`,
  },
  {
    question: `How can the CSS ${ pre(`font-size: 1rem`) } be added as dynmaic styling to an element?`,
    answer: `By binding it as property on the style attribute and using camelCase instead of ke-bob letter casing:<br />
    ${ pre(`<div :style="{ fontSize: '1rem' }">`) }`,
  },
  {
    question: `How can you bind a reference to a group of radio buttons?`,
    answer: pre(`const obj = ref(1)
<input type="radio" value="1" v-model="obj" />
<input type="radio" value="2" v-model="obj" />
<input type="radio" value="3" v-model="obj" />`),
  },
  {
    question: `Can you bind multiple checkboxes to the same reference array?`,
    answer: `Yes, it can be bound to the ${ pre('v-model') } they will add/remove their value to/from the array on checked/unchecked`,
  },
  {
    question: `Is this code valid?<br />
    ${ pre(`
<textarea>{{ message }}</textarea>`) }`,
    answer: `Text interpolation does not work inside textareas <i>(possibly because it cannot be two-way bound)</i>`,
  },
  {
    question: `Can the value of an ${ pre(`<option>`) } in an HTML ${ pre(`<select>`) } contain an object?`,
    answer: `Yes${ pre(`
<select v-model="selected_option">
  <option :value="{ id: 0, value: 'value_1' }">Select an option</option>
</select>`) }`,
  },
  {
    question: `Why is it advised to add an ${ pre(`<option>`) } with an empty value to a bound ${ pre(`<select>`) }:<br />
    ${ pre(`<select v-model="selected_option">
  <option value="">Select an option</option>
</select>`) }`,
    answer: `To avoid browser problems`,
  },
  {
    question: `Are ${ pre(`true-value`) } and ${ pre(`false-value`) } valid properties?`,
    answer: `Yes, they are used with ${ pre(`<input type="checkbox">`)} to determine non-boolean alternative values to it
    ${ pre(`
<input type="checkbox"
  v-model="checkbox_value"
  true-value="Yes"
  false-value="No"
/>`)}`,
  },
  {
    question: `What are the Vue provided ${ pre(`v-model`) } modifiers?`,
    answer: `<ul>
      <li>${ pre('lazy') } - syncs the input to the change event, rather than after every input event</li>
      <li>${ pre('number') } - casts the model value to a float number</li>
      <li>${ pre('trim') } - automatically trims whitespace on text</li>
    </ul>`,
  },
  
  // Components

  {
    question: `How can you register a component globally?`,
    answer: `At main.js:<br />
    ${ pre(`
import MyComponent from './MyComponent.vue'
Vue.createApp(App)
  .component(MyComponent)
  .mount('#app')`)}`
  },
  {
    question: `Can you ${ pre('defineProps') } inside ${ pre('<template>') }?`,
    answer: `No, it is only accessible in ${ pre('<script setup>') }`,
  },
  {
    question: `Is this code valid?<br />${ pre(`import { defineProps } from 'vue'`) }`,
    answer: `No, ${ pre('defineProps') } is available by default in a component and does not need to be imported`,
  },
  {
    question: `Is declaring a component's emits required?`,
    answer: `No, but it is a good practice`,
  },
  {
    question: `What can you emit an event from ${ pre('<script setup>') }?`,
    answer: pre(`const emit = defineEmits(['my_event'])
emit('my_event')`),
  },
  {
    question: `How can you emit an event with a payload?`,
    answer: pre(`const emit = defineEmits(['my_event'])
const payload = { /* some object */ }
emit('my_event', payload)`),
  },
  {
    question: `What is the built-in method for emitting events that can be used in a component's template?`,
    answer: pre(`$emit`),
  },
  {
    question: `When using <b>Dynamic Components</b>, is the previous component unmounted after it has been transitioned to a new component?`,
    answer: `They are unmounted by default, but this can be prevented by wrapping the dynamic component in a ${ pre(`<KeepAlive>`) } component
    ${ pre(`<KeepAlive>
  <component :is="current_component" />
</KeepAlive>`) }`,
  },
  {
    question: `Can HTML tags be used with <b>Dynamic Components</b>?`,
    answer: `Yes<br />${ pre(`
    const current_html_el = ref('span')
    <component :is="current_html_el" />`)}`,
  },
  {
    question: `What is the code to create a <b>Dynamic Component</b>?`,
    answer: pre(`<component :is="my_componnet_name" />`),
  },
  {
    question: `Does the component for the name passed to a <b>Dynamic Component</b> needs to be imported to the parent component?`,
    answer: `Yes, it needs to be imported so that it can be available for rendering when its name is passed to the <b>Dynamic Component</b>:
    ${ pre(`
import MyComponent from './MyComponent.vue'
const my_component_name = ref('MyComponent')
<component :is="my_component_name" />`) }`,
  },
  {
    question: `What does <b>SFC</b> stands for?`,
    answer: `Single-File Component`,
  },
  {
    question: `Name and describe the sections a <b>Single-File Components</b> can have`,
    answer: `<ul>
      <li>${ pre(`script`) } - containes the JavaScript logic</li>
      <li>${ pre(`template`) } - contains the HTML and presentation logic</li>
      <li>${ pre(`style`) } - contains the CSS styling, can use CSS pre-processors</li>
    </ul>`,
  },
  {
    question: `Are <b>Single-File Components</b> precompiled?`,
    answer: `Yes`,
  },
  
  // Lifecycle Hooks

  {
    question: `How would you define <b>LifeCycle Hooks</b>?`,
    answer: `The steps a Vue component goes through from when it is initialized to when it is disposed of.<br />
    They give users the opportunity to add their own code at specific stages`,
  },
  {
    question: `How can the ${ pre(`onMounted`) } <b>LifeCycle Hook</b> registered in a component?`,
    answer: pre(`import { onMounted } from 'vue'
onMounted(() => {...})`),
  },
  {
    question: `Will this code work?
    ${ pre(`
setTimeout(() => {
  onMounted(() => { ... })
}, 100)`) }`,
    answer: `No, <b>LifeCycle Hooks</b> can only be called from <b>synchronous</b> functions or directly from ${ pre(`<script setup>`) }`,
  },
  {
    question: `Name all <b>LifeCycle Hooks</b> in order of excecution`,
    answer: `<ul>
      <li>beforeCreate</li>
      <li>create</li>
      <li>beforeMount</li>
      <li>mounted</li>
      <li>beforeUpdate</li>
      <li>updated</li>
      <li>beforeUnmount</li>
      <li>unmounted</li>
    </ul>`,
  },
  {
    question: `Is ${ pre(`<script setup>`) } compiled <b>before</b> or <b>after</b> ${ pre(`beforeCreate`) } <b>LifeCycle Hook</b>`,
    answer: `It is compiled before the ${ pre(`beforeCreate`) } <b>LifeCycle Hook</b>`,
  },
  {
    question: `What is the ${ pre(`unmounted`) } <b>LifeCycle Hook</b> useful for`,
    answer: `Clearing JavaScript timeouts, intervals and event listeners`,
  },

  // Slots

  {
    question: `Are slots allowed to be self-closing?<br />${ pre(`<slot/>`) }`,
    answer: `Yes`,
  },
  {
    question: `What is the best way to render custom content from a parent component into a child component?`,
    answer: `By creating a ${ pre(`<slot></slot>`) } in the child component`,
  },
  {
    question: `What is the behavior of the inner text in:
    ${ pre(`<template><slot>Some text here</slot></template>`)}`,
    answer: `If the parent component does not add content inside the child component, the text will render,
    otherwise, it will be replaced by the content added by the parent component`,
  },
  {
    question: `By what name can this slot be accessed by the parent component?
    ${ pre(`<slot></slot>`)}`,
    answer: `By the name <b>default</b>, since it is implicitly added to unnamed slots`,
  },
  {
    question: `How do you set a name to a child component slot and access it on the parent comopnent?`,
    answer: `By adding a name to the slot:<br/>
    In child component:<br/>
    ${ pre(`<slot name="my_slot"></slot>`)}<br/>
    In parent component:<br/>
    ${ pre(`<template v-slot:my_slot></template>`)}`,
  },
  {
    question: `What is the directive shorthand for a slot name?`,
    answer: `The pound symbol: <b>#</b>`,
  },
  {
    question: `When multiple slots are used on a child component, does the parent need to add a ${ pre(`<template>`) } for the default slot?`,
    answer: `No, it is not necessary (though it could be added for clarity)<br />
    The default slot data can be added as regular main content:
    ${ pre(`
<ChildComponent>
    Main content will render inside the default slot
    <template #another_slot>...</template>
</ChildComponent>`) }`,
  },
  {
    question: `Can <b>slot</b> names be changed dynamically from the parent component?`,
    answer: `Yes, access to slots can be worked with dynamic arguments:<br />
    ${ pre(`<template v-slot:[dynamic_slot_name]>...</template>
<template #[dynamic_slot_name]>...</template>`) }`,
  },
  {
    question: `What is a scoped slot?`,
    answer: `A slot that gives access to data from the child component to the parent component`,
  },
  {
    question: `How can you pass data throught a component slot?`,
    answer: `In ChildComponent:<br />
    ${ pre(`
<slot static_text="some text" :dynamic_prop="obj"></slot>
`) }<br />
In ParentComponent:<br />
    ${ pre(`
<tempalte #default="{ static_text, dynamic_prop }"></tempalte>
`) }`,
  },
  {
    question: `Is this code valid?<br />${ pre(`<slot v-bind="obj"></slot>`) }`,
    answer: `Yes, the object properties will be automatically distributed as slot attributes`,
  },

  // Renderless Components

  {
    question: `What is a <b>Renderless Component</b>?`,
    answer: `A component that only encapsultes logic and does not render anything. Any visual output is fully delegated to the parent component`,
  },

  // Async Components

  {
    question: `What are <b>async components</b> used for?`,
    answer: `To load components only when they are actually rendered, instead of preloading them along with the parent`,
  },
  {
    question: `What is the simplest way to create an <b>async component</b>`,
    answer: pre(`import { defineAsyncComponent } from 'vue'
const MyAsyncComponent = defineAsyncComponent( () => import('@/components/MyComponent.vue') )`),
  },
  {
    question: `When you create and <b>async component</b>, is the component returned by ${ pre(`defineAsyncComponent`) } the same as the component returned by the passed Promise/import?`,
    answer: `No, the component returned is a <b>wrapper</b> that calls the loader function when it is rendered`,
  },
  {
    question: `How can you handle the loading state of an <b>async component</b>`,
    answer: `By passing the ${ pre(`loadingComponent`) } option to ${ pre(`defineAsyncComponent`) }:
    ${ pre(`
const AsyncComp = defineAsyncComponent({
  loader: () => import('./MyComponent.vue'),
  loadingComponent: LoadingComponent,
})`) }`,
  },
  {
    question: `How can you handle and error loading an <b>async component</b>`,
    answer: `By passing the ${ pre(`errorComponent`) } option to ${ pre(`defineAsyncComponent`) }:
    ${ pre(`
const AsyncComp = defineAsyncComponent({
  loader: () => import('./MyComponent.vue'),
  errorComponent: ErrorComponent,
})`) }`,
  },
  {
    question: `What are the ${ pre(`delay`) } and ${ pre(`timeout`) } options used for in ${ pre(`defineAsyncComponent`) }?`,
    answer: `${ pre(`delay`) } is the time before showing the loading component, used to avoid flickering on fast networks<br />
    ${ pre(`timeout`) } is the maximum time allowed to load the imported component before displaying the error component`,
  },
  {
    question: `Is there a build-in ${ pre(`<Suspense>`) } component in Vue?`,
    answer: `Yes, it is used along with <b>async components</b>`,
  },

  // Component v-model

  {
    question: `What is ${ pre(`v-model`) } used for in a custom component?`,
    answer: `To provide two-way binding`,
  },
  {
    question: `How can you implement ${ pre(`v-model`) } on a custom component?`,
    answer: `With the ${ pre(`defineModel()`) } macro:
    ${ pre(`
const model = defineModel()
<input v-model="model" />`)}`,
  },
  {
    question: `What happens when the value of an object created with ${ pre(`defineModel()`) } is updated inside the custom component?`,
    answer: `It updates the value of the object bound to in the the parent object`,
  },
  {
    question: `What is ${ pre(`defineModel()`) } expanded to by the compiler?`,
    answer: `Into a modelValue property/emit pair:<br />
    ${ pre(`const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

<input
  :value="props.modelValue"
  @changed="emit('update:modelValue', $event.target.value)
/>`) }`,
  },
  {
    question: `Can the options like ${ pre(`required`) } and ${ pre(`default`) } be passed to ${ pre(`defineModel()`) }?`,
    answer: `Yes, though using a default value could cause desynchronization between parent and child values`,
  },
  {
    question: `Can ${ pre(`v-model`) } accept arguments?`,
    answer: `Yes.<br />They need to be defined in the custom component:
      ${ pre(`
const argument_1 = defineModel('argument_1')
const argument_2 = defineModel('argument_2')`) }
      <br />and passed from the parent:
      <br />${ pre(`
<MyCustomComponent
  v-model:argument_1="my_obj_1"
  v-model:argument_2="my_obj_2"
/>`) }`,
  },
  {
    question: `How can you add custom modifiers to the model of a custom component?<br />
    ${ pre(`<MyComponent v-model.my_modifier="my_obj" />`) }`,
    answer: `By destructuring the ${ pre(`defineModel()`) } return value and using a setter:
    ${ pre(`
const [model, modifiers] = defineModel({
  set(value) {
    if (modifiers.my_modifier)
      return /* apply modifier to value */
    return value // otherwise return value unmodified
  }
})`) }`,
  },

  // Watchers

  {
    question: `How can you trigger side-effects in immediate response to the value of a reactive property being changed?`,
    answer: `By using ${ pre(`watch`) } or ${ pre(`watchEffect`) }`,
  },
  {
    question: `What value will be passed to the watcher function when you watch the following:<br />
    ${ pre(`watch( () => x.value + y.value,
  /* what goes here? */)`)}`,
    answer: `The result of the sumation will be passed:<br />
    ${ pre(`( sum ) => { ... }`) }`,
  },
  {
    question: `How can you watch multiple properties by using a single ${ pre(`watch`) } (not ${ pre(`watchEffect`) })?`,
    answer: `By passing them to the watcher in an array:<br/>
    ${ pre(`watch([
  ref_obj_1,
  () => reactive_obj.prop
]),
([new_value_1, new_value_2]) => { /* do something */ }`) }`,
  },
  {
    question: `How can you watch a property inside a reactive object?`,
    answer: `By passing it to the watcher through a getter funciton:<br/>
    ${ pre(`watch(
  () => reactive_obj.prop,
  (new_value) => { /* do something */ }
)`) }`,
  },
  {
    question: `Will ${ pre(`watchEffect`) } execute on the initial render of the component?`,
    answer: `Yes, it is <b>eager</b> by default`,
  },
  {
    question: `Will ${ pre(`watch`) } execute on the initial render of the component?`,
    answer: `No, it is <b>lazy</b> by default`,
  },
  {
    question: `Why is using ${ pre(`watchEffect`) } more efficient than using a deep ${ pre(`watch`) }`,
    answer: `${ pre(`watchEffect`) } tracks only properties used with its callback and does not use recursive tracking`,
  },
  {
    question: `What is the main difference between ${ pre(`watch`) } and ${ pre(`watchEffect`) }?`,
    answer: `${ pre(`watch`) } watches for a single, explicitly defined property,
      while ${ pre(`watchEffect`) } watches for every reactive property accessed within it`, 
  },
  {
    question: `How do you force a <b>watcher</b> to be called <i>after</i> the DOM has been updated? And what can you do to change that behavior...`,
    answer: `By adding the ${ pre(`{ flush: 'post' }`) } option, or by using ${ pre(`watchPostEffect`) }`,
  },
  {
    question: `Are <b>watchers</b> called <i>before</i> or <i>after</i> the DOM has been updated?`,
    answer: `Before<br />All callbacks are called <i>before</i> the DOM has updated.
    Thus, the ${ pre(`{ flush: 'post' }`) } option, or ${ pre(`watchPostEffect`) } should be used when a call after the DOM has been updated is desired.`,
  },
  {
    question: `How can you manually stop a <b>watcher</b>`,
    answer: pre( `const unwatch = watch(...) // or watchEffect
unwatch()` ),
  },
  {
    question: `Do <b>watchers</b> need to be manually stopped inside ${ pre(`onUnmounted`) }?`,
    answer: `No, watchers are by default bound to the owner component and automatically stopped on ${ pre(`onUnmounted`) }`,
  },

  // Template Refs

  {
    question: `How can you store an HTML element or Vue component in a Ref variable?`,
    answer: pre(`const el = ref()
<div ref="el">`),
  },
  {
    question: `After what can a <b>template ref</b> ${ pre(`ref_el`) } be accessed?<br />
    ${ pre(`const ref_el = ref()
<MyComponent ref="ref_el">`) }`,
    answer: `After the component has been mounted`,
  },
  {
    question: `What scenario can happen when a <b>template ref</b> is being <b>watched</b>?`,
    answer: `It can still be null when accessed inside the watcher function, since component may not have been mounted yet`,
  },
  {
    question: `How can you store all the HTML elements or Vue components inside a ${ pre(`v-for`) } in a Ref variable?`,
    answer: pre(`const elems = ref([])
<div v-for="..." ref="elems">`),
  },
  {
    question: `Will the variables in a child component be available to the parent when linked to a <b>template ref</b> variable?`,
    answer: `No, unless these are exposed by ${ pre(`defineExpose({ ... })`) }`,
  },
  {
    question: `Write the code to access the value of ${ pre(`count`) } in the custom component:<br />
    ${ pre(`ChildCopmonent.vue
const my_ref = ref({ count: 0 })
defineExpose({ my_ref })`) }<br />
by a parent component:<br />`,
    answer: `${ pre(`<ChildCopmonent ref="child_component">
const child_component = ref()
child_component.value.my_ref.count`)}<br/>
    Exposed references are automatically unwrapped`,
  },
  
  // Transitions
  
  {
    question: `By what directives and/or attributes are <b>Transitions</b> triggered`,
    answer: `<ul>
      <li>v-if</li>
      <li>v-show</li>
      <li>:key</li>
      <li>:is</li>
    </ul>`,
  },
  {
    question: `Inside what CSS classes are the initial and final element properties defined for a ${ pre('<Transition>') }?`,
    answer: `${ pre(`.v-enter-from`) } and ${ pre(`.v-leave-to`) }`,
  },
  {
    question: `In a ${ pre('<Transition>') } what type of CSS is defined in the ${ pre(`.v-enter-active`) } and ${ pre(`.v-enter-active`) } classes`,
    answer: `The transition properties, duration and easing curve`,
  },
  {
    question: `Name the ${ pre('<Transition>') } CSS classes`,
    answer: `<ul>
      <li>.v-enter-from</li>
      <li>.v-enter-active</li>
      <li>.v-enter-to</li>
      <li>.v-leave-from</li>
      <li>.v-leave-active</li>
      <li>.v-leave-to</li>
    </ul>`,
  },
  {
    question: `How do you set the animations for a named transition: ${ pre('<Transition name="my_animation">') }`,
    answer: `Use the transition CSS classes and replace the ${ pre(`v`) } with the transition name:<br />
    ${ pre(`.my_animation-enter-from {...}`) }`,
  },
  {
    question: `How do you add CSS keyframes to a ${ pre('<Transition>') }?`,
    answer: `${ pre(`.v-enter-active,
    animation: my_animation .3s;
}
.v-leave-active {
  animation: my_animation .3s reverse;
}
  
@my_animation { ... }`) }`,
  },
  {
    question: `Name the properties used to set custom transition classes on a ${ pre('<Transition>') } component`,
    answer: `<ul>
      <li>enter-from-class=""</li>
      <li>enter-active-class=""</li>
      <li>enter-to-class=""</li>
      <li>leave-from-class=""</li>
      <li>leave-active-class=""</li>
      <li>leave-to-class=""</li>
      <li>appear-from-class=""</li>
      <li>appear-active-class=""</li>
      <li>appear-to-class=""</li>
    </ul>`,
  },
  {
    question: `How do you tell Vue to use the animation timing rather than the CSS transition timing when running a ${ pre('<Transition>') } with:<br />
    ${ pre(`.v-enter-active {
  animation: my_animation .5s;
  transition: all .2s ease;    
}`) }`,
    answer: `By adding the ${ pre(`type="animation`) } property`,
  },
  {
    question: `How do you name transition classes when the ${ pre('<Transition>') } component has no name?`,
    answer: `with the letter  ${ pre('v') } as the prefix<br />
    ${ pre('.v-enter-from') }`,
  },
  {
    question: `When is property ${ pre(`:duration=""`) } useful?`,
    answer: `When you want to tell the ${ pre(`<Transition>`) } component the time at which nested elements may have completed all their animations`,
  },
  {
    question: `In a ${ pre(`<Transition>`) } component, can you set individual enter and leave duration times?`,
    answer: `Yes,<br /><ul>
    <li>with ${ pre(`:duration="{ enter: 100, leave: 200 }"`) }</li>
    <li>or ${ pre(`.v-enter-active { transition-duration: .1s }
.v-leave-active { transition-duration: .2s }`) }</li>
    </ul>`,
  },
  {
    question: `How can you animate a nested element of a component when the parent element is mounted?`,
    answer: `By adding a class to the nested element and accessing the class along with the transaction class<br />
    ${ pre(`<Transition>
  <div v-if="show">
    <div class="nested">...</div>
  </div>
</Transaction>

.v-enter-active .nested {
  transition: ...;
}`) }`,
  },
  {
    question: `How can you make nested elements appear in sequence in a ${ pre('<Transition>') } component?`,
    answer: `By adding a delay to the nested elements in the ${ pre('.v-enter-active') } class:</br>
    ${ pre(`.v-enter-active .nested_1 { transition-delay: .25s }
.v-enter-active .nested_2 { transition-delay: .5s }
`) }<i>This may also need for a :duration="500" to be set on the ${ pre('<Transition>') } component</i>`,
  },
  {
    question: `What are some performance considerations when using ${ pre('<Transition>') }?`,
    answer: `Preferring optimized CSS transitions, like ${ pre('opacity') } and ${ pre('transform') } over more expensive ones, like ${ pre('height') } and ${ pre('margin') }.`,
  },
  {
    question: `What is the ${ pre(':css="false"') } property used for?`,
    answer: `Use only JS hooks and not CSS classes in a ${ pre('<Transition>') } component`,
  },
  {
    question: `Can JavaScript hooks and CSS classes be combined in a ${ pre('<Transition>') } component?`,
    answer: `Yes, unless we apply the ${ pre(':css="false"') } property`,
  },
  {
    question: `What are the JavaScript hooks provided by the ${ pre('<Transition>') } component?`,
    answer: `<ul>
      <li>@before-enter="before_enter(el)"</li>
      <li>@enter="before(el, done)"</li>
      <li>@after-enter="after_enter(el)"</li>
      <li>@enter-cancelled="enter_cancelled(el)</li>
      <li>@before-leave="before_leave(el)"</li>
      <li>@leave="before(el, done)"</li>
      <li>@after-leave="after_leave(el)"</li>
      <li>@leave-cancelled="leave_cancelled(el)</li>
    </ul>`,
  },
  {
    question: `How can you create a <b>reusable transition</b>?`,
    answer: `By creating a new component that wraps a ${ pre('<slot>') } in a ${ pre('<Transition>') } component:<br />
    ${ pre(`MyReusableTransition.vue
<template>
  <Transition ...props>
    <slot></slot>
  </Transition>
</template>`) }`,
  },
  {
    question: `How can you make a ${ pre('<Transition>') } to run on the initial render of the node?`,
    answer: `By adding the  ${ pre('appear') } attribute`,
  },
  {
    question: `With a ${ pre('<Transition>') }, the animations for the component that's entering and the one leaving are by default run <b>simultaneously</b> or <b>one after the other</b>?`,
    answer: `Entering and leaving element animations are run <b>simultaneously</b>`,
  },
  {
    question: `How can you make an element finish its transition before the the next element begins its own?`,
    answer: `By adding the ${ pre('mode="out-in') }`,
  },
  {
    question: `Write the code to add a <b>transition</b> to a <b>dynamic component</b>?`,
    answer: pre(`<Transition>
  <component :is="current_component" />
</Transition>`),
  },
  {
    question: `Can ${ pre('<Transition>') } change the animation type dynamically?`,
    answer: `Yes: <ul>
    <li>by binding the ${ pre('name') } property: ${ pre(':name="..."') }</li>
    <li>by using JavaScript hooks</li>
    <li>by using adaptable reusable Transitions</li>
    </ul>`,
  },
  {
    question: `How many simultaneous children can ${ pre('<Transition>') } have?`,
    answer: `Only a single child`,
  },
  {
    question: `How many simultaneous children can ${ pre('<TransitionGroup>') } have?`,
    answer: `Multiple children`,
  },
  {
    question: `What additional transition class does ${ pre('<TransitionGroup>') } has?`,
    answer: `The ${ pre('.v-move') } class`,
  },
  {
    question: `What attribute does all elements inside ${ pre('<TransitionGroup>') } must necessarily have?`,
    answer: `The ${ pre(':key') } attribute`,
  },
  {
    question: `Is ${ pre('mode="in-out"') } used for ${ pre('<Transition>') }, ${ pre('<TransitionGroup>') } or both?`,
    answer: `Only for ${ pre('<Transition>') },<br />Since ${ pre('<TransitionGroup>') } is not alternating elemnents, it does not need it`,
  },
  {
    question: `Does ${ pre('<TransitionGroup>') } renders a wapper element by default?`,
    answer: `Not by default, only when the ${ pre(':tag="..."') } attribute is added to it`,
  },
  {
    question: `Does the ${ pre('<Transition>') } and ${ pre('<TransitionGroup>') } components need to be imported?`,
    answer: `No, they are built-in Vue components`,
  },
  
  // Plugins

  {
    question: `How is a plugin <b>installed</b> in a Vue application?`,
    answer: pre(`app.use( my_plugin, { ...options } )`),
  },
  {
    question: `How is a plugin <b>defined</b>?`,
    answer: pre(`my_plugin.js
export const my_plugin = {
  install ( app, options ) { ... }
}`),
  },
  {
    question: `What are common uses for <b>plugins</b>?`,
    answer: `<ul>
      <li>Register global components
        <ul>
          <li>${ pre('app.component()') }</li>
          <li>${ pre('app.directive()') }</li>
        </ul>
        </li>
      <li>Make a resouce injectable
        <ul>
          <li>${ pre('app.provide()') }</li>
        </ul>
      </li>
      <li>Add global intances
      <ul>
        <li>${ pre('app.config.globalProperties') }</li>
      </ul>
    </li>
  </ul>`,
  },

  // VueRouter
  // {
  //   question: ``,
  //   answer: ``,
  // },

  // Ecosystem

  {
    question: `Briefly define Volar`,
    answer: `The official Vue language features extension for VSCode`,
  },
  {
    question: `Briefly define Vue DevTools`,
    answer: `A browser extension for debuggin Vue JS applicaitons`,
  },
  {
    question: `Briefly define Vuetify`,
    answer: `UI component framework/library with advanced functionality and material design built in`,
  },
  {
    question: `Briefly define Nuxt`,
    answer: `A meta-framework fo Vue with convenient features and SSR support`,
  },
  {
    question: `Briefly define VueUse`,
    answer: `A collection of reusable composition utilities`,
  },
  {
    question: `Name the main Vue Ecosystem technologies`,
    answer: `<ul>
    <li>VueRouter</li>
    <li>VueUse</li>
    <li>Nuxt</li>
    <li>Vuetify</li>
    <li>Vue DevTools</li>
    <li>Volar</li>
    </ul>`,
  },
];

const shuffle_cards = cards => {
  cards.sort ( () => Math.random() - .5 )
}

export const useCards = () => {
  return {
    all_cards,
    shuffle_cards,
  }
}