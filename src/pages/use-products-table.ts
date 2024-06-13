import { useEffect, useState } from "react";

const useProducts = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({});
	const [skip, setSkip] = useState(0);
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const loadInitialData = async () => {
			setIsLoading(true)
			const response = await fetch('https://dummyjson.com/products?limit=10')
				.then(res => res.json())
			setIsLoading(false)

			setData(response)
		}

		loadInitialData();
	}, [])

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

	const handlePreview = (id) => {
		togglePreviewModal();
	}

	return {
		data,
		handleChange,
		handlePreview,
		isLoading,
		isPreviewOpen,
		searchTerm,
	};
}

export default useProducts;