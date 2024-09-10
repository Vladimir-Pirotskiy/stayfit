type HeadingProps = {
  title: string
}

export default function Heading({ title }: HeadingProps) {
  return <h1 className="text-white text-2xl">{`All ${title}`}</h1>
}
