import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Drinks() {
  const data = [

    {
      "id": 1,
      "snack": "drink",
      "name": "Coca-Cola 2L",
      "description": "A tradicional Coca-Cola que a família brasileira adora.",
      "price": 12,
      "image": "https://i.imgur.com/Lg3aKhf.jpg"
    },
    {
      "id": 2,
      "snack": "drink",
      "name": "Guaraná Antarctica",
      "description": "O irresistível e saboroso Guaraná Antarctica em sua versão de latinha.",
      "price": 6.5,
      "image": "https://i.imgur.com/hOBrOIm.jpg"
    },
    {
      "id": 3,
      "snack": "drink",
      "name": "Suco de Abacaxi",
      "description": "Suco natural de abacaxi com leves incrementos de algumas hortaliças para fortificar sua saúde.",
      "price": 8,
      "image": "https://i.imgur.com/VV9qTMh.jpg"
    },
    {
      "id": 4,
      "snack": "drink",
      "name": "Suco de Laranja",
      "description": "Suco natural de laranja para você que é amante dessa fruta.",
      "price": 8,
      "image": "https://i.imgur.com/2Lf2gHy.jpg"
    },
    {
      "id": 5,
      "snack": "drink",
      "name": "Green Goodness",
      "description": "Um suco saudável e revitalizante com maçã, pepino e espinafre, proporcionando uma explosão de nutrientes verdes.",
      "price": 5.25,
      "image": "https://i.imgur.com/iDecNrA.jpeg"
    },
    {
      "id": 6,
      "snack": "drink",
      "name": "Sunset Citrus Fusion",
      "description": "Uma fusão de citrinos ao pôr do sol, com laranjas maduras, limões suculentos e uma pitada de tangerina.",
      "price": 4.99,
      "image": "https://i.imgur.com/cNhYIyD.jpeg"
    },
    {
      "id": 7,
      "snack": "drink",
      "name": "Citrus Zing",
      "description": "Um suco cítrico revigorante com uma combinação de laranja, limão e grapefruit, ideal para quem aprecia sabores frescos.",
      "price": 4.75,
      "image": "https://i.imgur.com/STT9sBp.jpeg"
    }
]

  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
