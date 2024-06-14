import Select from "react-select"
import usePagination from "./use-pagination";

const Pagination = ({
	handleNext,
	setSelectedLimit,
	selectedLimit
}: any) => {
	const {
		options,
	} = usePagination();

	return (
		<div className="flex items-center justify-between pt-5">
			{/* Dropdown - Set Limit (number of items to show) */}
			<Select
				onChange={(option: any) => {
					setSelectedLimit(option)
				}}
				defaultValue={selectedLimit}
				name="limit"
				value={selectedLimit}
				options={options}
			/>

			{/* Previous and Next button */}
			<div className="flex gap-2">
				<button>Previous</button>
				<button onClick={handleNext}>Next</button>
			</div>
		</div>
	);
}

export default Pagination;