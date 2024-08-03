import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNavigation() {
  return (
    <nav>
        <NavLink style={(obj)=>{
            console.log(obj);
            if(obj.isActive == true){
                return{backgroundColor:"green",color:"white"}
            }
        }} to="/home">Home</NavLink>
        <NavLink style={(obj)=>{
            console.log(obj);
            if(obj.isActive == true){
                return{backgroundColor:"green",color:"white"}
            }
        }} to="/contact">Contact</NavLink>
        <NavLink style={(obj)=>{
            console.log(obj);
            if(obj.isActive == true){
                return{backgroundColor:"green",color:"white"}
            }
        }} to="/details">Details</NavLink>
        <NavLink to="/" onClick={()=>{
            localStorage.clear();
        }}>Siguout</NavLink>
    </nav>
  )
}

export default TopNavigation