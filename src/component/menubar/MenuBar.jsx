import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
import { Menu, MenuIcon, UserRound, Mail, Bell, Bookmark, Ellipsis, ListTodo  } from 'lucide-react';
import Link from 'next/link';

const MenuBar = () => {
  return (
    <div>
         <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button variant="outline"><Menu/></button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
            
            <DropdownMenuShortcut><UserRound /></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Messages
            <DropdownMenuShortcut><Mail /></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Notification
            <DropdownMenuShortcut><Bell /></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Bookmark
            <DropdownMenuShortcut><Bookmark /></DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem><Link href="/contactus">Contact Us</Link></DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            list
            <DropdownMenuShortcut><ListTodo /></DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
        <Link href="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
        <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          <DropdownMenuShortcut><Ellipsis /></DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      
    </div>
  );
}

export default MenuBar;
