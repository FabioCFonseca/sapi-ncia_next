'use client';
import React from 'react'
import artigos from '../../mock_data/mockData'; 
import { Artigo } from '../../mock_data/mockData';
import Comments from '@/app/components/Comments';


interface ParamsInterface {
    postId: string; 
}

const page = ({ postId }: ParamsInterface) => {
  const id: string = postId;
  const objetoArtigo: Artigo | undefined = artigos.find(element => element.key == id);
  const textoArtigo: string = objetoArtigo ? objetoArtigo.texto : 'Ops, algo deu errado!';

  return (
    <div>
        <p>{textoArtigo}</p>
        <Comments/>
    </div>
  )
}

export default page
