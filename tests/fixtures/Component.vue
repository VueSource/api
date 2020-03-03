<template>
  <main>
    <slot>
      <section>
        <slot name="header" :name="name">
          <header>
            <h1>{{ name }}</h1>
          </header>
        </slot>
        <slot name="body" v-bind="bodySlotContent">
          <p>Some lorem ipsum content of course.</p>
        </slot>
      </section>
    </slot>
  </main>
</template>

<script>
import getDimensions from "./getDimensions";
import size from "./sizeMixin.js";

export default {
  props: {
    /**
     * The name of the thing that your talking about.
     */
    name: String,

    /**
     * Used to extrapolate different things from all sorts
     * of various inputs.
     * @since 2.1
     */
    search: {
      type: Function,

      /**
       * Do something with a different thing.
       *
       * @param {String} needle - the search query
       * @param {Object} config
       * @param {String} config.haystack
       * @return {String}
       */
      default(needle, { haystack }) {
        return [haystack].toString();
      }
    }
  },
  mixins: [size],
  methods: {
    getDimensions,
    /**
     * Take something and turn it into a different thing.
     * @public
     * @emits reducing
     * @emits reduced
     * @param {Object} thing - the thing you're gonna reduce.
     * @return {String} 'something else'
     */
    reduce(thing) {
      /**
       * @event reducing
       * @param {Object} thing - the thing being reduced
       */
      this.$emit("reducing", thing);

      const reduced = "something else";

      /**
       * @event reduced
       * @param {String} reduced the result of the reducing
       */
      this.$emit("reduced", reduced);
    },

    /**
     * Make sure it happens quickly.
     * @public
     * @param {Object} doIt
     * @param {Function} doIt.now
     */
    quickly: doIt => doIt.now()
  },
  computed: {
    /**
     * @return {{date: *, stuff: string}}
     */
    bodySlotContent() {
      return {
        stuff: "that you need to template",
        date: new Date()
      };
    }
  }
};
</script>
