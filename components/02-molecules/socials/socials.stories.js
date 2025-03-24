import socialsTwig from './socials.twig';
import menuTwig from '../../01-atoms/menu/menu.twig';
import socialsData from './socials.json';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Socials' };

const argTypes = {};

const socialsMenu = menuTwig(socialsData);

// Show controls.
export const socials = {
  render: (args) => socialsTwig(args),
  args: { links: socialsMenu },
  argTypes,
};
