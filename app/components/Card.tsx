import React from 'react'
import artigos from '../mock_data/mockData'; 
import { Artigo } from '../mock_data/mockData'; 
import Link from 'next/link';

const Card = () => {

  return (
    <div>
      {artigos.map((element: Artigo) => (
        <div key={element.key}>
          <p>{element.titulo}</p>
          <p>{element.texto}</p>
          <p>{element.assunto}</p>
          <p>{element.autor}</p>
          <button>
            <Link href={`/article/${element.key}`}>Ler artigo</Link>
          </button>
        </div>
      ))}
    </div>
  )
}

export default Card
