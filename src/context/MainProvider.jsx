import { createContext, useState } from "react"

export const MainContext=createContext()

function MainProvider({children}) {
    const [basket,setBasket]=useState([])

    function addBasket(item) {
        const index= basket.findIndex(x=>x._id===item._id)
        if (index!==-1) {
            basket[index].count++
            setBasket([...basket])
        }
        else{

            setBasket([...basket,{...item,count:1}])
        }
        
    }
    function removeBasket(item) {
        setBasket(basket.filter(x=>x._id!==item._id))
        
    }
  return <MainContext.Provider value={{basket,addBasket,removeBasket}}>
    {children}
  </MainContext.Provider>
}

export default MainProvider
