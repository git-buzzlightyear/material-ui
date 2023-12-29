import Checkbox, { CheckboxGroup, type CheckboxType } from '@ui/Checkbox';
import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import ApiTable from '@site/components/ApiTable';
import { checkboxRows, checkboxGroupRows } from './api';
import CodeView from '@site/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as disabledHtml } from './docs/disabled.md';
import { html as groupHtml } from './docs/group.md';
import SourceButton from '@/website/components/SourceButton';
export default function CheckboxPage() {
  const checkboxGroup: CheckboxType[] = [
    {
      value: 'apple',
      children: (
        <div>
          <p>apple</p>
          <p>🍎</p>
        </div>
      ),
    },
    {
      value: 'banana',
      children: (
        <div>
          <p>banana</p>
          <p>🍌</p>
        </div>
      ),
    },
    {
      value: 'orange',
      children: (
        <div>
          <p>orange</p>
          <p>🍊</p>
        </div>
      ),
      disabled: true,
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center">
        <Heading as="h2" className="mb-4">
          Checkbox
        </Heading>
        <SourceButton name="Checkbox" />
      </div>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Checkbox checked value="apple" onCheckedChange={(checked, value) => console.log(checked, value)}>
          apple
        </Checkbox>
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled
        </Heading>
        <div className="flex items-center [&>*]:mr-2">
          <Checkbox disabled>disabled</Checkbox>
          <Checkbox checked disabled>
            disabled
          </Checkbox>
        </div>
        <CodeView content={disabledHtml} />
      </ShowBox>
      <ShowBox>
        <Heading as="h4" className="mb-2">
          checkbox group
        </Heading>
        <CheckboxGroup
          value="orange"
          className="flex [&>label]:mr-2 [&>label_button]:self-baseline [&_button]:mt-[6px]"
          options={checkboxGroup}
          onCheckedChange={(list) => console.log('what you choose:', list)}
        />
        <CodeView content={groupHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-2">
        API
      </Heading>
      <Heading as="h4" className="mb-2">
        Checkbox
      </Heading>
      <ApiTable rows={checkboxRows} />
      <Heading as="h4" className="my-2">
        CheckboxGroup
      </Heading>
      <ApiTable rows={checkboxGroupRows} />
    </>
  );
}
