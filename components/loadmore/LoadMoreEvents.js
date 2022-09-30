import React from 'react';

const LoadMoreButtonEvents = ({ increaseEventsAmount, eventsAmount, events }) => {

    if (eventsAmount >= events?.length) {
        return null
    }
    return (
        <div className="loadmore spacer m-top-xl text-md-center text-center">
            <button
                title="Loadmore"
                onClick={() => increaseEventsAmount(eventsAmount + 3)}
                className="btn btn-dark transform-scale-h border-0"
            >
                Show more
            </button>
        </div>
    );
};

export default LoadMoreButtonEvents;
