const LoadMoreButton = ({ onClick, disabled }) => {
    return (
      <button className="load-more-btn" onClick={onClick} disabled={disabled}>
        Load More Content
      </button>
    );
  };
  
  export default LoadMoreButton;
  