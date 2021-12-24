type CSSModule = {
  [key: string]: string
}
declare module '*.scss';
declare module '*.css';
declare module '*.module.scss' {
  const content: CSSModule
  export default content
}
declare module '*.css' {
  const content: CSSModule
  export default content
}
declare module '*.md' {
  const content: string
  export default content
}
declare module '*.mdx' {
  const content: () => Blue.JSX.Element
  export default content
}
declare module '*?raw' {
  const content: string
  export default content
}
declare module '*?worker' {
  const workerConstructor: {
    new(): Worker
  }
  export default workerConstructor
}