import "./pages.css";

function Pages({
    totalItems,
	itemsPerPage,
	onPageChange,
	currentPage,
	setCurrentPage,
}){

    const totalPages = Math.ceil(totalItems / itemsPerPage);
	const handlePageChange = (page) => {
		setCurrentPage(page);
		onPageChange(page);
		window.scrollTo(0, 0);
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			onPageChange(currentPage - 1);
			window.scrollTo(0, 0);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
			onPageChange(currentPage + 1);
			window.scrollTo(0, 0);
		}
	};

	const renderPageNumbers = () => {
		const pageNumbers = [];

		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<li
					key={i}
					className={currentPage === i ? "active" : ""}
					onClick={() => handlePageChange(i)}
				>
					{i}
				</li>
			);
		}

		return pageNumbers;
	};

    return(
        <div className="container-pages">
			<button
				onClick={handlePrevPage}
				disabled={currentPage === 1}
				className="button-page"
			>
				Prev
			</button>
			<div>
				<ul>{renderPageNumbers()}</ul>
			</div>
			<button
				onClick={handleNextPage}
				disabled={currentPage === totalPages}
				className="button-page"
			>
				Next
			</button>
		</div>
    )
}

export default Pages;