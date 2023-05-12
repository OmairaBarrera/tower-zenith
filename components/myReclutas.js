export default {

    ws: new Worker("./storage/wsReclutas.js", { type: "module" }),

    reculta(data) {
        this.ws.postMessage({ module: "reclutas", data: data });
        this.ws.addEventListener("message", (e) => {
            console.log(e);
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(".info-tabla").innerHTML = "";
            document.querySelector(".info-tabla").append(...doc.body.children);
        });
    }
}