import { createRouter, createMemoryHistory } from "vue-router";
import invoiceIndex from '../component/invoice/index.vue'
import notFound from "../component/NotFound.vue"


const routes = [
    {
        path:'/',
        component: invoiceIndex,
    },
    {
        path:'/:pathMatch(.*)*',
        component: notFound
    }

]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router;