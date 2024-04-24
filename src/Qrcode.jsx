import { useState } from "react";
import "./Qrcode.css";
//  const arr=useState("qrcode.jpg");
//  console.log(arr)
export const Qrcode = () => {
    const [img,setImg]= useState("");
    const [loading,setLoading]=useState(false);
    const [qrData, setQrData]= useState("https://youtube.com");
    const[qrSize,setQrSize]=useState("150")
 async function generateQR(){
       setLoading(true);
       try{
const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
setImg(url);
       }catch(error){
         console.log("error generating QR Code",error)
       }finally{
        setLoading(false);
       }
    }
    function downloadQr(){
        fetch(img)
        .then((response)=>response.blob())
        .then((blob)=>{
            const Link=document.createElement("a");
            Link.href=URL.createObjectURL(blob);
            Link.download="qr.png";
            document.body.appendChild(Link);
            Link.click();
            document.body.removeChild(Link);
        })
    }
  return(
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please Wait...</p>}
        {img && <img src={img} className="qr-code-image"/>}
        <div>
            <label htmlFor="dataInput" className="input-label">
                Data for QR Code
            </label>
            <input type="text"  id="dataInput" placeholder="Enter data for QR Code" onChange={(e)=>setQrData(e.target.value)}/>
            <label htmlFor="sizeInput" className="input-label">
                Image size (e.g., 150)
            </label>
            <input type="text" id="sizeInput" placeholder="Enter image size" onChange={(e)=>setQrSize(e.target.value)}/>
            <button className="generate-button" disabled={loading} onClick={(generateQR)}> Generate QR Code</button>
            <button className="download-button" onClick={(downloadQr)}> Downoad QR Code</button>
        </div>
<p className="footer">Designed by <a href="#">Monisha</a></p>
    </div>
  )
}
