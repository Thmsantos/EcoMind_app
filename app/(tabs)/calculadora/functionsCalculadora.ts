import axios from 'axios';

export function getConsumoEnergia(valorEletricidade: string, tipoEletricidade: string, valorGas: string, tipoGas: string) {
    return {
      eletricidade: {
        valor: parseFloat(valorEletricidade),
        tipo: tipoEletricidade,
      },
      gas: {
        valor: parseFloat(valorGas),
        tipo: tipoGas,
      },
    };
  }
  
  export function getDadosLocomocao(transporteSelecionado: string, kmPercorridos: string) {
    return {
      transporte: transporteSelecionado,
      km: `${kmPercorridos} KM`,
    };
  }
  
  export function getTodosOsValores(
    nomeMes: string,
    valorEletricidade: string,
    tipoEletricidade: string,
    valorGas: string,
    tipoGas: string,
    transporteSelecionado: string,
    kmPercorridos: string
  ) {
    const energia = getConsumoEnergia(valorEletricidade, tipoEletricidade, valorGas, tipoGas);
    const locomocao = getDadosLocomocao(transporteSelecionado, kmPercorridos);
    
    return { energia, locomocao, nomeMes};
  }
  

  /* Função sendo chamada no botão salvar - converte lista de veículos para valores do tipo boolean */
  const todosVeiculos = [
  "carro",
  "moto",
  "barco",
  "caminhão",
  "ônibus",
  "avião",
  "helicóptero",
  "trem",
];

export function criaObjetoTransportes(selecionados: string[]) {
  const obj: { [key: string]: boolean } = {};

  todosVeiculos.forEach((veiculo) => {
    obj[veiculo] = selecionados.includes(veiculo);
  });

  return obj;
}


