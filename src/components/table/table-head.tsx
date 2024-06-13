const TableHeader = ({
	headers
}: any) => {
	return (
		<thead className="">
			<tr className="cursor-pointer">
				{headers.map((header: any) => (
					<th className="py-6 px-3 border-b border-neutral border-t text-left last:text-center" key={header.order || header.text}>
						<div className="">
							{header.text || header.textElement}
						</div>
					</th>
				))}
			</tr>
		</thead>
	);
}
 
export default TableHeader;