import footerTwig from './footer.twig';
import menuTwig from '../../01-atoms/menu/menu.twig';
import socialsTwig from '../socials/socials.twig';
import socialsData from '../socials/socials.json';

import '../socials/socials.scss';
import './footer.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Footer' };

const argTypes = {};
const socialsMenu = menuTwig(socialsData);
const socials = socialsTwig({ links: socialsMenu });

const footerData = {
  wave: '<img src="../assets/images/footer-wave.svg" alt="Image" width="200" height="120">',
  copyright: '<p><strong>© 2025 Tam Nguyen</strong></p>',
  socials,
};

// Show controls.
export const footer = {
  render: (args) => footerTwig(args),
  args: { ...footerData },
  argTypes,
};
