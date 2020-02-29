import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const modulesA = {};
export default new Vuex.Store({
  state: {
    data: [
      {
        id: '001',
        name: 'Kono Subarashii Sekai ni Shukufuku wo!: Kurenai Densetsu',
        synopsis:'When Yunyun receives a seemingly serious letter regarding a potential disaster coming to her hometown, she immediately informs Kazuma Satou and the rest of his party. After a series of wacky misunderstandings, it turns out to be a mere prank by her fellow demon who wants to be an author. Even so, Megumin becomes worried about her family and sets out toward the Crimson Demons village with the gang. There, Kazuma and the others decide to sightsee the wonders of Megumin birthplace. However, they soon come to realize that the nonsense threat they received might have been more than just a joke.',
        genres: 'Adventure, Comedy, Fantasy, Magic, Parody, Supernatural',
        director: 'Takaomi Kanasaki',
        script: 'Makoto Uezu',
        studios: 'J.C.Staff',
        duration: '90 min.',
        image: require('../assets/img/001.jpg')
      },
      {
        id: '002',
        name: 'Kimi no Suizou wo Tabetai',
        synopsis:'The aloof protagonist: a bookworm who is deeply detached from the world he resides in. He has no interest in others and is firmly convinced that nobody has any interest in him either. His story begins when he stumbles across a handwritten book, titled "Living with Dying." He soon identifies it as a secret diary belonging to his popular, bubbly classmate Sakura Yamauchi. She then confides in him about the pancreatic disease she is suffering from and that her time left is finite. Only her family knows about her terminal illness; not even her best friends are aware. Despite this revelation, he shows zero sympathy for her plight, but caught in the waves of Sakura persistent buoyancy, he eventually concedes to accompanying her for her remaining days.',
        genres: 'Drama',
        director: 'Shinichirou Ushijima',
        script: 'Shinichirou Ushijima',
        studios: 'Studio VOLN',
        duration: '108 min.',
        image: require('../assets/img/002.jpg')
      },
      {
        id: '003',
        name: 'Mushishi Zoku Shou: Suzu no Shizuku',
        synopsis:'An adaptation of the last arc in the manga, Mushishi Zoku Shou: Suzu no Shizuku follows Ginko’s peculiar journey amidst the occult to unravel the mystery behind the enigmatic girl called Kaya and the mountain that has become her home.',
        genres: 'Adventure, Fantasy, Historical, Mystery, Seinen, Slice of Life, Supernatural',
        director: 'Hiroshi Nagahama',
        script: 'Yuki Urushibara',
        studios: 'Artland',
        duration: '47 min.',
        image: require('../assets/img/003.jpg')
      },
      {
        id: '004',
        name: 'Sen to Chihiro no Kamikakushi',
        synopsis:'Vivid and intriguing, Sen to Chihiro no Kamikakushi tells the story of Chihiro’s journey through an unfamiliar world as she strives to save her parents and return home.',
        genres: 'Adventure, Supernatural, Drama',
        director: 'Toshio Suzuki',
        script: 'Hayao Miyazaki',
        studios: 'Studio Ghibli',
        duration: '125 min.',
        image: require('../assets/img/004.jpg')
      },
      {
        id: '005',
        name: 'Koe no Katachi',
        synopsis:'Koe no Katachi tells the heartwarming tale of Shouya’s reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past.',
        genres: 'Drama, School, Shounen',
        director: 'Takuya Yamamura',
        script: 'Naoko Yamada',
        studios: 'Kyoto Animation',
        duration: '130 min.',
        image: require('../assets/img/005.jpg')
      },
      {
        id: '006',
        name: 'Neon Genesis Evangelion: The End of Evangelion',
        synopsis:'With the final Angel vanquished, Nerv has one last enemy left to face—the humans under Seele’s command. Left in a deep depression nearing the end of the original series, an indecisive Shinji Ikari struggles with the ultimatum presented to him: to completely accept mankind’s existence, or renounce humanity’s individuality. Meanwhile, at the core of a compromised Nerv, Gendou Ikari and Rei Ayanami approach Lilith in an attempt to realize their own ideals concerning the future of the world.',
        genres: 'Sci-Fi, Dementia, Psychological, Drama, Mecha',
        director: 'Hideaki Anno',
        script: 'Mitsuhisa Ishikawa',
        studios: 'Gainax, Production I.G',
        duration: '87 min.',
        image: require('../assets/img/006.jpg')
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getDataById: state => id => {
      return state.data.find(data => data.id === id);
    },
    getAllData: state => {
      return state.data;
    }
  },
  modules: {
    a: modulesA
  }
});
