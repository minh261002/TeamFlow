import React from "react";
import WorkspaceList from "./_components/workspace-list";
import CreateWorkspace from "./_components/create-workspace";
import UserNav from "./_components/user-nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="flex h-full w-16 items-center flex-col bg-secondary px-2 py-3 border-r border-border">
        <WorkspaceList />
        <div className="mt-4">
          <CreateWorkspace />
        </div>

        <div className="mt-auto">
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Layout;
