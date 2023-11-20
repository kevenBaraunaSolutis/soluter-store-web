import { ProductType } from "@/types/products";

const serverImage = "https://raw.githubusercontent.com/KevenBarauna/Amma/bae5f4b9cf00048982eac9a45eaf25e5e4de80d2/AmmaFront/src/assets/perfil/";

export const apiProducts: ProductType[] = [
    {
        id: 1,
        image: `${serverImage}/imagem%20(1).svg`,
        name: "Espada Forjada à Mão",
        price: 10.99,
        description: "Uma espada imponente, habilmente forjada por ferreiros medievais. Perfeita para cavaleiros destemidos.",
      },
      {
        id: 2,
        image: `${serverImage}/imagem%20(2).svg`,
        name: "Elmo de Cavaleiro",
        price: 19.99,
        description: "Um elmo resistente e majestoso, digno de proteger a cabeça dos nobres cavaleiros em batalhas épicas.",
      },
      {
        id: 3,
        image: `${serverImage}/imagem%20(3).svg`,
        name: "Cajado Mágico",
        price: 15.99,
        description: "Um cajado poderoso, imbuido com magia ancestral. Perfeito para feiticeiros em busca de conhecimento e poder.",
      },
      {
        id: 4,
        image: `${serverImage}/imagem%20(4).svg`,
        name: "Vestimenta Real",
        price: 12.99,
        description: "Uma vestimenta luxuosa, digna de reis e rainhas. Confeccionada com os melhores tecidos e adornos.",
      },
      {
        id: 5,
        image: `${serverImage}/imagem%20(5).svg`,
        name: "Potion de Cura",
        price: 9.99,
        description: "Uma poção mágica capaz de curar ferimentos. Essencial para aventureiros que enfrentam perigos constantes.",
      },
      {
        id: 6,
        image: `${serverImage}/imagem%20(6).svg`,
        name: "Mapa do Tesouro",
        price: 14.99,
        description: "Um mapa detalhado que leva a um tesouro escondido. A chave para aventuras emocionantes e riquezas inimagináveis.",
      },
      {
        id: 7,
        image: `${serverImage}/imagem%20(7).svg`,
        name: "Flechas Encantadas",
        price: 17.99,
        description: "Flechas mágicas que brilham com poder. Ideais para arqueiros que buscam enfrentar criaturas das sombras.",
      },
      {
        id: 8,
        image: `${serverImage}/imagem%20(8).svg`,
        name: "Livro de Feitiços Antigos",
        price: 11.99,
        description: "Um livro encadernado em couro contendo feitiços perdidos do passado. Indispensável para estudiosos da magia.",
      },
      {
        id: 9,
        image: `${serverImage}/imagem%20(9).svg`,
        name: "Bálsamo de Cura",
        price: 16.99,
        description: "Um bálsamo medicinal, utilizado por curandeiros experientes. Eficiente no tratamento de ferimentos e doenças.",
      },
      {
        id: 10,
        image: `${serverImage}/imagem%20(10).svg`,
        name: "Adaga de Assasinato",
        price: 13.99,
        description: "Uma adaga afiada, perfeita para assassinos e furtivos. Ideal para ataques rápidos e letais.",
      },
];