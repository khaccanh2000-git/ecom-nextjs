import React from "react";
import Head from "next/head";
import { AppBar, ToolBar } from "@material-ui/core";

function Layout() {
  return (
    <div>
      <Head>Amazon NextJS</Head>
      <AppBar>
        <ToolBar></ToolBar>
      </AppBar>
    </div>
  );
}

export default Layout;
