import React from 'react'

export default function Carousal(props) {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption" style={{ "zIndex": "10" }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={props.search} onChange={(e)=>{props.searchHandler(e.target.value)}}/>
                            {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?sushi" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

// import React from 'react'

// export default function Carousal() {
//     return (
//         <div>
//             <div id="carouselExampleControls" classNameName="carousel slide" data-bs-ride="carousel">
//                 <div classNameName="carousel-inner">
//                     <div classNameName="carousel-item active">
//                         <img src="https://source.unsplash.com/random/900x700/?burger" classNameName="d-block w-100" alt="..." />
//                     </div>
//                     <div classNameName="carousel-item">
//                         <img src="https://source.unsplash.com/random/900x700/?momos" classNameName="d-block w-100" alt="..." />
//                     </div>
//                     <div classNameName="carousel-item">
//                         <img src="https://source.unsplash.com/random/900x700/?sea" classNameName="d-block w-100" alt="..." />
//                     </div>
//                 </div>
//                 <button classNameName="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//                     <span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span classNameName="visually-hidden">Previous</span>
//                 </button>
//                 <button classNameName="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//                     <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span classNameName="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </div>
//     )
// }
