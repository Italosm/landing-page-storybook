import { SectionBackground } from '.';
export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
          maiores sit corporis, assumenda dolores necessitatibus doloribus
          voluptatibus atque, omnis nulla quis. Quis voluptas officia libero
          dolorum in labore exercitationem neque?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
