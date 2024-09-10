export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center  h-screen ">
      <div className="spinner-border !text-secondary" />
      <h1 className="!text-secondary">
        Loading<span className="animated-dots !text-primary"></span>
      </h1>
    </div>
  )
}
