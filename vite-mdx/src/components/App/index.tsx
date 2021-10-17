import 'github-markdown-css'
import { app_container as CLASS_APP_CONTAINER } from './index.module.css'
import Article from '../../article.mdx'

export default () =>
  <div class={`markdown-body ${CLASS_APP_CONTAINER}`}>
    <Article />
  </div>