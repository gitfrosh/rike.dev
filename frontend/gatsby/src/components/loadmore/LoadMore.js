import React from 'react';

const LoadMoreButton = ({ increasePostAmount, postAmount, totalPostAmount }) => {
    if (totalPostAmount === postAmount || postAmount > totalPostAmount) {
        return <></>
    }

    return (
        <div className="loadmore spacer m-top-lg text-md-center text-center">
            <button
                title="Loadmore"
                onClick={() => increasePostAmount(postAmount + 3)}
                className="btn btn-dark transform-scale-h border-0"
            >
                Load more
            </button>
        </div>
    );
};

export default LoadMoreButton;
