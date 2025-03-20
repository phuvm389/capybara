import imageTwig from './image.twig';
import imageData from './image.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Image' };

// Default button story.
export const image = {
  render: (args) => imageTwig(args),
  args: { ...imageData },
};
