import MostUsed from "./components/MostUsed"
import Sources from "./components/Sources"
import Tech from "./components/Tech"
// import Header from "./components/Header"

function App() {

  return (
   <div>
      {/* <Header /> */}
    <div className="flex flex-wrap">
      <MostUsed />
      <Sources />
      <Tech />
    </div>
   </div>
  )
}

export default App
