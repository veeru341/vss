import React, { useState, useEffect } from "react"
import "./App.css"
import Header from "./Components/Header"
import Login from "./Pages/Login"
import About from "./Pages/About"
import Cart from "./Pages/Cart"
import Products from "./Pages/Products"
import Home from "./Pages/Home"
import Users from "./Pages/Users"
import UserDetails from "./Pages/UserDetails"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PrivateRoutes from "./utils/PrivateRoutes"

export default function App() {
    return (
        <div className="backgroundimage">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path="/products" element={<Products />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/users/:id" element={<UserDetails />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}