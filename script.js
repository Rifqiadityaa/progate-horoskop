const btn = document.getElementById('clickable')
const outputs = document.getElementById('outputs')

//function yang akan berjalan saat button di click
btn.addEventListener('click', function () {
    //untuk declare random numbers
    let rand = Math.random()
    //disini panggil function convert untuk ubah angka random ke string text
    let text = convert(rand)
    
    //setiap button di click akan membuat element 'p' baru, lalu element 'p' itu akan diisi dengan text hasil convert dan akan di append ke parent element div dengan id 'outputs'
    const p = document.createElement('p')
    p.innerHTML = String(text)
    outputs.appendChild(p)
})


//mengconvert angka random menjadi text dengan percentage 60%, 20%, 20%
function convert (rand){
    let text = ""

    if (rand < 0.6){ //60%
        text = "Boleh juga!"
    }
    else if (rand < 0.8){ //20%
        text = "Hebat!"
    }
    else{ //20%
        text = "Mengerikan..."
    }

    return text
}