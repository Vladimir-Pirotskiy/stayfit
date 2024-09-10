export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="spinner-border !text-secondary" />
      <h1 className="!text-secondary">
        Loading<span className="animated-dots !text-primary"></span>
      </h1>
    </div>
  )
}
