import FontFaceObserver from 'fontfaceobserver'

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Lato:300,400,500,700,900'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const lato = new FontFaceObserver('Lato')

  lato.load().then(() => {
    document.documentElement.classList.add('lato')
  })
}

export default Fonts