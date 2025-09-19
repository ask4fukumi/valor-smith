const StoreIdPage = async ({ params }: PageProps<"/store/[storeId]">) =>
  (await params).storeId

export default StoreIdPage
