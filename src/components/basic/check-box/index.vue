<template>
  <!-- <Checkbox v-bind="getProps" v-model:checked="checkedModel" @change="handleChange">
    <slot></slot>
  </Checkbox> -->
  <el-checkbox v-model="checkedModel" @change="handleChange"> <slot></slot></el-checkbox>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';

  import { omit } from 'lodash-es';

  // defineOptions({
  //   inheritAttrs: false,
  // });

  const props = defineProps({
    trueValue: {
      type: [Number, Boolean, String],
      default: true,
    },
    falseValue: {
      type: [Number, Boolean, String],
      default: false,
    },
  });

  const emit = defineEmits(['update:checked', 'change']);

  const getProps = computed(() => {
    return omit(props, ['onUpdate:checked', 'onChange']);
  });

  const checkedModel = computed<boolean>({
    get() {
      return true; // props.checked === props.trueValue;
    },
    set(val) {
      emit('update:checked', val ? props.trueValue : props.falseValue);
    },
  });

  const handleChange = (e: any) => {
    const evt = {
      ...e,
      target: {
        ...e.target,
        checked: e.target.checked ? props.trueValue : props.falseValue,
      },
    };
    emit('change', evt);
  };
</script>
