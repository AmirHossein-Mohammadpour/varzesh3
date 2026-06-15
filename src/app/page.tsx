import Box from "@/_ui/rootPage/box";

const RootPage = () => {
  return (
    <main className={`@container/rootPage`}>
      <div className={`p-2 flex flex-col @lg/rootPage:grid @lg/rootPage:grid-cols-2 @5xl/rootPage:grid-cols-3 @7xl/rootPage:grid-cols-4 gap-3`}>
        <Box title="جام جهانی ۲۰۲۶ آمریکا" className={``}>سلام چطوری؟</Box>
      </div>
    </main>
  );
};

export default RootPage;
