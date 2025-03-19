import pictureTwig from './picture.twig';
import pictureData from './picture.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Picture' };

export const picture = () => pictureTwig(pictureData);
