import linkTwig from './link.twig';
import linkData from './link.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Button' };

// Default button story.
export const link = {
  render: (args) => linkTwig(args),
  args: { ...linkData },
  argTypes: {
    class: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
};
