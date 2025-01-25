/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import Mycomponent from "./components/Mycomponent.vue"
import Linkcard from "./components/Linkcard.vue"
import HomeUnderline from "./components/HomeUnderline.vue"

import update from "./components/update.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import confetti from "./components/confetti.vue"
import backtotop from "./components/backtotop.vue"
import { h } from 'vue'


// 不蒜子
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import bsz from "./components/bsz.vue"

export default {
  extends: DefaultTheme,


    // 不蒜子
  enhanceApp({ app , router }) {
    app.component('Mycomponent' , Mycomponent)
    app.component('Linkcard' , Linkcard)
    app.component('HomeUnderline' , HomeUnderline)

    app.component('update' , update)
    app.component('ArticleMetadata' , ArticleMetadata)
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  },

  Layout() { 
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(bsz), //不蒜子layout-bottom插槽
      'doc-footer-before': () => h(backtotop), // 使用doc-footer-before插槽
    })
  }
  

  
}
