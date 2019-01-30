<template>
  <li>
    <p>{{item.label}}</p>
    <ul v-if="item.children">
      <tree v-for="(item, index) in item.children" :key='index' :item = 'item'></tree>
    </ul>
  </li>
</template>
<script>
export default {
  props: ['item'],
  name: 'tree',
  data () {
    return {}
  }
}
</script>
<style>
  ul {
    list-style: none;
    padding: 0;
    margin-left: 40px;
  }
  li {
    list-style: none;
    margin: 0 10px;
  }
</style>
