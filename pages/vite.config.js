import withPages from 'vite-with-blue-pages'

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
  assetsInclude: 'public/*'
})