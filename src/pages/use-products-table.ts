import { useEffect, useState } from "react";

const useProducts = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({});
	const [skip, setSkip] = useState(0);
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedProduct, setSelectedProduct] = useState({});
	const [selectedLimit, setSelectedLimit] = useState({
		value: "10",
		label: "10"
	})
	const [errorMsg, setErrorMsg] = useState("")

	useEffect(() => {
		loadInitialDataAction();
	}, [selectedLimit, skip])

	const loadInitialDataAction = async () => {
		setIsLoading(true)
		await fetch(`https://dummyjson.com/products?limit=${selectedLimit.value}&skip=${skip}`)
			.then(res => res.json())
			.then((data) => setData(data))
			.catch(() => setErrorMsg("Failed to fetch"))
		setIsLoading(false)

	}

	const handleChange = async (e: any) => {
		const term = e.target.value;
		setSearchTerm(term);
		setIsLoading(true)
		term && await fetch(`https://dummyjson.com/products/search?q=${term}`)
			.then((response) => response.json())
			.then(data => {
				setData(data);
			})

		!term && await fetch('https://dummyjson.com/products?limit=10')
			.then(res => res.json())
			.then(data => {
				setData(data);
			})
		setIsLoading(false)
	}

	const togglePreviewModal = () => {
		setIsPreviewOpen(!isPreviewOpen)
	}

	const handlePreview = (row: any) => {
		setSelectedProduct(row)
		togglePreviewModal();
	}

	const handleNext = async () => {
		await setSkip(skip + parseFloat(selectedLimit.value))
	}

	return {
		data,
		handleChange,
		handleNext,
		handlePreview,
		isLoading,
		isPreviewOpen,
		searchTerm,
		selectedProduct,
		selectedLimit,
		setSelectedLimit,
		togglePreviewModal,
		errorMsg
	};
}

export default useProducts;