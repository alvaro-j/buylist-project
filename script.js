let add = document.getElementById("add")
let remover = document.getElementById("remover")
add.addEventListener('click', addOptionSelect)
remover.addEventListener('click', removeOptionSelect)
let inputtxt = document.getElementById('input')
let inputnumber = document.getElementById('inputqtd')

function addOptionSelect() {
  let select = document.getElementById("lista");
  let option = document.createElement("option");
  option.text = input.value + "  Qtd.:" + inputqtd.value;
  select.add(option);
  inputtxt.value = ''
  inputnumber.value= ''
}

function removeOptionSelect() {
  let x = document.getElementById("lista")
  x.remove(x.selectedIndex);
}
