function ProductCard({ item }) {
  console.log(item);
  return (
    <div class="mx-auto flex max-w-md flex-col justify-between overflow-hidden rounded-xl bg-white p-6 shadow-md">
      <div>
        <img
          class="h-48 w-full object-scale-down "
          src={item.image}
          alt="Product image"
        />
      </div>
      <div class="mt-16 flex flex-col justify-between gap-2 px-8">
        <div class="text-sm font-semibold uppercase tracking-wide text-indigo-500">
          {item.category}
        </div>
        <a
          href="#"
          class="block text-lg font-medium leading-tight text-black hover:underline"
        >
          {item.title}
        </a>
        <p class="mt-2 text-xl text-slate-900">£{item.price}</p>
      </div>
    </div>
  );
}
export default ProductCard;
