<template>
    <div class="app">
        <h1>Hello Vue.js!</h1>
        <my-component message="My Counter for TypeScript"></my-component>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import MyComponent from "../component/sub.vue";

export default Vue.extend({
  components: {
    "my-component": MyComponent
  }
});
</script>