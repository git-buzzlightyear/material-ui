import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'isOpen',
    desc: 'whether the popover is open default',
    type: 'boolean',
    default: 'false',
    required: false,
  },
  {
    prop: 'title',
    desc: 'popover title',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'content',
    desc: 'popover content',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'sideOffset',
    desc: 'popover offset from the trigger',
    type: 'number',
    required: false,
    default: '5',
  },
  {
    prop: 'showArrow',
    desc: 'whether to show the arrow',
    type: 'boolean',
    required: false,
    default: 'true',
  },
  {
    prop: 'align',
    desc: 'popover alignment',
    type: 'tag: start | center | end',
    required: false,
    default: 'center',
  },
  {
    prop: 'side',
    desc: 'popover side',
    type: 'tag: top | bottom | left | right',
    required: false,
    default: 'bottom',
  },
  {
    prop: 'onOpenChange',
    desc: 'callback when popover open status changed',
    type: '(open: boolean) => void',
    required: false,
    default: '-',
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'className',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'style',
    type: 'React.CSSProperties',
    required: false,
    default: '-',
  },
];
