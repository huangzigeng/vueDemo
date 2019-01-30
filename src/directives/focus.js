/**
 * Created by Administrator on 2019/1/16.
 */
import Vue from 'vue'
Vue.directive('focus', {
  inserted (el) {
    el.focus()
  }
})
