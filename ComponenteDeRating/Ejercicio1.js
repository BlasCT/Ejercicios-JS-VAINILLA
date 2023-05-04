const tecno = [20, 30, true, "react", "javascript"];

const nuevoTecno = tecno.map((e)=>{
    if(e === "javascript"){
        return "HTML"
    }else{
        return e
    }
})

console.log(nuevoTecno)