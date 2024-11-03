const FeaturedProducts = () => {
  return (
    <div className="lg:py-16 py-10 lg:px-16 px-10">
      <h3 className="text-appGreen text-lg my-2">Shop By Category</h3>
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-medium my-3">
          Popular on the Shofi store.
        </h1>
        <div className="flex items-center gap-3 text-lg">
          <h3>All Produts</h3>
          <h3>All food</h3>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
