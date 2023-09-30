export interface Artigo {
    key: string;
    titulo: string;
    texto: string;
    assunto: string;
    autor: string;
  }

const artigos: Artigo[] = [
    {
      key: '11254',
      titulo: "Bitcoin",
      texto: "exemplo de texto bitcoin",
      assunto: "economia",
      autor: "keynes",
},
    {
        key: '1156156',
        titulo: "jorge amado",
        texto: "exemplo texto jorge amado",
        assunto: "literatura",
        autor: "Flavio",
    }
]

export default artigos;