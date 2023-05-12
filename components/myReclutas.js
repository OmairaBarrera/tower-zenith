export default{
    reculta(data){
        const ws = new Worker("storage/wsReclutas.js", {type:"module"}); 
        ws.postMessage({module:"reclutas", data: data});
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(".info-tabla").innerHTML="";
            document.querySelector(".info-tabla").append(...doc.body.children);
            ws.terminate()
        });
    }
}