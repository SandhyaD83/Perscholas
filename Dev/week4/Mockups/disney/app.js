let imgArray=["https://hips.hearstapps.com/hmg-prod/images/disney-movies-2023-ant-man-1673544979.jpeg?crop=0.973xw:0.822xh;0.00850xw,0.0644xh&resize=980:*","https://hips.hearstapps.com/hmg-prod/images/disney-movies-2023-guardians-of-the-galaxy-1673546742.jpeg?crop=1.00xw:0.846xh;0,0.129xh&resize=980:*"
,"https://hips.hearstapps.com/hmg-prod/images/disney-movies-2023-the-little-mermaid-1673543856.jpeg?crop=1.00xw:0.845xh;0,0.155xh&resize=980:*",
"https://hips.hearstapps.com/hmg-prod/images/disney-movies-2023-elemental-1673547250.jpeg?crop=1.00xw:0.845xh;0,0.0528xh&resize=980:*"];

function movieBox(btn) {
     if(btn==="btn1"){
      let image1=document.getElementById('movie');
     image1.src= imgArray[0];
     }
     else if(btn==="btn2"){
      let image1=document.getElementById('movie');
     image1.src= imgArray[1];
     }
     else if(btn==="btn3"){
      let image1=document.getElementById('movie');
     image1.src= imgArray[2];
     }
     else if(btn==="btn4"){
      let image1=document.getElementById('movie');
     image1.src= imgArray[3];
     }
     
}