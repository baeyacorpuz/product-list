const TableBody = ({ data }: any) => {
	return (
		<tbody>
				{data && data.map((row: any) => (
					<tr className="" key={row.id}>
						{row.map((item: any) => {
							let textElement;
							let truncateWidth;

							if (typeof item === "string") {
								textElement = item;
							} else {
								({
									textElement,
									truncateWidth,
								} = Object.assign({}, {
									textElement: '',
									withTruncate: false,
									truncateWidth,
								}, item))
							}

							return (
								<td className={`${truncateWidth} border-b border-neutral p-3 cursor-pointer max-w-7 overflow-hidden text-ellipsis whitespace-pre-line text-left`}>
									{textElement}
								</td>
							)
						})}
					</tr>
				))}
		</tbody>
	);
}
 
export default TableBody;