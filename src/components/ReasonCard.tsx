import type { Reason } from '../types'

function ReasonCard({ icon: Icon, title, description }: Reason) {
  return (
    <article
      className="flex w-full max-w-72 flex-col items-start gap-2 rounded-lg bg-frontColor p-5 shadow-lg"
      data-aos="fade-right"
    >
      <div className="rounded-lg bg-backColor p-6">
        <Icon size={50} aria-hidden />
      </div>
      <div className="py-4 text-left">
        <h3 className="mb-2 text-lg font-bold text-defaultColor">{title}</h3>
        <p className="text-justify text-sm font-semibold text-textColor">{description}</p>
      </div>
    </article>
  )
}

export default ReasonCard
