import { pages } from "@/modules/config/pageConfig";
import AppLayout from "@/modules/layout/AppLayout";
import WireFrame from "@/modules/mock/components/WireFrame";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MeeOrder | Menu</title>
        <meta name="description" content="MeeOrder Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout layoutType="user" nowPageId={pages.home.id}>
        <WireFrame
          contentNode="Menu"
          cardColor="red"
          height={"calc(100vh - 64px - 64px)"}
        />
      </AppLayout>
    </>
  );
}
