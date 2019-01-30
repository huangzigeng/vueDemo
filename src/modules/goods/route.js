import index from './index'
import apple from './apple'
import banana from './banana'
import pear from './pear'
export default {
    path: '/goods',
    component: index,
    children: [
        {
            path: 'apple',
            component: apple
        }, {
            path: 'banana',
            component: banana
        }, {
            path: 'pear',
            component: pear
        }
    ]
}