const TableBody = ({ data }: any) => {
	return (
		<tbody>
				{data && data.map((row: any) => (
					<tr className="" key={row.id} onClick={row.action}>
						{row.map((item: any) => {
							let textElement;
							let truncateWidth;
							let action;

							if (typeof item === "string") {
								textElement = item;
							} else {
								({
									textElement,
									truncateWidth,
									action,
								} = Object.assign({}, {
									textElement: '',
									withTruncate: false,
									truncateWidth,
									action
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