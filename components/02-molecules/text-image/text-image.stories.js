import textImageTwig from './text-image.twig';
import textImageData from './text-image.json';
import { sectionSpace } from '../../01-atoms/atoms-arg-types';
import './text-image.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Text image' };

const argTypes = {
  sectionSpace,
};

export const textImage = {
  render: (args) => textImageTwig(args),
  args: { ...textImageData },
  argTypes,
};
