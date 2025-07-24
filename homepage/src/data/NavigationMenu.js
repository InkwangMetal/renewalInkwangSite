export const mainNavList = [
  {
    title: 'HOME',
    path: '/main',
    icon: 'icon-home'
  },
  {
    title: '회사소개',
    path: '/company',
    subnav: [
      { title: '인사말', path: '/greeting',  },
      { title: '오시는길', path: '/location',  },
    ],
    icon: 'icon-briefcase'
  },
  {
    title: '제품소개',
    path: '/products',
    subnav: [
      { title: '인산염피막', path: '/phosphate', },
      { title: '알카리착색', path: '/alkali',},
    ],
    icon: 'icon-tool'
  },
  {
    title: 'Gallery',
    path: '/gallery',
    icon: 'icon-image'
  },
]
