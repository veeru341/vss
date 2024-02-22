import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removeProduct } from "../containers/redux/reducers/CartReducer"
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart() {

    const dispatch = useDispatch()

    const cart = useSelector(state => state)

    console.log("checking cart by veerababu", cart.CartReducer.cartValues)

    return (
        <div style={{ width: "40%", height: "100vh", padding: "10px" }}>
            <div style={{ margin: "0", padding: 0 }}>
                {
                    cart.CartReducer.cartValues.map((element) => {
                        return (
                            <div style={{ display: "flex", border: "1px solid white", padding: "5px", marginBottom: "2px", display: "flex", alignItems: "center", backgroundColor: "white", justifyContent: "space-around" }}>
                                <div>
                                    <img src={element.productImage} width="80px" height="80px" />
                                </div>
                                <div style={{ display: "flex", flexDirection: 'column', padding: "0px", margin: "0px", alignItems:"center", justifyContent:"center" }}>
                                    <div>
                                        <h4>{element.productName}</h4>
                                    </div>
                                    <div>
                                        <h3>Price : ₹ {element.productPrice}</h3>
                                    </div>
                                </div>
                                <div>
                                    <div style={{display:"flex", alignContent:"center", justifyContent:"center"}}>
                                        <DeleteIcon 
                                            onClick={() => dispatch(removeProduct({
                                                productId: element.id,
                                            }))} style={{fontSize:"30px", cursor:"pointer"}} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}