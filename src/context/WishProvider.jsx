import { createContext, useState } from "react"

export const WishContext = createContext()

function WishProvider({ children }) {
    const [wishlist, setwishlist] = useState([])

    function addwishlist(item) {
        const index = wishlist.findIndex(x => x._id === item._id)
        if (index !== -1) {
            setwishlist([...wishlist])
        }
        else {

            setwishlist([...wishlist, { ...item }])
        }
        

    }
    function removewishlist(item) {
        setwishlist(wishlist.filter(x => x._id !== item._id))

    }
    return (
        <WishContext.Provider value={{ wishlist, addwishlist, removewishlist }}>
            {children}
        </WishContext.Provider>
    )
}

export default WishProvider
