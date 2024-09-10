export default function ActionButtons() {
  return (
    <div className="flex gap-3">
      <button className="!text-primary bg-neutralGray btn btn-ghost-light !border-primary">
        Bulk upload
      </button>
      <button className="text-white btn !bg-secondary btn-ghost-dark">
        Add business
      </button>
    </div>
  )
}
