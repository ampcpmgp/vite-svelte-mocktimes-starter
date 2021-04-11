import Header from './Header.svelte'

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}

const Template = ({ onClick, ...args }) => ({
  Component: Header,
  props: args,
  on: {
    click: onClick,
  },
})

export const Text = Template.bind({})
Text.args = {
  text: 'Text',
}

export const Emoji = Template.bind({})
Emoji.args = {
  text: '😀 😎 👍 💯',
}
