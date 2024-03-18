import Menu, { MenuControl, MenuContent, MenuItem, MenuDivider } from "./Menu";
import Avatar, { AvatarWithText, Content, Title, Subtitle } from "../Avatar/Avatar";
import Button from "../Button/Button";
import { ChevronDownIcon, UserCircleIcon, Cog6ToothIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

export default {
    args: {
        color: "default",
        radius: "round",
    },
    argTypes: {
        color: {
            defaultValue: "default",
            options: ["default"],
            control: { type: "inline-radio" },
        },
        radius: {
            defaultValue: "round",
            options: ["round", "sharp"],
            control: { type: "inline-radio" },
        },
        alignment: {
            defaultValue: "center",
            options: ["center", "left", "right"],
            control: { type: "inline-radio" },
        },
    },
};

export const MenuStory = ({ ...args }) => (
    <Menu>
        <MenuControl>
            <Button {...args} className={"flex gap-2 place-content-center"}>
                Button
                <ChevronDownIcon className='size-6' />
            </Button>
        </MenuControl>
        <MenuContent {...args} className={"w-44"}>
            <MenuItem>
                <UserCircleIcon className='size-5' />
                Profile
            </MenuItem>
            <MenuItem>
                <Cog6ToothIcon className='size-5' />
                Settings
            </MenuItem>
            <MenuDivider />
            <MenuItem disabled>
                <ArrowRightStartOnRectangleIcon className='size-5' />
                Logout
            </MenuItem>
        </MenuContent>
    </Menu>
);

MenuStory.storyName = "Menu";

export const MenuProfile = ({ name, subtitle, ...args }) => (
    <div className='flex justify-between m-2'>
        <Menu>
            <MenuControl>
                <AvatarWithText className='cursor-pointer'>
                    <Avatar {...args} radius='full' name={name} />
                    <Content typography={args.color}>
                        <Title>{name}</Title>
                        <Subtitle>{subtitle}</Subtitle>
                    </Content>
                    <ChevronDownIcon className='size-4 dark:text-white' />
                </AvatarWithText>
            </MenuControl>
            <MenuContent {...args} className='w-56'>
                <MenuItem>
                    <UserCircleIcon className='size-5' />
                    Profile
                </MenuItem>
                <MenuItem>
                    <Cog6ToothIcon className='size-5' />
                    Settings
                </MenuItem>
                <MenuDivider />
                <MenuItem disabled>
                    <ArrowRightStartOnRectangleIcon className='size-5' />
                    Logout
                </MenuItem>
            </MenuContent>
        </Menu>
    </div>
);

MenuProfile.storyName = "Profile Menu";
MenuProfile.args = {
    name: "Just Yogurt",
    subtitle: "To brie or not to brie",
};
