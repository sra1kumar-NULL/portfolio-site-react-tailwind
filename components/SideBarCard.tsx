export const SideBarCard = ({ cardTitle, isSelected }) => {
  return (
    <section className={`w-4/5 rounded-full  ${isSelected ? 'bg-white' : 'bg-black'} border-1 ${isSelected ? 'border-black' : 'border-white'}`}>
      <p className={`${isSelected ? 'text-black' : 'text-white'} text-center`}>{cardTitle}</p>
    </section>
  )
}