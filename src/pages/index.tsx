import useProducts from "./use-products-table";
import Table from "../components/table";
import TableHeader from "../components/table/table-head";
import TableBody from "../components/table/table-body";

const headers = [
	{
		sequence: 0,
		table_view_code: "T",
		table_view_header: {
			code: "THUMBNAIL",
			name: "Thumbnail"
		},
		visible: true,
	},
	{
		sequence: 1,
		table_view_code: "N",
		table_view_header: {
			code: "NAME",
			name: "Name"
		},
		visible: true,
	},
	{
		sequence: 2,
		table_view_code: "P",
		table_view_header: {
			code: "PRICE",
			name: "Price"
		},
		visible: true,
	}
]

const getTableheaders = (tablePreference: any) => tablePreference
	.filter((el: any) => el.visible === true)
	.map((item: any) => ({
		text: item.table_view_header.name
	}));


const generateTableChildren = ({
	data
}: any) => (
	<>
		<TableHeader {...{
			headers: getTableheaders(headers)
		}} />
		<TableBody data={data} />
	</>
);

const normalizeAmount = (x: number) => {
	return x.toLocaleString('en-US', { maximumFractionDigits: 2})
}

const getTableRows = ({
	data,
	handlePreview,
}: any) => {
	const rowValues: any = [];

	data?.products && data?.products.forEach((row: any) => {
		const {
			sku,
			description,
			price,
			title,
			thumbnail,
		} = row;

		const thumbnailElement = (
			<div className="h-auto">
				<img className="object-fit" src={thumbnail} />
			</div>
		)

		const detailsElement = (
			<div className="line-clamp-2">
				<p>{title || "-"}</p>
				<p>{description || "-"}</p>
			</div>
		)

		const priceElement = (
			<div className="text-center">
				₱ {normalizeAmount(price)}
			</div>
		)

		const rowValue: any = [];


		rowValue.push({
			textElement: thumbnailElement,
			truncateWidth: "w-1/12"
		})

		rowValue.push({
			textElement: detailsElement,
			truncateWidth: "w-9/12"
		})

		rowValue.push({
			textElement: priceElement,
			truncateWidth: "w-2/12"
		})

		rowValue.id = sku;

		rowValues.push(rowValue)
	})

	return rowValues;
}

const Products = () => {
	const {
		data,
		handleChange,
		handlePreview,
		isLoading,
		searchTerm
	} = useProducts();

	const tableChildren = generateTableChildren({
		data: data && getTableRows({
			data, 
			handlePreview, 
		}),
	})

	return (
		<div className="pt-10 w-10/12 m-auto">
			<div className="bg-sm p-2 mb-4">
				<h1 className="text-lg text-base-100 self-center text-center uppercase">Products Demo</h1>
			</div>

			<div className="pb-2 mb-4">
				<input
					placeholder="Search product ..."
					id="search"
					name="search"
					type="text"
					value={searchTerm}
					onChange={handleChange}
					className="w-full max-h-[56px] flex p-3 border-neutral border focus:outline-none focus:border-sm"
				/>
			</div>

			{isLoading ? (
				<div className="pb-2 mb-4">
					Searching ...
				</div>
			) : (
				<div className="pb-2 mb-4">
					<div className="pb-2 mb-4">
						<Table>
							{tableChildren}
						</Table>
					</div>
				</div>
			)}

			{/* Modal */}
		</div>
	);
}
 
export default Products;