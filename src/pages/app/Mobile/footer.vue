<template>
    <footer class="shadow">
        <el-row>
          <slot></slot>
        </el-row>
    </footer>
</template>
<style>

</style>

<script>
export default {
    name: 'footer',
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