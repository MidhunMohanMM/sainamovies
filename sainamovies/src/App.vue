<template>
<div>
  <router-view></router-view>
  </div>
</template>

<script>
import css from 'uikit/dist/css/uikit.css';
import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from 'uikit/dist/js/uikit.js';
UIkit.use(Icons);
export default {
  name: 'app'
}

</script>

<style>

</style>