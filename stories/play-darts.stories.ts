import { html, TemplateResult } from 'lit';
import '../src/play-darts.js';

export default {
  title: 'PlayDarts',
  component: 'play-darts',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <play-darts style="--play-darts-background-color: ${backgroundColor}" .title=${title}></play-darts>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
