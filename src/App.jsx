import MostUsed from "./components/MostUsed"
import Sources from "./components/Sources"
import Tech from "./components/Tech"
// import Header from "./components/Header"

function App() {

  return (
   <div>
      {/* <Header /> */}
    <div className="grid md:grid-cols-2 grid-cols-1">
      <MostUsed />
      <Sources />
    </div>
    <Tech />
   </div>
  )
}

export default App
