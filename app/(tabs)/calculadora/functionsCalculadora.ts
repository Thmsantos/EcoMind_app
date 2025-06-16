import axios from 'axios';

const listaTransportes = [
  'carro',
  'moto',
  'barco',
  'caminhão',
  'ônibus',
  'avião',
  'helicóptero',
  'trem',
];

export function criaObjetoTransportes(selecionados: string[]) {
  return listaTransportes.reduce((acc, transporte) => {
    acc[transporte] = selecionados.includes(transporte);
    return acc;
  }, {} as { [key: string]: boolean });
}

export function montaObjetoParaEnvio(
  idUser: string,
  mes: string,
  consumoEnergia: string,
  consumoGas: string,
  consumoTransporte: { [key: string]: boolean },
  consumoCarbono: string,
  
) {
  return {
    idUser: idUser,
    mes: mes,
    consumoEnergia: consumoEnergia,
    consumoGas: consumoGas,
    consumoTransporte: consumoTransporte,
    consumoCarbono: consumoCarbono,
    balanco: 'positivo',
  };
}

export async function enviarCalculoParaBanco(data: any) {
  try {
    const response = await axios.post('http://127.0.0.1:2010/api/calculos/create', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Enviado com sucesso!', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    throw error;
  }
}


