import heroTwig from './hero.twig';
import heroData from './hero.json';
import heroHeaderData from './hero--header.json';
import { sectionSpace } from '../../01-atoms/atoms-arg-types';
import './hero.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Hero' };

const argTypes = {
  variants: {
    options: ['default', 'hero--custom'],
    control: { type: 'select' },
  },
  sectionSpace,
};

export const heroDoc = {
  render: (args) => heroTwig(args),
  args: { ...heroData },
  argTypes,
};

export const heroDefault = () => heroTwig({ ...heroData });

export const heroHeader = () => heroTwig({ ...heroHeaderData });
