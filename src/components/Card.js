import React,{useState,useEffect,useRef} from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty,setQty] = useState(1);
    const [size,setSize] = useState("");
    let foodItem = props.item;

    const handleAddToCard =async ()=>{
         let food = [];
        // let isItemPresent=false;
        for(const item of data)
        {
            console.log(item);
            if(item.id===props.foodItem._id) //if the food item in the card is already in the cart
            {
                 food = item;
                //  food.push(item);

                // isItemPresent=true;
                break;
            }
        }
        // if(isItemPresent)
        console.log(food)
        if(food.length !== 0)
        {
            if(food.size === size) //size refers to full or half etc
            {
                await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
                return 
            }
            else {
                await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
                return
            }
            
        }
        else{
            await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
        }

        
    }
    let finalPrice = qty*parseInt(options[size]);

    useEffect(()=>{
        setSize(priceRef.current.value)
        // if (data.length > 0) {
        //     console.log(data);
        // }
    },[data])
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"160px",objectFit:"fill"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        <p className="card-text"></p>
                        <div className='container w-100' >
                            <select className='m-2 h-100 bg-success rounded' onChange={(e)=>setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                                {priceOptions.map((data)=>{
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Rs. {finalPrice}/-
                            </div>
                        </div>
                        <hr></hr>
                        <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCard}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}