export const Card = ({ title, name, techUsed }) => {
  return <section className="w-full bg-black flex flex-col items-start justify-center gap-2 m-2 p-4 rounded-lg">
    <main className='text-white my-1'>{title}</main>
    <p className='text-white my-1'>{name}</p>
    <section className="flex  gap-2 w-4/5 flex-wrap my-1">
      {techUsed.map(tech => (
        <div className="border-1 border-white bg-white rounded-full my-1">
          <p className='text-black p-2'>{tech}</p>
        </div>
      ))}
    </section>
  </section>
}