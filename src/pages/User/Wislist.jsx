import { useContext } from "react"
import WishProvider, { WishContext } from "../../context/WishProvider"


function Wislist() {
    const { wishlist,removewishlist } = useContext(WishContext)

  return (
    <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
    {
        wishlist

            .map(x => (

                // <Link to={`detail/${x._id}`}>
                <div className="new_arrivals_box" key={x._id}>
                    <div className="new_arrivals_image">
                        <img src={x.image} alt="" />
                    </div>
                    <p>{x.title} </p>
                    <h6>${x.price}</h6>
                    <button onClick={() => removewishlist(x)}>x</button>



                </div>

            ))
    }
</div>
  )
}

export default Wislist
