export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;
      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = {},
  } = section;
  return {
    component,
    text,
    title,
    srcImg,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = {},
    text_grid: grid = [],
  } = section;
  return {
    component: 'section.section-grid-text',
    description,
    title,
    background,
    sectionId,
    grid: grid.map((text) => {
      const { title = '', description = '' } = text;
      return { title, description };
    }),
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = {},
    image_grid: grid = [],
  } = section;
  return {
    component: 'section.section-grid-image',
    description,
    title,
    background,
    sectionId,
    grid: grid.map((img) => {
      const {
        image: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = img;
      return { srcImg, altText };
    }),
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = {},
  } = section;
  return {
    component,
    html,
    title,
    background,
    sectionId,
  };
};

/*
[
      {
        "__component": "section.section-two-columns",
        "title": "January brings us Firefox 85",
        "description": "To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.",
        "metadata": {
          "background": true,
          "name": "Home",
          "section_id": "home",
        },
        "image": {
          "name": "javascript.svg",
          "alternativeText": "Pessoas e logos do css53, do javascript e do html 5",
          "url": "https://res.cloudinary.com/drgpo0mge/image/upload/v1647464221/javascript_de36ae92da.svg",
        },
      },
      {
        "__component": "section.section-content",
        "title": "news coverage and some surprises",
        "content": "<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>",
        "metadata": {
          "background": false,
          "name": "intro",
          "section_id": "intro",
        },
      },
      {
        "__component": "section.section-grid",
        "title": "My Grid",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        "text_grid": [
          {
            "title": "Title 1",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          },
          {
            "title": "Title 2",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n",
          },
          {
            "title": "Title 3",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          }
        ],
        "image_grid": [],
        "metadata": {
          "background": true,
          "name": "grid-one",
          "section_id": "grid-one",
        },
      },
      {
        "__component": "section.section-grid",
        "title": "Gallery",
        "description": "Debitis cum delectus molestias.",
        "text_grid": [],
        "image_grid": [
          {
            "image": {
              "name": "http://source.unsplash.com/random/360x360?r=1",
              "alternativeText": "Foto de duas cêmeras Canon com neve  embaixo delas.",
              "url": "https://res.cloudinary.com/drgpo0mge/image/upload/v1647464901/360x360_r_1_cea3a6bbc6.jpg",
            },
          },
          {
            "image": {
              "name": "http://source.unsplash.com/random/360x360?r=1",
              "alternativeText": "foto em time lapse de uma rodovia.",
              "url": "https://res.cloudinary.com/drgpo0mge/image/upload/v1647464901/360x360_r_1_2192c1fb1e.jpg",
            },
          },
          {
            "image": {
              "name": "http://source.unsplash.com/random/360x360?r=1",
              "alternativeText": "Foto de cantora com luzes atrás dela.",
              "url": "https://res.cloudinary.com/drgpo0mge/image/upload/v1647464901/360x360_r_1_98f2ce9ea3.jpg",

            },
          },
          {
            "image": {
              "name": "http://source.unsplash.com/random/360x360?r=1",
              "alternativeText": "foto de uma parede de tijolinhos.",
              "url": "https://res.cloudinary.com/drgpo0mge/image/upload/v1647464901/360x360_r_1_60926e47a1.jpg",
            },
          },

        ],
        "metadata": {
          "background": false,
          "name": "gallery",
          "section_id": "gallery",
        },
      },
      {
        "__component": "section.section-grid",
        "title": "Other Grid",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias.",
        "text_grid": [
          {
            "title": "Title One",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          },
          {
            "title": "Title Two",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          },
          {
            "title": "Title Three",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          }
        ],
        "image_grid": [],
        "metadata": {
          "background": true,
          "name": "grid-two",
          "section_id": "grid-two",
        },
      },
      {
        "__component": "section.section-content",
        "title": "Pricing",
        "content": "<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><figure class=\"table\"><table><thead><tr><th>Title 1</th><th>Title 2</th><th>Title 3</th><th>Title 4</th><th>Title 5</th></tr></thead><tbody><tr><td>Content 1</td><td>Content 2</td><td>Content 3</td><td>Content 3</td><td>Content 3</td></tr><tr><td>Content 1</td><td>Content 2</td><td>Content 3</td><td>Content 3</td><td>Content 3</td></tr><tr><td>Content 1</td><td>Content 2</td><td>Content 3</td><td>Content 3</td><td>Content 3</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Testando</td></tr></tbody></table></figure>",
        "metadata": {
          "background": false,
          "name": "pricing",
          "section_id": "pricing",
        },
      },
      {
        "__component": "section.section-two-columns",
        "title": "January brings us Firefox 85",
        "description": "To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.",
        "metadata": {
          "background": true,
          "name": "contact",
          "section_id": "contact",
        },
        "image": {
          "name": "javascript.svg",
          "alternativeText": "Pessoas e logos do css53, do javascript e do html 5",
          "url": "https://res.cloudinary.com/drgpo0mge/image/upload/v1647464221/javascript_de36ae92da.svg",
        },
      }
    ]

*/
