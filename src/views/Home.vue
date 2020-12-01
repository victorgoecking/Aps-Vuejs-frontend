<template>
  <div class="msg text-center" align-v="center">
    {{msg}}
  </div>
</template>

<script>

import api from "@/services/api";

export default {

  name: "Home",
  
  data(){

    return {

      msg: ""

    };

  },

  created(){

    this.showHomeMessage();

  },

  methods:{

    showHomeMessage(){

      api.get('')
      .then(( response )=>{

          const {data} = response;
          this.msg = data;

      });

    }

  }
};
</script>
<style>

</style>