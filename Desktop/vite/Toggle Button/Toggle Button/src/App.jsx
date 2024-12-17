
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [themeMode,setThemeMode] = useState("light") 
  //In theme.js, you passed 2 functions but didnt defined it
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }
// actual code which will change the theme color. purely javascript code.
//use useEffect hook which will help change the state of themeMode once it detect the change in themeMode variable.
useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])


  return (
    
<ThemeProvider value={{themeMode, lightTheme, darkTheme}}>   {/*giving access to the variables that you provided in theme.js Components can use it now  */}
          <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeButton />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex items-center justify-center bg-green-500 text-white text-4xl font-bold">
      Tailwind CSS is working!
    </div>
</ThemeProvider>
  )
}

export default App
