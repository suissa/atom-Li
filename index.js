module.exports = { 
  simbolo: 'Li', 
  nome: 'lítio',
  familia: {
    {      
      coluna: '1'
    }, 
    {
      grupo: '1A'
    }, 
    {
      descritiva: 'metal alcalino'
    }
  }, 
  periodo: 1, 
  numero: {
    eletrons: 3,
    neutrons: 3,
    protons: 3
  },
  distribuicaoEletronica: {
    k: {
      s: 2
    },
    l: {
      s: 1, p: 0
    },
    m: {
      s: 0, p: 0, d: 0
    },
    n: {
      s: 0, p: 0, d: 0, f: 0
    },
    o: {
      s: 0, p: 0, d: 0, f: 0
    },
    p: {
      s: 0, p: 0, d: 0
    },
    q: {
      s: 0, p: 0
    }
  },
  propriedades: {
    fisicas: {
      densidade: {
        valor: 
        unidade: 'kg/m3'
      },
      estadodaMateria: {   
        valor: 'gasoso' 
      },
      raioAtomico: {
        valor: , 
        unidade: 'pm'
      },
      massaAtomica: {
        valor: , 
        unidade: 'u'
      }
    },
    quimicas: {
      caraterAcidoBase: {
        valor: 'basico'
      },
      meiaVida: {   
        nome: 'meiaVida',
        valor: 0,842, 
        unidade: {
          unidade: 's',
          nome: 'Segundos',
          descricao: 'Medida de tempo'
        }
      },
      estadoOxidacao: require('property-estado-oxidacao-h'),
      estruturaCristalina: require('property-estrutura-cristalina-h'),
      eletronegatividadePauling: require('property-eletronegatividade-de-pauling-h'),
      pontoFusao: {
        valor: , 
        unidade: require('unity-k').unidade
      },
      pontoEbulicao: {   
        valor: , 
        unidade: require('unity-k').unidade
      },
      energiaIonizacao: {   
        valor: 1312, 
        unidade: require('unity-kjXmol-1').unidade
      },
      raioCovalente: {   
        valor: 12.3, 
        unidade: require('unity-pm').unidade
      },
      raioVanderWaals: {   
        valor: 120, 
        unidade: require('unity-pm').unidade
      },
      entalpiadefusao: {   
        valor: 0.05868, 
        unidade: require('unity-kjXmol-1').unidade
      },
      entalpiadevaporizacao: {   
        valor: 0.44936, 
        unidade: require('unity-kjXmol-1').unidade
      },
      volumeMolar: {   
        valor: 0.0000114, 
        unidade: require('unity-kjXmol-1').unidade
      },
      pressaodeVapor: {
        pressao: {
          valor: 209, 
          unidade: require('unity-pa').unidade,
        },
        temperatura: {
          valor: 23, 
          unidade: require('unity-k').unidade,
        }
      },
      calorEspecífico: {   
        valor: 14304, 
        unidade: 'J/(kg·K)'
      },
      condutividadeEletrica: {   
        valor: 106, 
        unidade: 'S/m'
      },
      condutividadeTermica: {
        valor: 0.1815,
        unidade: 'W/(m·K)'
      } 
    }
  }
}