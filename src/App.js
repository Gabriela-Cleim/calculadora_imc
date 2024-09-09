import { useState } from 'react'
import './app.css'

function App(){

  /*dentro dos cochetes vai dois valores, qual nome quero chamar e nome que quero chamar pra trocar o valor.
  dentro do useState vai o valor padrao que eu quero definir para esse estado*/
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');

  function calcularIMC(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.6){
      setMensagem("Voce esta abaixo do peso! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      setMensagem("Peso ideal! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
      setMensagem("Voce esta levemente acima do peso! Seu IMC: " + imc.toFixed(2))
    }else if(imc > 34.9){
      setMensagem("Cuidado obesidade! Seu IMC: " + imc.toFixed(2))
    }
  }

  return(
    <div className="app">
      <h1>Caculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) EX: 90"
          //aqui estou fazendo o link do input com o meu useState
          value={peso}
          //aqui ele vai ser chamado toda vez que tiver uma mudança e com isso salvar o que foi digitado
          onChange={(e) => setPeso(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Altura em (cm) EX: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      

      <h2>{mensagem}</h2>

    </div>
  )
}

/*aqui estou exportando para o index saber o que renderizar e essa linha de codigo 
pode ser colocada direto na funtion tambem: export default function App(){}*/ 
export default App; 