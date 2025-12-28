import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { PortalLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { CreditCard, LogOut, User } from "lucide-react";
import React from "react";

const user = {
  name: "Minh Tran",
  image: "https://github.com/shadcn.png",
  email: "minh.tran@team-flow.com",
};

const UserNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          className="size-12 rounded-xl hover:rounded-lg transition-all duration-200 bg-background/50 border-border/50 hover:bg-accent hover:text-accent"
        >
          <Avatar>
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>
              {user.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" align="end" className="w-[200px]">
        <DropdownMenuLabel className="font-normal flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar className="relative  size-8 rounded-lg">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>
              {user.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <p className="truncate font-medium"> {user.name}</p>
            <p className="truncate text-muted-foreground text-xs">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <PortalLink className="flex items-center gap-2" target="_blank">
              <User />
              Account
            </PortalLink>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <PortalLink className="flex items-center gap-2" target="_blank">
              <CreditCard />
              Billing
            </PortalLink>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutLink className="flex items-center gap-2">
            <LogOut />
            Logout
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
