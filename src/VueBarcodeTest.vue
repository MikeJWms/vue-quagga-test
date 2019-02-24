<template>
  <div>
    <div class="block" v-if="videoInit">
        <v-quagga :onDetected="logIt" :readerSize="readerSize" :readerType="readers"></v-quagga>
    </div>
    <h1 class="block">Code:{{code}}</h1>
  </div>
</template>

<script>
import Vue from 'vue'
import VueQuagga from 'vue-quaggajs';

// register component 'v-quagga'
Vue.use(VueQuagga);

export default {
    name: 'VueBarcodeTest',
    data () {
    return {
        readerSize: {
        width: 360,
        height: 480
        },
        readers: ['ean_reader', 'ean_8_reader', 'upc_reader', 'code_128_reader'],
        detecteds: [],
        code: '',
        videoInit: false
    }
    },
    methods: {
    logIt (data) {
        console.log('detected', data)
        this.$data.code = data.codeResult.code
    }

    },
    mounted: function() {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
            this.$data.videoInit = true
        }
    }
}
</script>
<style>
    .block{
        display: inline-block;
    }
</style>
