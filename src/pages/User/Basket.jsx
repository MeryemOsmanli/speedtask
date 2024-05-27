import React, { useContext } from 'react'
import { MainContext } from '../../context/MainProvider'

function Basket() {
    const { basket, addBasket, removeBasket,increase } = useContext(MainContext)
    return (
        <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
            {
                basket

                    .map(x => (

                        // <Link to={`detail/${x._id}`}>
                        <div className="new_arrivals_box" key={x._id}>
                            <div className="new_arrivals_image">
                                <img src={x.image} alt="" />
                            </div>
                            <p>{x.title} </p>
                            <h6>${x.price}</h6>
                            <button onClick={() => removeBasket(x)}>x</button>
                            <button onClick={() => addBasket(x)}>+</button>
                            <p>count{x.count} </p>



                        </div>

                    ))
            }
        </div>
    )
}

export default Basket
