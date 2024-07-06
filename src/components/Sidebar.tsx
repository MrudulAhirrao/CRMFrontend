'use client';
import User from "@/app/(main)/people/User";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { Building2, Cookie, LogOut, PartyPopper, Settings, SquareCheckBig, SquareUser, User2, Users } from "lucide-react";
import Link from "next/link";  

const Sidebar = () =>{
    const menu = [
        {
          group: "general ",
          items: [
            {
              link: "/people",
              icon: <Users />,
              text: "People",
            },
            {
              link: "/companies", // Update link to /companies
              icon: <Building2 />,
              text: "Companies",
            },
            {
              link: "/tasks",
              icon: <SquareCheckBig />,
              text: "Tasks",
            },
          ],
        },
        {
            group: "Settings",
            items: [
              {
                link: "/settings",
                icon: <Settings />,
                text: "General Settings",
              },
              {
                link: "/privacy",
                icon: <Cookie />,
                text: "Privacy",
              },
            ],
          },
        ];
      

return (
    <div className="w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div><User /></div>
      <div className="grow">
            <Command style={{ overflow: 'visible' }}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList style={{ overflow: 'visible' }}>
                <CommandEmpty>No results found.</CommandEmpty>
                {menu.map((menu: any, key: number) => (
                  <CommandGroup key={key} heading={menu.group}>
                    {menu.items.map((option: any, optionKey: number) => (
                        <Link href={option.link} className={'bg-gray-100' }>
                          <CommandItem className="font-semibold flex gap-2 cursor-pointer">
                            {option.icon}
                            {option.text}
                          </CommandItem>
                        </Link>
                    ))}
                  </CommandGroup>
                ))}
                {/* <CommandSeparator /> */}
              </CommandList>
            </Command>
          </div>
    </div>
);

};
export default Sidebar;