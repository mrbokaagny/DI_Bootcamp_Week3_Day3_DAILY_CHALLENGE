let input = document.getElementById('inputContent')
let pattern = /[a-z]/g
input.onkeyup = (e) =>{
    let key = e.key
    console.log(e)
    let result = key.match(pattern)
    if(result == null){
        input.value = (input.value).replace(key,'')
    }
}