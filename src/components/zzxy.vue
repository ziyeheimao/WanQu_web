<template>
    <div id="app-header">
        <header-box></header-box>
        <hou-bei :id="id"></hou-bei>
        <hou-beix :id="id"></hou-beix>
        <mt-test :id="id"></mt-test>
        <footer-box></footer-box>
    </div>
</template>

<script>
import header from './header'
import footer from './footer'
import houbei from './zoom/houbei.vue'
import houbei2 from "./zoom/houbei2.vue"
import test from "./zoom/dianpin.vue"
export default {
    components:{
        "header-box":header, 
        "footer-box":footer, 
        "houBei":houbei,
        "houBeix":houbei2,
        "mtTest":test
    },
    created() {
        this.menu();
    },
    data() {
        return {
           id:this.$route.query.id
        }
    },
    methods:{
        menu(){
            window.scrollTo(0,0)
        }
    }
}
</script>

<style scoped>
    .header{margin:0 16.6%;width:66.6%;position:relative;}
</style>
