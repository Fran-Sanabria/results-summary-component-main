import data from './data.json' with {type: 'json'};
for (let i=0; i<data.length; i++){
    let icono = document.getElementById(`ic${[i]}`);
    let cat = document.getElementById(`cat${[i]}`)
    let scores = document.getElementById(`sc${[i]}`)
    icono.setAttribute("src",data[i].icon)
    cat.textContent = data[i].category
    scores.textContent = data[i].score
    scores.innerHTML += '<span> /100</span>'
  }
