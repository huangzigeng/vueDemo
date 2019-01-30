<template>
  <div class="hello">
    <router-link to="/first">first</router-link>
    <router-link to="/goods">goods</router-link>
    
    <input type="text" v-focus>
    <p>{{msg}}</p>
    <p>{{msg1}}</p>
    <p>{{baseInfo.userName}}  <button @click="first()">first</button></p>
    <div class="grid">
      <div v-for="(item, key) in grid" :key="key">{{item}}</div>
    </div>
    <button @click='send()'>发送请求</button>
    <input type="radio" name="sex" v-model="radioVal" @change="change" value="tree1" />法防
    <input type="radio" name="sex" v-model="radioVal" @change="change" value="panel" />物防
    <!--<input type="radio" name="sex" v-model="radioVal" @change="change" value="tree1" />双防-->
    <ul>
      <component :is="radioVal" v-for="(item, index) in tree" :key="index" :item="item"></component>
    </ul>
  </div>
</template>

<script>
import tree1 from './tree'
import panel from './panel'
import http from '@/utils/request'
import mixin from '@/mixins/first'
import vFocus from '@/directives/focus'
export default {
  
  components: {
    tree1,
    panel
  },
  mixins: [mixin],
  name: 'HelloWorld',
  data () {
    return {
      baseInfo: {
        userName: '发动机上课了'
      },
      msg: null,
      radioVal: 'tree1',
      tree: [
        {
          label: 'A 1',
          children: [
            {
              label: 'A 2',
              children: [
                {
                  label: 'A 3'
                }, {
                  label: 'A 3'
                }, {
                  label: 'A 3'
                }, {
                  label: 'A 3'
                }
              ]
            }, {
              label: 'A 2'
            }
          ]
        },
        {
          label: 'B 1',
          children: [
            {
              label: 'B 2',
              children: [
                {
                  label: 'B 3'
                }
              ]
            }
          ]
        },
        {
          label: 'C 1',
          children: [
            {
              label: 'C 2',
              children: [
                {
                  label: 'C 3'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    msg1: function () {
      return typeof (this.msg)
    },
    grid: function () {
      let arr = []
      for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
          if (j <= i) {
            arr.push(i + '*' + j + '=' + i * j)
          } else {
            arr.push('')
          }
        }
      }
      return arr
    }
  },
  methods: {
    first() {
      console.log(5561156)
    },
    send () {
      http.get({url:'/front/get-article-relation',params:{article_category_uuid: 29}})
    },
    show () {
      console.log(this.msg)
    },
    change (e) {
      console.log(e.target.defaultValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  list-style: none;
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.grid{
  display: grid;
  grid-template-columns: repeat(9, 80px);
  grid-template-rows:  repeat(9, 30px);
  grid-gap: 10px;
}
</style>
