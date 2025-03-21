import tagTwig from './tag.twig';
import tagData from './tag.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Tag' };

// Default button story.
export const tag = {
  render: (args) => tagTwig(args),
  args: { ...tagData },
  argTypes: {
    variants: {
      options: ['tag', 'tag tag--secondary'],
      control: { type: 'select' },
    },
  },
};
