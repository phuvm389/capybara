import pictureTwig from './picture.twig';
import pictureData from './picture.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Picture' };

// export const picture = () => pictureTwig(pictureData);

// Default button story.
export const picture = {
  render: (args) => pictureTwig(args),
  args: { ...pictureData },
};
