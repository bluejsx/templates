import 'github-markdown-css'
import style from './index.module.css'
import Article from '@/article.mdx'

export default () =>
  <div class={`markdown-body ${style.app_container}`}>
    <Article />
  </div>