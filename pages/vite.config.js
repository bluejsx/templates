import withPages from 'vite-with-blue-pages'
import path from 'path'

export default withPages({
  bluejsx: {
    /**
     * HMR is currently experimental. 
     * Set false for always reload the page in dev mode.
     */
    hmr: true
  },
  plugins: [],
  base: '/',
  assetsInclude: 'public/*',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})