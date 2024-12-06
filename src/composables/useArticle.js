import { ref } from 'vue'

const articles = {
  helena: {
    title: 'HELENA',
    subtitle: 'Wooden chairs 2024',
    dimension: '531 x 508 x 704 cm',
    description: 'The Hélène collection, comprising a chair with armrest, a simple chair and an armchair, is a seating collection with an innovative design. It took me a long time to sculpt the material to give birth to this new product, which I hope will become a contemporary classic. A product with a strong, sleek design, but also with a singular language of its own.The backrest turns on itself like a ribbon to gradually form the armrests. The oval-section legs fit into the backrest, protruding slightly. This complex junction is made industrially possible using state-of-the-art tools. This assembly is the 2nd original detail that makes this chair unique.',
    mainImage: '/images/articles/helena/main.jpg',
    images: Array.from({ length: 10 }, (_, i) => ({
      src: `/images/articles/helena/${i + 1}.jpg`,
      alt: `Helena view ${i + 1}`
    })),
    models: [
      {
        id: 1,
        src: '/models/helena/helenachair.glb',
        alt: 'Chair 3D Model',
        label: '3D Model chair'
      },
      {
        id: 2,
        src: '/models/helena/helenaarmchair.glb',
        alt: 'Armchair 3D Model',
        label: '3D Model armchair'
      },
      {
        id: 3,
        src: '/models/helena/helenalounge.glb',
        alt: 'Lounge Chair 3D Model',
        label: '3D Model loungechair'
      },
      {
        id: 4,
        type: 'link',
        href: 'https://www.hugocharlet.com/configurator/helena/',
        alt: '3D Configurator',
        label: '3D configurator'
      },
      {
        id: 5,
        type: 'download',
        href: '/images/articles/helena/HDimages.zip',
        alt: 'Download HD Images',
        label: 'HD images'
      }
    ]
  },
  belvedere: {
    title: 'BELVEDERE',
    subtitle: 'SEATING 2024',
    dimension: '525 x 475 x 860 cm',
    description: 'The belvedere chair is a simple chair with a highly original structure that is unusual for a chair: the back legs rise up to the level of the high back. This creates an original detail that gives the chair a recognizable identity.',
    mainImage: '/images/articles/belvedere/main.jpg',
    images: [
      { src: '/images/articles/belvedere/1.jpg', alt: 'Belvedere view 1' },
      { src: '/images/articles/belvedere/2.jpg', alt: 'Belvedere view 2' },
      { src: '/images/articles/belvedere/3.jpg', alt: 'Belvedere view 3' },
      { src: '/images/articles/belvedere/4.jpg', alt: 'Belvedere view 4' },
      { src: '/images/articles/belvedere/5.jpg', alt: 'Belvedere view 5' }
    ],
    models: [
      {
        id: 1,
        src: '/models/belvedere/belvederechair.glb',
        alt: 'Chair 3D Model',
        label: '3D Model chair'
      },
      {
        id: 2,
        src: '/models/belvedere/belvederearmchair.glb',
        alt: 'Armchair 3D Model',
        label: '3D Model armchair'
      }
    ]
  },
  tomeo: {
    title: 'TOMEO',
    subtitle: 'SEATING 2021',
    dimension: '510 x 560 x 820 cm',
    description: 'Tomeo is an outdoor metal chair made from bent metal pipes. It is a light and stackable chair initially designed for restaurant terraces as an alternative to plastic chairs. The aim was to design a chair that would be appealing both to consumers and manufacturers. Considerable effort was dedicated to keeping the chair relatively easy to manufacture. Tomeo\'s uniqueness comes from its original structure, with considerable attention dedicated to creating a simple but contemporary look. Unlike many metallic furniture pieces that draw heavily from 20th-century designs, Tomeo offers a truly different approach by questioning traditional chair structure.',
    mainImage: '/images/articles/tomeo/main.jpg',
    images: Array.from({ length: 13 }, (_, i) => ({
      src: `/images/articles/tomeo/${i + 1}.jpg`,
      alt: `Tomeo view ${i + 1}`
    })),
    models: [
      {
        id: 1,
        src: '/models/tomeo/tomeochair.glb',
        alt: 'Chair 3D Model',
        label: '3D Model chair'
      },
      {
        id: 2,
        src: '/models/tomeo/tomeoarmchair.glb',
        alt: 'Armchair 3D Model',
        label: '3D Model armchair'
      },
      {
        id: 3,
        src: '/models/tomeo/tomeolounge.glb',
        alt: 'Lounge Chair 3D Model',
        label: '3D Model loungechair'
      }
    ]
  }
}

export function useArticle(articleId) {
  const article = ref(null)
  const error = ref(null)

  const fetchArticle = () => {
    try {
      const foundArticle = articles[articleId]
      if (!foundArticle) {
        throw new Error(`Article ${articleId} not found`)
      }
      article.value = foundArticle
    } catch (e) {
      error.value = e.message
    }
  }

  // Fetch article data immediately
  fetchArticle()

  return {
    article,
    error,
    fetchArticle
  }
}