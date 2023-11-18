import React from "react";
 import styles from "./Panel.module.css";
 
 const Panel = ({ images }) => {
 
   return (
     <div className= "gallery">
    
    <div className= "image_row">
                   <img  className= "image_comic_1" src = {images[0]}/>
         
                  <img  className="image_comic_1" src = {images[1]}/>
       
                  <img  className="image_comic_1" src = {images[2]}/>
       </div>
 
      
       <div className= "image_row">
                   <img  className= "image_comic_2" src = {images[3]}/>
         
                  <img  className="image_comic_2" src = {images[4]}/>
       
                  <img  className="image_comic_2" src = {images[5]}/>
                  <img  className="image_comic_2"src = {images[6]}/>
       </div>
       
       <div className= "image_row">
                   <img  className= "image_comic_1" src = {images[7]}/>
         
                  <img  className="image_comic_1" src = {images[8]}/>
       
                  <img  className="image_comic_1" src = {images[9]}/>
       </div>
     </div>
   );
 };
 
 export default Panel;
 