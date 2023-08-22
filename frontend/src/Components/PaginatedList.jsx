import React, { useState } from 'react';
import DeleteConfirmationModal from './DeleteConfirmationModal'; // Path to your modal component
import Token from '../Token'
import BaseUrl from '../BaseUrl';
import { useNavigate } from 'react-router-dom';

function PaginatedList({ itemsPerPage, items }) {

    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = (id) => {
        // Handle the deletion logic here
        const chalengeData = {
            _id: id
        }
        deleteApi(chalengeData)

        setIsModalOpen(false);
      console.log(deleteResponse);
    };  

    //delete function
    const [deleteResponse, setDeleteResponse] = useState()
    const deleteApi = async (chalengeData) => {
    console.log(chalengeData);
        try {
            const response = await fetch(BaseUrl + "deleteQuestionsById", {
                method: 'DELETE',
                body: JSON.stringify(chalengeData),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': Token

                },
            });
            const data = await response.json();
            setDeleteResponse(data);
        } catch (error) {
            setDeleteResponse(error);
        }
    };



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

    const deleteItem = (id)=>{
       const data= {
            "_id": id
        }

    }

    return (
        <div>
            <div>
                {currentItems.map((item, index) => (
                    <div className='border-b-2'>
                    <div dangerouslySetInnerHTML={{ __html: item.question }} />
                        <button onClick={() => setIsModalOpen(true, item._id)} className='bg-red-500 p-1 text-white rounded hover:bg-red-800 text-sm'>Delete Question</button>
                        <DeleteConfirmationModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            onDelete={() => handleDelete(item._id)}
                            id={item._id}
                        />

                    </div>
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: pageCount }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index)}
                        className={index === currentPage ? 'active' : ''}
                    >
                        {` Page ${index + 1} `}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PaginatedList;
