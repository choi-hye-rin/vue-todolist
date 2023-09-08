<template>
  <div class="select-wrapper">
    <MultiSelect
      v-model="model2"
      :placeholder="placeholder"
      :options="itemList"
      :searchable="true"
      :height="300"
      label="value"
      track-by="value"
      :preselect-first="false"
      :select-label="null"
      deselect-label="selected"
      :taggable="true"
      @tag="createNewTag"
      tag-placeholder="추가"
    >
    </MultiSelect>
  </div>
</template>

<script>
import MultiSelect from "vue-multiselect";

export default {
  name: "MultiSelectComponent",
  props: {
    value: {},
    itemList: {
      type: Array,
    },
    placeholder: {
      type: String,
    },
    addItem: {
      type: Function,
    },
  },
  components: { MultiSelect },
  data() {
    return {
      multiselectSelected: null,
    };
  },
  computed: {
    model2: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    createNewTag: function (tag) {
      this.addItem(tag);
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
.select-wrapper {
  .multiselect__tags {
    border: none;
  }

  .multiselect__content-wrapper {
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 5px -2px #dae1e6;
  }

  .multiselect__single {
    color: #dae1e6;
    font-size: 13px;
  }

  .multiselect__option {
    font-size: 13px;
    color: #6c7d8b;
  }

  .multiselect__option--highlight,
  .multiselect__option--highlight::after {
    background-color: #a1c9fa;
    color: white;
  }

  .multiselect__input {
    font-size: 13px;
    color: #dae1e6;

    &::placeholder {
      color: #dae1e6;
    }
  }

  .multiselect__option--selected {
    color: #6c7d8b;
  }

  .multiselect__option--selected {
    background-color: #f3f3f3;
  }

  .multiselect__option--selected.multiselect__option--highlight:after,
  .multiselect__option--selected:after {
    content: none;
    color: white;
  }

  .multiselect__placeholder {
    font-size: 13px;
    color: #dae1e6;
  }
}
</style>
