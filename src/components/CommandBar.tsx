"use client";
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
} from "@/components/ui/command";
import {
  Building2,
  Cookie,
  LogOut,
  PartyPopper,
  Settings,
  SquareCheckBig,
  SquareUser,
  User2,
  Users,
  Users2,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const menu = [
    {
      group: "general ",
      items: [
        {
          link: "/people", // Update link to /companies
          icon: <Users2 />,
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
          link: "/settings/general",
          icon: <Settings />,
          text: "General Settings",
        },
      ],
    },
  ];

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList style={{ overflow: "visible" }}>
          <CommandEmpty>No results found.</CommandEmpty>
          {menu.map((menu: any, key: number) => (
            <CommandGroup key={key} heading={menu.group}>
              {menu.items.map((option: any, optionKey: number) => (
                <Link
                  key={optionKey}
                  href={option.link}
                  className={"bg-gray-100"}
                >
                  <CommandItem className="font-semibold flex gap-2 cursor-pointer text-sm">
                    {option.icon}
                    {option.text}
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </Command>
  );
};
export default Sidebar;
