const normalizeAmount = (x: number) => {

	return x.toLocaleString('en-US', { maximumFractionDigits: 2 })
}

const QuickPreview = ({
	selectedProduct
}: any) => {
	const {
		category,
		description,
		images,
		price,
		title,
	} = selectedProduct;
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col">
				<p className="uppercase text-xs pb-2">{category}</p>
				<p className="text-3xl font-bold">{title}</p>
			</div>

			<div className="pb-2">
				<p className="text-base">{description}</p>
			</div>

			<div className="pb-2">
				<p className="text-base">₱ {normalizeAmount(price)}</p>
			</div>

			<div className="grid grid-cols-4 gap-2">
				{images.filter((i, index: number) => index < 4).map((item) => (
					<div key={item.id} className="col-auto  border border-slate bg-slate">
						<img className="h-28 w-full object-cover" src={item} />
					</div>
				))}
			</div>
		</div>
	);
}

export default QuickPreview;