import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const { id } = useParams()
    const [detail, setAllDetail] = useState({})
    useEffect(() => {
       getproduct()
    }, [])

    async function fetchMoviesJSON(id) {
        const response = await fetch('http://localhost:3000/meryem/'+id);
        const movies = await response.json();
        return movies;
      }
      async function getproduct() {
        let datalar=await fetchMoviesJSON(id)
        console.log(datalar)
        setAllDetail(datalar)
      }
      console.log(detail);
    return (
        <div>


            <div className="new_arrivals_box" key={detail._id}>

                <div className="new_arrivals_image">
                    <img src={detail.image} alt="" />
                </div>
                <p>salam{detail.title} </p>
                <h6>${detail.price}</h6>

            </div>



        </div>
    )
}

export default Detail
