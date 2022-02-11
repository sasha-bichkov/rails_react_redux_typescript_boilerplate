export default function getMetaValue(name: string) {
  const element = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
  return element.getAttribute('content')
}

