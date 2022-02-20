/// <reference types="vite/client" />

declare module '*.md' {
  const content: string
  export default content
}
declare module '*.mdx' {
  const content: () => Blue.JSX.Element
  export default content
}