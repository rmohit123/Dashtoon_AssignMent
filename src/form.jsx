import React, { useState } from "react";
import {generating} from "../Api_service/ready_to_generate"
import Panel from "../Api_service/panel";
import { default as NextImage } from "next/image";
import { jsPDF  } from "jspdf";
const Form = () =>{
    const [init, setInit] = useState("");
    const [loading , setLoading] = useState(false);
    const [show , setShow] = useState(false);
    const [img , setImg] = useState([""]);
    const handlechange = (e)=>{
        setInit(e);
     }
     const handlehome = ()=>{
        window.location.reload();
     }
     const handleDownload =  ()=>{
      const pdf = new jsPDF('p', 'mm', [326, 131]);
      let xOffset = 1;
      let yOffset = 1;

      for (let i = 0; i < 10; i++) {
          if (i % 2 === 0 && i !== 0) {
              yOffset += 65; // Adjust as needed
              xOffset = 1;
          }
          else if (i !== 0) {
              xOffset = 66;
          }

          const img1 = new Image();
          img1.src = img[0];
          //console.log(generatedImages[i]);

          pdf.addImage(img1, 'PNG', xOffset, yOffset, 64, 64);
          //xOffset += 100; // Adjust as needed
      }

      pdf.save('comic-panel.pdf');

     }
     const handleimage = async ()=>{
        try {
          setLoading(true);
          let images =  await generating(init);
          console.log(images);
         setImg(images);
          setLoading(false);
          setShow(true);
            
        } catch (error) {
          window.alert('Api Call miss! Please Try again');
            console.log(error);
        }
        
     }
    return (
      <>{
        loading && (
          <>
          <h3 className="h3_scroll"> Scroll Down To see Results </h3>
          <div className="loading_div">
        
          <div className='disp_img1'>
         <img src="/pic5.jpeg" />
            </div>
        <div className='disp_img2'>
          <img src="/pic6.webp" />
        </div>
        <NextImage
        className="load_img"
      src="/animation.gif"
      width={50}
      height={50}
      alt="Picture of the author"
    />
    
    <h3 id="load_id"> Loading....</h3>
   </div>
   </>
        )
      }
    {!loading &&  !show && (
      <div className="form_div">
    <form className="form_f">
      <input placeholder="what are you searching for" className = 'input_field' type = 'text' onChange={(e)=>{
        handlechange(e.target.value);
      }}></input>
      <br></br>
      <button className = 'input_btn' type="button" onClick={handleimage}> Generate</button>
    </form>
    </div>
    )
    }
    {show && !loading  && (
      <>
      <Panel images={img} />
      <div className="last_btn">
      <button className = 'input_btn' type="button" onClick={handleDownload}> Download Now</button>
      <button className = 'input_btn' type="button" onClick={handlehome}> Home</button>
      </div>
      </>
    )

    }
    </>
    )
}
export default Form;