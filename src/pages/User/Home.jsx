import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/MainProvider'
import { WishContext } from '../../context/WishProvider'

function Home() {
    
    const [product, setproduct] = useState([])
    const [search,setSearch] =useState("")
    const {addBasket}=useContext(MainContext)
    const {addwishlist}=useContext(WishContext)
    // const [category, setCategory] = useState([])


    useEffect(() => {
        getAllProduct()
    }, [])
    function getAllProduct() {
        fetch("http://localhost:3000/meryem/")
            .then((res) => res.json())
            .then(data => setproduct(data))

    }
    function sortAZ(property) {
      setproduct(  [...product].sort((a,b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0)))

    }
    function sortZA(property) {
        setproduct(  [...product].sort((a,b) => (a[property] < b[property]) ? 1 : ((b[property] < a[property]) ? -1 : 0)))

    }
    return (
        <div>

            <div className="shop_now_background">

                <div className="shop_now_overlay">

                    <div>
                        <p>Fresh Flower & Gift Shop</p>
                        <h2>Making beautiful flowers a part of your life.</h2>
                        <button>SHOP NOW</button></div>
                </div>

            </div>
            <div className="icon_box_container">
                <div className="icon_box">
                    <div className='icon_box_image'>
                        <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png.webp" alt="" />
                    </div>
                    <div className="icon_box_text">
                        <h5>100% Freshness</h5>
                        <p>Most people are unaware of the less common flower</p>
                    </div>
                </div>
                <div className="icon_box">
                    <div className='icon_box_image'>
                        <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png.webp" alt="" />
                    </div>
                    <div className="icon_box_text">
                        <h5>Made by artist</h5>
                        <p>Most people are unaware of the less common flower</p>
                    </div>
                </div>
                <div className="icon_box">
                    <div className='icon_box_image'>
                        <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png.webp" alt="" />
                    </div>
                    <div className="icon_box_text">
                        <h5>Own courier</h5>
                        <p>Most people are unaware of the less common flower</p>
                    </div>
                </div>
                <div className="icon_box">
                    <div className='icon_box_image'>
                        <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png.webp" alt="" />
                    </div>
                    <div className="icon_box_text">
                        <h5>100% Freshness</h5>
                        <p>Most people are unaware of the less common flower</p>
                    </div>
                </div>
            </div>
            <div className="new_arrivals_contain">
                <div>
                    <p>OUR FLOWER</p>
                    <h5>New Arrivals</h5>
                </div>
                <div>
                    <ul>
                        <li>All</li>
                        <li>Bouquet</li>
                        <li>Flower box</li>
                        <li> Flower shelf</li>
                        <li>Basket of flower</li>
                        <li> Gift combos</li>
            <li><button onClick={()=>sortAZ("title")}>A-Z</button></li>
               <li><button onClick={()=>sortZA("title")}>Z-A</button></li>
               <li><button onClick={()=>sortAZ("price")}>artan</button></li>
               <li><button onClick={()=>sortZA("price")}>azalan</button></li>
               
               <li> <input type="text" name="" id="" value={search} onChange={(e)=>setSearch(e.target.value)}/></li>
              
                    </ul>
                </div>
            </div>
            <div className="new_arrivals_box_contain">
                {/* 
            {
                product.map(x => (
                    <div key={x._id}>
                        <h1>{x.title}</h1>
                        <p>{x.author} </p>
                    </div>
                ))
            } */}
                {
                    product
                    .filter((x)=>x.title.toLowerCase().includes(search.toLowerCase()))
                    
                    .map(x => (
                        
                            // <Link to={`detail/${x._id}`}>
                        <div className="new_arrivals_box" key={x._id}>
                            <div className="new_arrivals_image">
                                <img src={x.image} alt="" />
                            </div>
                            <p>{x.title} </p>
                            <h6>${x.price}</h6>
                            <button onClick={()=>addBasket(x)}>Add basket</button>
                            <button onClick={()=>addwishlist(x)}>add vish</button>
                            <button><Link  to={`detail/${x._id}`}>detail</Link></button>
                        </div>
                           
                    ))
                }

            </div>
            <div className="footer_image_container">
                <div className="footer_image_overlay">
                    <div>
                        <p>CUSTOM FLOWER</p>
                        <h2>Let our flowers make your party more perfect.</h2>
                        <button className='order_btn'>ORDER NOW</button>
                        <button className='contact_btn'>CONTACT US</button>
                    </div>
                </div>
            </div>
            <div className="footer_businessman_contain">
                 <div className="businessman_left">
                    <img src="https://preview.colorlib.com/theme/florist/img/testimonial/left-bg.png.webp" alt="" />
                </div>


                <div className="businessman_middle">
                    <p>“I just wanted to say thank you for making such gorgeous arrangements for our
                        birthday celebration. I couldn’t get over how perfect they were for the
                        party. You did a fantastic job, and I appreciate it very much”</p>
                    <h6>Alejandro Houston</h6>
                    <span>Businessman</span>
                </div>


            <div className="businessman_right">
                    <img src="https://preview.colorlib.com/theme/florist/img/testimonial/right-bg.png.webp" alt="" />
                </div> 
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Home
