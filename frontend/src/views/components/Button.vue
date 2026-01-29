<template>
    <component :is="to ? RouterLink : href ? 'a' : 'button'" v-bind="componentAttrs" class="inline-flex items-center justify-center font-bold transition-colors
    rounded border-2
      focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none focus-visible:border-none
      " :class="[
        size === 'lg'
            ? 'text-lg py-4 px-8 rounded-xl'
            : size === 'md'
                ? 'text-base py-2 px-6 rounded-lg'
                : 'text-sm py-2 px-4 rounded',
        block ? 'w-full' : '',
        variant === 'primary'
            ? 'bg-cyan-700 text-white border-cyan-700 hover:bg-white hover:text-cyan-700'
            : variant === 'outline'
                ? 'bg-white text-cyan-700 border-cyan-700 hover:bg-cyan-800 hover:text-white'
                : ''
    ]">
        <slot />
    </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
const props = defineProps({
    to: String,
    href: String,
    type: {
        type: String,
        default: 'button'
    },
    size: {
        type: String,
        default: 'md'
    },
    variant: {
        type: String,
        default: 'primary'
    },
    block: {
        type: Boolean,
        default: false
    }
})

const componentAttrs = computed(() => {
    if (props.to) return { to: props.to, ...useAttrs() }
    if (props.href) return { href: props.href, ...useAttrs() }
    return { type: props.type, ...useAttrs() }
})

import { useAttrs } from 'vue'
</script>