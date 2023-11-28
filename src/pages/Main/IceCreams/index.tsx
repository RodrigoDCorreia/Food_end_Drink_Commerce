import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

export default function IceCreams() {
  const data = [

    {
      "id": 1,
      "snack": "ice-cream",
      "name": "Casquinha",
      "description": "A casquinha crocante e saborosa que nossos clientes amam.",
      "price": 4.5,
      "image": "https://i.imgur.com/YGmeoCm.jpg"
    },
    {
      "id": 2,
      "snack": "ice-cream",
      "name": "Chocolate com granulado",
      "description": "Sorvete de chocolate com granulados em chocolate para você se deliciar.",
      "price": 6,
      "image": "https://i.imgur.com/osAHOLe.jpg"
    },
    {
      "id": 3,
      "snack": "ice-cream",
      "name": "Flocos",
      "description": "O tradicional flocos vem com cobertura em chocolate para adocicar seu dia.",
      "price": 7,
      "image": "https://i.imgur.com/qgnFLiy.jpg"
    },
    {
      "id": 4,
      "snack": "ice-cream",
      "name": "Creme",
      "description": "O simples sorvete de creme com um gosto irresistível.",
      "price": 6.5,
      "image": "https://i.imgur.com/dFLysrT.jpg"
    },
    {
      "id": 5,
      "snack": "ice-cream",
      "name": "Morango",
      "description": "O clássico sorvete de morango que deixe tudo mais leve.",
      "price": 10,
      "image": "https://i.imgur.com/0TWnEI7.jpg"
    },

    {
      "id": 6,
      "snack": "ice-cream",
      "name": "Berrylicious Swirl",
      "description": "Um sorvete irresistível com uma mistura de chocolates, mirtilos e uma generosa onda de creme de baunilha.",
      "price": 7.75,
      "image": "https://i.imgur.com/YSeKMWP.png"
    },
    {
      "id": 7,
      "snack": "ice-cream",
      "name": "Caramel Cookie Crunch",
      "description": "Sorvete indulgente com pedaços de cookies crocantes, drizzles de caramelo e uma base de baunilha cremosa.",
      "price": 15.50,
      "image": "https://i.imgur.com/tI2ML3g.png"
    },
    {
      "id": 8,
      "snack": "ice-cream",
      "name": "Double Chocolate Fudge",
      "description": "Sorvete duplo de chocolate com camadas generosas de fudge, perfeito para os amantes de chocolate.",
      "price": 12.75,
      "image": "https://i.imgur.com/OhLresv.png"
    },

]

  return (
    <>
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
