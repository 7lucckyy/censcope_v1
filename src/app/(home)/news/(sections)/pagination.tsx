"use client"
import { MoveLeft, MoveRight } from 'lucide-react'
import { parseAsInteger, useQueryState } from 'nuqs';


export function Pagination({ totalPages }: { totalPages: number }) {
    const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

    const handleChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage, { shallow: false });
        }
    };
    return (
        <div className="flex justify-between items-center mt-10">
            <button type="button" onClick={() => handleChange(page - 1)}
                disabled={page === 1} className="inline-flex items-center px-3 py-1 gap-2 rounded-md text-cyan-500 hover:bg-cyan-100 disabled:hover:bg-gray-100 disabled:!text-gray-500 cursor-not-allowed">
                <MoveLeft className='size-6 text-current' />
                Previous
            </button>
            <div className="flex items-center gap-3">
                {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                        <button
                            key={pageNumber}
                            onClick={() => handleChange(pageNumber)}
                            type="button"
                            data-active={page === pageNumber}
                            className="w-8 h-8 inline-flex items-center justify-center rounded-md hover:text-gray-500 hover:bg-cyan-50 data-[active='true']:bg-cyan-500 data-[active='true']:text-white"
                        >
                            {index + 1}
                        </button>
                    )
                })}
            </div>
            <button type="button" onClick={() => handleChange(page + 1)}
                disabled={page === totalPages} className="inline-flex items-center px-3 py-1 gap-2 rounded-md text-cyan-500 hover:bg-cyan-100 disabled:hover:bg-gray-100 disabled:!text-gray-500 cursor-not-allowed">
                Next
                <MoveRight className='size-6 text-current' />
            </button>
        </div>
    )
}
