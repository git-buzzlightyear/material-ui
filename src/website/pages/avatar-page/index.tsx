import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import Avatar, { AvatarGroup } from '@ui/Avatar';
import ApiTable from '@site/components/ApiTable';
import SourceButton from '@/website/components/SourceButton';
import { rows, avatarGroupRows } from './api';
import CodeView from '@site/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as shapeHtml } from './docs/shape.md';
import { html as textHtml } from './docs/text.md';
import { html as groupHtml } from './docs/group.md';
import { html as borderedHtml } from './docs/border.md';
const IMG_URL = 'https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png';
export default function AvatarPage() {
  return (
    <>
      <div className="flex justify-between items-center">
        <Heading as="h2" className="mb-4">
          Avatar
        </Heading>
        <SourceButton name="Source" />
      </div>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="flex items-end [&>*]:mr-4 text-gray-600 text-sm">
          <div className="flex flex-col items-center justify-center">
            <Avatar size="tiny" src={IMG_URL} />
            <p>tiny</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Avatar size="small" src={IMG_URL} />
            <p>small</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Avatar size="medium" src={IMG_URL} />
            <p>medium</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Avatar size="large" src={IMG_URL} />
            <p>large</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Avatar size="large" />
            <p>fallback</p>
          </div>
        </div>
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          shape
        </Heading>
        <div className="flex items-end [&>*]:mr-4">
          <Avatar size="large" src={IMG_URL} />
          <Avatar size="large" shape="round" src={IMG_URL} />
        </div>
        <CodeView content={shapeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-4">
          bordered
        </Heading>
        <div className="flex items-end [&>*]:mr-4">
          <Avatar bordered src={IMG_URL} />
          <Avatar bordered color="#8749F5" src={IMG_URL} />
          <Avatar bordered shape="round" color="#65ca16" src={IMG_URL} />
        </div>
        <CodeView content={borderedHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          text avatar
        </Heading>
        <div className="flex items-end [&>*]:mr-4">
          <Avatar text="T" size="tiny" className="bg-purple-500 text-white" />
          <Avatar text="S" size="small" className="bg-orange-500 text-white" />
          <Avatar text="M" size="medium" className="bg-blue-500 text-white" />
          <Avatar text="L" size="large" className="bg-red-500 text-white text-[22px]" />
          <Avatar text="A" shape="round" size="large" className="bg-green-500 text-white text-[22px]" />
        </div>
        <CodeView content={textHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          avatar group
        </Heading>
        <AvatarGroup>
          <Avatar src={IMG_URL} />
          <Avatar src={IMG_URL} />
          <Avatar src={IMG_URL} />
          <Avatar text="+2" size="medium" className="bg-gray-300 text-white" />
        </AvatarGroup>
        <AvatarGroup className="mt-3" direction="vertical">
          <Avatar src={IMG_URL} />
          <Avatar src={IMG_URL} />
          <Avatar src={IMG_URL} />
          <Avatar text="+2" size="medium" className="bg-gray-300 text-white" />
        </AvatarGroup>
        <CodeView content={groupHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-2">
        API
      </Heading>
      <Heading as="h4" className="mb-2">
        Avatar
      </Heading>
      <ApiTable rows={rows} />
      <Heading as="h4" className="my-2">
        AvatarGroup
      </Heading>
      <ApiTable rows={avatarGroupRows} />
    </>
  );
}
