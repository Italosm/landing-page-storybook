import {
  mapSectionTwoColumns,
  mapSections,
  mapSectionContent,
  mapTextGrid,
  mapImageGrid,
} from './map-sections';

import pagesFakeData from './data.json';

describe('map-sections', () => {
  it('should render predefined section without data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render predefined section with data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImage = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);
    const withNoComponent = mapSections([{}]);
    expect(withNoTextOrImage).toEqual([
      { __component: 'section.section-grid' },
    ]);
    expect(withNoComponent).toEqual([{}]);
  });

  it('should test section-grid with no text or image', () => {
    const withNoTextOrImage = mapSections([
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
    ]);
    expect(withNoTextOrImage.length).toBe(2);
  });

  it('should map section two columns without data', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.sectionId).toBe('');
  });

  it('should map section two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'January brings us Firefox 85',
      description: 'Description test',
      metadata: {
        background: true,
        name: 'Home',
        section_id: 'home',
      },
      image: {
        name: 'javascript.svg',
        alternativeText: 'Pessoas e logos do css53, do javascript e do html 5',
        url: 'a.svg',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.srcImg).toBe('a.svg');
    expect(data.title).toBe('January brings us Firefox 85');
    expect(data.text).toBe('Description test');
    expect(data.sectionId).toBe('home');
  });

  it('should map section content without data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
    expect(data.sectionId).toBe('');
  });

  it('should map section content with data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'news coverage and some surprises',
      content: '<p>Hello World.</p>',
      metadata: {
        background: false,
        section_id: 'intro',
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.title).toBe('news coverage and some surprises');
    expect(data.html).toBe('<p>Hello World.</p>');
    expect(data.sectionId).toBe('intro');
  });
  it('should map section grid_text without data', () => {
    const data = mapTextGrid();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map section grid_text with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      title: 'My Grid',
      description: 'Lorem ipsum dolor sit.',
      text_grid: [
        {
          title: 'Title 1',
          description: 'Lorem ipsum dolor sit.',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('Lorem ipsum dolor sit.');
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Title 1');
    expect(data.grid[0].description).toBe('Lorem ipsum dolor sit.');
    expect(data.grid).toEqual([
      {
        title: 'Title 1',
        description: 'Lorem ipsum dolor sit.',
      },
    ]);
  });

  it('should map section grid_image without data', () => {
    const data = mapImageGrid();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map section grid_image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      title: 'Gallery',
      description: 'Debitis cum delectus molestias.',
      image_grid: [
        {
          image: {
            url: 'a.jpg',
            alternativeText:
              'Foto de duas cêmeras Canon com neve  embaixo delas.',
          },
        },
      ],
      metadata: {
        background: false,
        section_id: 'gallery',
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('Debitis cum delectus molestias.');
    expect(data.sectionId).toBe('gallery');
    expect(data.grid[0].srcImg).toBe('a.jpg');
    expect(data.grid[0].altText).toBe(
      'Foto de duas cêmeras Canon com neve  embaixo delas.',
    );
  });
});
