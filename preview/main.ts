import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import Example from './README.md'
import CustomComp from '../src/index'
import DemoBlock from './demo-block.vue'
import AsyncComp from './examples/index'
import './style.scss'

const app = createApp(Example)

app.use(ElementPlus)
app.use(CustomComp)
app.use(AsyncComp)
app.component('DemoBlock', DemoBlock)
app.mount('#example')
