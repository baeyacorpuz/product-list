
const usePagination = () => {

	const createOption = (label: string) => ({
		label,
		value: label.toLowerCase().replace(/\W/g, ''),
	});

	const defaultOptions = [
		createOption('10'),
		createOption('20'),
		createOption('50'),
	];

	return {
		options: defaultOptions,
	};
}

export default usePagination;