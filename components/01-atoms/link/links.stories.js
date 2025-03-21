import linkTwig from './link.twig';
import linkData from './link.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Link' };

// Default button story.
export const link = {
  render: (args) => linkTwig(args),
  args: { ...linkData },
  argTypes: {
    variants: {
      options: ['default', 'btn btn--primary', 'btn btn--secondary'],
      control: { type: 'select' },
    },
  },
};
