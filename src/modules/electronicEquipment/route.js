import index from './index'
import television from './television'
export default {
    path: '/electronicEquipment',
    name: 'electronicEquipment',
    component: index,
    children: [
        {
            path: '/television',
            name: 'television',
            component: television
        }
    ]
}