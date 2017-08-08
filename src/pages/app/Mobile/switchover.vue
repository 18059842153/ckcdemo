<template>
    <el-col class="txt-center widths" :span="12">
        <div  v-on:click="incrementCounter">
            <slot></slot>
        </div>
    </el-col>
</template>
<style>

</style>

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