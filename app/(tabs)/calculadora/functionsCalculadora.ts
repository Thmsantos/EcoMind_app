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
    valorEletricidade: string,
    tipoEletricidade: string,
    valorGas: string,
    tipoGas: string,
    transporteSelecionado: string,
    kmPercorridos: string
  ) {
    const energia = getConsumoEnergia(valorEletricidade, tipoEletricidade, valorGas, tipoGas);
    const locomocao = getDadosLocomocao(transporteSelecionado, kmPercorridos);
    return { energia, locomocao };
  }
  