import heroTwig from './hero.twig';
import heroData from './hero.json';
import './hero.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Hero' };

export const hero = {
  render: (args) => heroTwig(args),
  args: { ...heroData },
};
