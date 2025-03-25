import spriteIconTwig from './sprite-icon.twig';
import spriteIconData from './sprite-icon.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Sprit Icons' };

// Default button story.
export const spriteIcon = {
  render: (args) => spriteIconTwig(args),
  args: { ...spriteIconData },
  argTypes: {
    iconName: {
      options: ['github', 'linkedin', 'mail', 'project', 'suitcase'],
      control: { type: 'select' },
    },
  },
};
