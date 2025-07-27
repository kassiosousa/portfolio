// data/projectsData.js
import { Project } from '../models/project';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Lunar Axe',
    description: 'After a big earthquake in the city, ruins of an old building collapse and you end up trapped inside an abandoned house. Find a way out and unravel the mystery of inexplicable tremors, revealing ancient secrets and a mystical artifact, before the city is destroyed.',
    text: ''+
        'Jogo que se passa no centro histórico de São Luís e conta com arte desenhada a mão, trilha sonora imersiva com instrumentos regionais. '+
        'Além de programador, fui o produtor geral e atuei como PR.',
    functions: 'Programmer, Producer, PR',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1305820/header.jpg?t=1726275408',
    tags: ['Steam', 'Commercial', 'Console'],
    images: [
            'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1305820/ss_0d06ce6fe90c1673fd6fccdb1ead03f05c1017ed.600x338.jpg?t=1728257825',
            'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1305820/ss_0320b55115bf7ae46c8f05ddc28f918419a37e9e.600x338.jpg?t=1728257825'
          ],
    link: 'https://store.steampowered.com/app/1305820/Lunar_Axe/',
    video: 'https://store.steampowered.com/gfxproxy/betagfx/apps/256893957/movie480_vp9.webm?t=1656475707',
  },
  {
    id: 2,
    title: 'Final Forge',
    description: "Defend your tower and protect the dwarf's treasure from marauding creatures in this roguelike tower defense game. Explore the region, collect resources and choose the right upgrades. But be careful, don't leave your fortress empty for too long.",
    text: 'Jogo autoral comercial da OPS Game Studio desenvolvido para plataformas Steam e Consoles',
    functions: 'Creative Director, Producer, PR',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2260170/header.jpg?t=1726275406',
    tags: ['Steam', 'Commercial'],
    images: 
          [
            'https://store.steampowered.com/gfxproxy/betagfx/apps/2260170/ss_d16baa899008a3c9719bcc3b6485636dd9f8f4bf.600x338.jpg?t=1752442068',
            'https://store.steampowered.com/gfxproxy/betagfx/apps/2260170/ss_afa84b77444c94c082367ecc1ad08c199f31fe71.600x338.jpg?t=1752442068'
          ],
    link: 'https://store.steampowered.com/app/2260170/Final_Forge/',
    video: 'https://store.steampowered.com/gfxproxy/betagfx/apps/257035800/movie480_vp9.webm?t=1720521397',
  },
  {
    id: 3,
    title: 'Logic Light',
    description: 'A minimalist puzzle experience to restore the electricity of the houses after a blackout',
    text: 'Jogo criado para desafiar minhas habilidades de game designer criando um projeto e executando toda a programação sozinho.',
    functions: 'Programmer, Creative Director, Producer, PR',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1712950/header.jpg?t=1676315354',
    tags: ['Steam', 'Commercial'],
    images: 
    [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1712950/ss_d29b136828379f5bca86408913771f91050799d3.600x338.jpg?t=1676315354',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1712950/ss_a4a80b89716e6d6f1b4447a47235e67d4b5f7250.600x338.jpg?t=1676315354'
    ],
    link: 'https://store.steampowered.com/app/1712950/Logic_Light/',
    video: 'https://video.fastly.steamstatic.com/store_trailers/256871737/movie480_vp9.webm?t=1643748636',
  },
  {
    id: 4,
    title: 'Marabundle',
    description: 'Play a series of small games of multiple genres, each with a unique playstyle and visuals! Defeat skeletons, play cards, ride a train or fight aerial combat in this collection of indie games.',
    text: 'Projeto de 4 jogos criados por 4 estúdios diferentes. Fui responsável pelo projeto One Step to Rest, produzido pela OPS Game Studio',
    functions: 'Programmer, Creative Director, Producer',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2201660/header.jpg?t=1722451486',
    tags: ['Steam', 'Commercial'],
    images: 
    [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2201660/ss_c62c5f038be4b5436aac062cba48ea447dfaad4d.600x338.jpg?t=1722451486',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2201660/ss_01af3d5df4970df4ff8406514f6b4e80913acd89.600x338.jpg?t=1722451486'
    ],
    link: 'https://store.steampowered.com/app/2201660/Marabundle/',
    video: 'https://video.fastly.steamstatic.com/store_trailers/256952448/movie480_vp9.webm?t=1719005570',
  },
  {
    id: 5,
    title: 'Amazon Animals',
    description: "Amazon Animals is a jigsaw puzzle featuring animals from the Amazon rainforest. Embark on a journey to the world's largest forest and meet endangered animals in beautiful hand-drawn 2D artwork",
    text: 'Jogo relaxante de quebra-cabeças para conhecer mais os animais ameaçados da fauna amazonica',
    functions: 'Creative Director, Producer, PR',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3382880/e1a0e18ccb03423cb5add1b7f32b7cd4952df30d/header.jpg?t=1749479041',
    tags: ['Steam', 'Commercial'],
    images: 
    [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3382880/ss_8b2cdb0fce5597cd7b3e145c2c8e08fff735964e.600x338.jpg?t=1749479041',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3382880/ss_2ead91cb973d1c9964c509360190cf66f502a87f.600x338.jpg?t=1749479041'
    ],
    link: 'https://store.steampowered.com/app/3382880/Amazon_Animals/',
    video: 'https://video.fastly.steamstatic.com/store_trailers/257080403/movie480_vp9.webm?t=1739446698',
  },
];

export default projectsData;
