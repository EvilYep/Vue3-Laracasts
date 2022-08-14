export default {
    template: `
        <div class="flex gap-2">
            <button 
                v-for="tag in tags" 
                @click="$emit('update:modelValue', tag)"
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag === modelValue
                }"
            >
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        initialTags: Array,
        modelValue: String // this is the default prop name when we are using v-model on a custom component
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        },
    }
}