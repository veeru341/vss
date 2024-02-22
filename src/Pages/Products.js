import React, { useState, useEffect } from 'react'
import axios from "axios";
import image1 from "../Images/watch.jpg"
import { useDispatch } from 'react-redux';
import { addproduct } from "../containers/redux/reducers/CartReducer"

export default function Cart() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setData(res.data))
  }, [])

  return (
    <div className="productpage" style={{ backgroundColor: "black" }}>
      <div className="productsliderdiv">
        <img src={image1} height="550px" width="100%" alt="phone wallpaper" />
      </div>
      <div className="productcart" style={{ marginTop: "-320px" }}>
        {
          data.map((element) => {
            return (
              <div className="productdiv" style={{ backgroundColor: "white" }}>
                <div>
                  <img src={element.image} className="productimg" />
                </div>
                <div>
                  <h3>{element.title}</h3>
                </div>
                <div>
                  <h3>Price : ₹ {element.price}</h3>
                </div>
                <div>
                  <button
                    className="addbutton"
                    onClick = {()=>dispatch(addproduct({
                      productId : element.id,
                      productImage : element.image,
                      productName : element.title,
                      productPrice : element.price
                    }))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}