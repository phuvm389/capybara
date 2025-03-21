import heroTwig from './hero.twig';
import heroData from './hero.json';
import heroLargeData from './hero--large.json';
import './hero.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Hero' };

const argTypes = {
  variants: {
    options: ['default', 'hero--large'],
    control: { type: 'select' },
  },
  section_space: {
    options: ['section-space', 'no-section-space'],
    control: { type: 'select' },
  },
};

export const hero = {
  render: (args) => heroTwig(args),
  args: { ...heroData },
  argTypes,
};

export const heroLarge = {
  render: (args) => heroTwig(args),
  args: { ...heroLargeData },
  argTypes,
};
