import headerTwig from './header.twig';
import menuTwig from '../../01-atoms/menu/menu.twig';
import mainMenuData from './main-menu.json';
import socialsTwig from '../socials/socials.twig';
import socialsData from '../socials/socials.json';

import '../socials/socials.scss';
import './header.scss';

import './header';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Header' };

const mainMenu = menuTwig(mainMenuData);
const socialsMenu = menuTwig(socialsData);
const socials = socialsTwig({ links: socialsMenu });

const headerData = {
  logo: '<img src="../assets/images/logo.png" alt="Logo">',
  mainMenu,
  socials,
};

export const header = () => headerTwig({ ...headerData });
