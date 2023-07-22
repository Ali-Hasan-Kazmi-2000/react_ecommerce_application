import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149499592.jpg?w=740&t=st=1690009227~exp=1690009827~hmac=02c9cc941e1c54ffa0e7db1b960dbecf8b7248694fc78753ecc9b6500ed14867" alt="Bootstrap" width="30" height="24" />
                </Link>
                <h2 className='text-white'>CUSTOMIZE YOUR SHIRTS</h2>
            </div>
        </nav>
    )
}

export default Header