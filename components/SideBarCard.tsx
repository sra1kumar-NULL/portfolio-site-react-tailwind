export const SideBarCard = ({ cardTitle, isSelected, currentView, setCurrentView }) => {
  const toggleCurrentView = () => {
    currentView == cardTitle ? setCurrentView('')
      : setCurrentView(cardTitle)
  }
  return (
    <section className={`max-w-11/12 rounded-full border-2 cursor-pointer ${isSelected ? 'border-blue-500' : 'border-green-600'} p-2`} onClick={toggleCurrentView}>
      <p className={`text-white text-center w-full text-ellipsis text-left`}>{cardTitle}</p>
    </section >
  )
}