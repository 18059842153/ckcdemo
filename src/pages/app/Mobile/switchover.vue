<template>
    <el-col class="txt-center footer_widths"   :span="12">
        <div  v-on:click="incrementCounter">
            <slot></slot>
        </div>
    </el-col>
</template>
<script>
export default {
    name: 'switchover',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    components: {
    },
    methods: {
        incrementCounter() {
            this.$emit('increment')
        }
    }
}
</script>