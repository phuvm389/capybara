import linkTwig from './link.twig';
import linkData from './link.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Button' };

export const link = () => linkTwig(linkData);
