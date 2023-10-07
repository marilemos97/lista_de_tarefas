let contador = 0;
let input = document.getElementById('inputTarefa')
let btnadd = document.getElementById('btnAdd')
let main = document.getElementById('areaLista')

console.log(inputTarefa)
console.log(btnAdd)
console.log(areaLista) 

function addTarefa() {
   let valorInput = input.value;
   if ((valorInput !=="") && (valorInput !== null) && (valorInput !== undefined)) {++contador;
   let novoItem = `<div id="onclick="marcarTarefa" ${contador}" class="item">
         <div (${contador}) class="item-icone">
               <input type="checkbox" name="feIto" id="feIto">
         </div>
         <div (${contador}) class="item-nome">
            ${valorInput}
         </div>`;
         
      main.innerHTML += novoItem;
      input.value = "";
      input.focus();
      }
      };
      
   function deletar(id){
      var tarefa = document.getElementById(id);
      var classes = getAttribute("id");
      console.log(tarefa)
      tarefa.remove();
   };
   
/*input.addEventListener(("keyup"), function(event) {
   if(event.key(code===13)){
      event.preventDefault();
      btnAdd.click();
   }
});*/