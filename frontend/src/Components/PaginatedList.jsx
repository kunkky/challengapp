import React, { useState } from 'react';

function PaginatedList({ itemsPerPage, items }) {
    const [currentPage, setCurrentPage] = useState(0);

    const pageCount = Math.ceil(items.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    const goToPage = (pageIndex) => {
        if (pageIndex >= 0 && pageIndex < pageCount) {
            setCurrentPage(pageIndex);
        }
    };

    return (
        <div>
            <ul>
                {currentItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="pagination">
                {Array.from({ length: pageCount }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index)}
                        className={index === currentPage ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PaginatedList;
