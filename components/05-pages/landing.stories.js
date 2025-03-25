import landingTwig from './landing.twig';
import heroTwig from '../02-molecules/hero/hero.twig';
import componentsTwig from './components.twig';
import { header } from '../02-molecules/header/header.stories';
import { footer } from '../02-molecules/footer/footer.stories';
import { heroDefault, heroHeader } from '../02-molecules/hero/hero.stories';
import { textImage } from '../02-molecules/text-image/text-image.stories';
import { threeGroup } from '../02-molecules/three-group/three-group.stories';
import { cardGrid } from '../02-molecules/card-grid/card-grid.stories';

/**
 * Storybook Definition.
 */
export default { title: 'Pages/Landing' };

const main = [
  { content: heroHeader },
  { content: textImage },
  {
    content: heroTwig({
      sectionSpace: 'section-space--top',
      variants: 'hero--cta',
      title: 'Projects',
      body: '<div>I like to build some small projects when learning. Technologies are varied and so are their purposes. Most of them are open source!</div>',
      links: '',
    }),
  },
  { content: threeGroup },
  { content: heroDefault },
  { content: cardGrid },
];

const pageData = {
  header,
  main: componentsTwig({ items: [...main] }),
  footer,
};

export const landing = {
  render: (args) => landingTwig(args),
  args: { ...pageData },
};
