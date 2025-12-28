import { HeroHeader } from "@/app/(marketing)/_components/header";
import HeroSection from "@/app/(marketing)/_components/hero-section";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import React from "react";

const Page = () => {
  return (
    <div>
      <HeroHeader />
      <HeroSection />
    </div>
  );
};

export default Page;
