// data/projectsData.js
import { Project } from '../models/project';


// const projectsData: Project[] = [
//   {
//     id: 1,
//     title: 'Lunar Axe',
//     description: 'Este é o primeiro projeto.',
//     functions: 'React, Tailwind, Node.js',
//     image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1305820/header.jpg?t=1726275408',
//     tags: ['Steam'],
//     images: ['/project1-1.jpg', '/project1-2.jpg'],
//     video: 'https://www.youtube.com/embed/video1',
//   },
//   // Adicione os outros projetos aqui
// ];

// Criação dos projetos usando a estrutura definida na classe Project
// const projectsData2 = [
//   new Project(
//     1,
//     'Lunar Axe',
//     'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1305820/header.jpg?t=1726275408',
//     'Jogue uma série de minijogos de diferentes gêneros, cada um com mecânicas e visuais únicos!',
//     'Jogue uma série de minijogos de diferentes gêneros, cada um com mecânicas e visuais únicos!',
//     'Creative Director, Producer',
//     ['Steam', 'Commercial'],
//     [
//       'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2201660/ss_c62c5f038be4b5436aac062cba48ea447dfaad4d.600x338.jpg?t=1722451486',
//       'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2201660/ss_01af3d5df4970df4ff8406514f6b4e80913acd89.600x338.jpg?t=1722451486'
//     ],
//     'https://video.akamai.steamstatic.com/store_trailers/256952448/movie480_vp9.webm?t=1719005570'
//   ),
//   new Project(
//     2,
//     'Final Forge',
//     'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2260170/header.jpg?t=1726275406',
//     'Jogue uma série de minijogos de diferentes gêneros, cada um com mecânicas e visuais únicos!',
//     'Jogue uma série de minijogos de diferentes gêneros, cada um com mecânicas e visuais únicos!',
//     'Creative Director, Producer',
//     ['Steam', 'Commercial'],
//     [
//       'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2201660/ss_c62c5f038be4b5436aac062cba48ea447dfaad4d.600x338.jpg?t=1722451486',
//       'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2201660/ss_01af3d5df4970df4ff8406514f6b4e80913acd89.600x338.jpg?t=1722451486'
//     ],
//     'https://video.akamai.steamstatic.com/store_trailers/256952448/movie480_vp9.webm?t=1719005570'
//   ),
//   new Project(
//     3,
//     'Logic Light',
//     'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1712950/header.jpg?t=1676315354',
//     'Jogue uma série de minijogos de diferentes gêneros, cada um com mecânicas e visuais únicos!',
//     'Jogue uma série de minijogos de diferentes gêneros, cada um com mecânicas e visuais únicos!',
//     'Creative Director, Producer',
//     ['Steam', 'Commercial'],
//     [
//       'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2201660/ss_c62c5f038be4b5436aac062cba48ea447dfaad4d.600x338.jpg?t=1722451486',
//       'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2201660/ss_01af3d5df4970df4ff8406514f6b4e80913acd89.600x338.jpg?t=1722451486'
//     ],
//     'https://video.akamai.steamstatic.com/store_trailers/256952448/movie480_vp9.webm?t=1719005570'
//   ),
//   new Project(
//     4,
//     'Marabundle',
//     'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2201660/header.jpg?t=1722451486',
//     'Jogue uma série de minijogos de diferentes gêneros, cada um com mecânicas e visuais únicos!',
//     'Jogue uma série de minijogos de diferentes gêneros, cada um com mecânicas e visuais únicos!',
//     'Creative Director, Producer',
//     ['Steam', 'Commercial'],
//     [
//       'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2201660/ss_c62c5f038be4b5436aac062cba48ea447dfaad4d.600x338.jpg?t=1722451486',
//       'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2201660/ss_01af3d5df4970df4ff8406514f6b4e80913acd89.600x338.jpg?t=1722451486'
//     ],
//     'https://video.akamai.steamstatic.com/store_trailers/256952448/movie480_vp9.webm?t=1719005570'
//   ),
//   new Project(
//     5,
//     'Amazonia Animals - Jigsaw puzzle',
//     'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1305820/header.jpg?t=1726275408',
//     'Jogue uma série de minijogos de diferentes gêneros, cada um com mecânicas e visuais únicos!',
//     'Jogue uma série de minijogos de diferentes gêneros, cada um com mecânicas e visuais únicos!',
//     'Creative Director, Producer',
//     ['Steam', 'Commercial'],
//     [
//       'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2201660/ss_c62c5f038be4b5436aac062cba48ea447dfaad4d.600x338.jpg?t=1722451486',
//       'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2201660/ss_01af3d5df4970df4ff8406514f6b4e80913acd89.600x338.jpg?t=1722451486'
//     ],
//     'https://video.akamai.steamstatic.com/store_trailers/256952448/movie480_vp9.webm?t=1719005570'
//   ),
// ];

// export default projectsData;
