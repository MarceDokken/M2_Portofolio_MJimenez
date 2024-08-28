window.addEventListener("scroll", async () => {
    const { scrollTop } = document.documentElement;
    const anchor = document.querySelector("#logo");
    if (scrollTop >= 80) {
        //alert(baje 100px debo ocultar <a>)
           // alert("aca")
           anchor.classList.add("invisible")
    }
    else{
        anchor.classList.remove("invisible")
    }
    
    });