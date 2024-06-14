import useProducts from "./use-products-table";
import Table from "../components/table";
import TableHeader from "../components/table/table-head";
import TableBody from "../components/table/table-body";
import ModalContainer from "../components/modal";
import QuickPreview from "../components/quick-preview";

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
		{data.length > 0 ? (
			<TableBody data={data} />
		) : (
			<div className="w-full p-3">
				No results found
			</div>
		)}
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
			description,
			id,
			price,
			sku,
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
		rowValue.action = () => handlePreview(row);

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
		isPreviewOpen,
		searchTerm,
		selectedProduct,
		togglePreviewModal
	} = useProducts();

	const tableChildren = generateTableChildren({
		data: data && getTableRows({
			data, 
			handlePreview, 
		}),
	})

	return (
		<div className="pt-10 w-10/12 m-auto" id="productList">
			<div className="bg-sm p-2 mb-4">
				<h1 className="text-lg text-base-100 self-center text-center uppercase">Products Demo</h1>
			</div>
			{/* TODO: View changer, Table & Grid/Card */}

			<div className="pb-2 mb-4">
				{/* TODO: Clearable input */}
				<input
					placeholder="Search product ..."
					id="search"
					name="search"
					type="search"
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
								{/* TODO: Pagination */}
						</Table>
					</div>
				</div>
			)}

			{/* TODO: Modal */}
			{/* Modal */}
			<ModalContainer
				isPreviewOpen={isPreviewOpen}
				togglePreviewModal={togglePreviewModal}
			>
				<QuickPreview selectedProduct={selectedProduct} />
			</ModalContainer>
		</div>
	);
}
 
export default Products;