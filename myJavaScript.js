let prompter = document.querySelector('marquee');
let marqueeText=document.getElementById("marquee-text")
let fileData=""
let btnStart=document.getElementById("btn-start-stop")
let fileContent=document.getElementById("file-content")
let btnUpload=document.getElementById("btn-upload")
let state = 'start';



btnUpload.addEventListener('change',()=>{
const fr1=new FileReader();
fr1.readAsText(btnUpload.files[0])
fr1.addEventListener('load', ()=>{
fileData=fr1.result
fnGetText()
 })
},false)

// Listen for keyup and click events
// document.addEventListener('keyup', controlPrompter);
// prompter.addEventListener('click', controlPrompter);


// /**
//  * Control the prompter speed and scrolling
//  * @param  {Event} event The event object
//  */


//  function controlPrompter (event) {
// 	if (event.code && event.code !== 'Space') return;
// 	state = state === 'start' ? 'stop' : 'start';
// 	prompter[state]();
// }


function fnPromoterStart(){
    if(state==='start'){
       
       state="stop"
       prompter[state]();
       btnStart.innerHTML="Start"
   
    }
    else{
       state="start"
       prompter[state]();
       btnStart.innerHTML="Stop"
    }
   
   }


// function fnOpenFile(){ 
//     fileData=""           //clear text-area
//    fetch("myContent.txt")
//    .then((res)=>res.text())
//    .then((text)=>{
//    fileData=text          //writing on text -area
  
//    fnGetText()

//    })
//    .catch((e)=>console.error(e))
// }

function fnGetText(){
    fileContent.innerHTML=fileData
    marqueeText.innerHTML=fileData

}
