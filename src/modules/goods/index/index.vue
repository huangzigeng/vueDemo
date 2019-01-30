<template>
  <div>
    <div>goods</div>
    <router-link to="/goods/apple">apple</router-link>
    <router-link to="/goods/banana">banana</router-link>
    <router-link to="/goods/pear">pear</router-link>
    <div>{{userInfo.userName}}</div>
    <div>{{userInfo.sex}}</div>
    <div v-for='(item, index) in goods' :key='index'>
        <div>{{item.name}}</div>
        <div>{{item.price}}</div>
        <div>{{item.num}}</div>
        <input type="number" v-model="item.buyNum">
    </div>
    <button @click='buy'>买了</button>
    <button @click='click'>点我啊</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    data () {
        return {}
    },
    methods: {
        buy () {
            let obj = Object.assign(this.goods,{})
            if (obj[0].num - this.goods[0].buyNum >=0 ) {
                obj[0].num = obj[0].num - this.goods[0].buyNum
                this['goods/updateGoods'](obj)
            }
        },
        click () {
            this.updateUserName({userName:'范德萨', sex: '男'})
        },
        ...mapActions(['updateUserName', 'goods/updateGoods'])
    },
    computed:{
       ...mapState({
           userInfo: state => state.userInfo,
           goods: state => state.goods.goods
       })
    }
}
</script>

