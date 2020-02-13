import React from 'react';


const Topbar = () => {
    return(
        <div className = "Topbar">
            <a href = "#">Trips</a>
            <a href = "#">About</a>
            <a href = "#">Contect</a>
            <a href="#"><i class="fas fa-search"></i></a>
            <a href= "#"> <i class="fas fa-bell"></i></a>
            <img src = "https://i.imgur.com/J3j5rFy.jpg"  alt="profile-img"/>
        </div>
    )
} 

export default Topbar;