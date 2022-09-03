
const SearchIcon = ({
  className = "",
  width = "30",
  height = "30",
  color = "#000",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 25 25'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill={color}
        d='M24.6849 23.2094L17.512 16.0314C18.9261 14.3355 19.7766 12.1683 19.7766 9.80122C19.7766 4.40107 15.3448 0.0102539 9.89343 0.0102539C4.44205 0.0102539 0 4.4062 0 9.80634C0 15.2065 4.43181 19.5973 9.88318 19.5973C12.199 19.5973 14.3304 18.8032 16.0211 17.4762L23.2196 24.6747C23.6397 25.0948 24.2648 25.0948 24.6849 24.6747C25.105 24.2545 25.105 23.6295 24.6849 23.2094ZM2.10062 9.80634C2.10062 5.5641 5.59483 2.116 9.88318 2.116C14.1715 2.116 17.6657 5.5641 17.6657 9.80634C17.6657 14.0486 14.1715 17.4967 9.88318 17.4967C5.59483 17.4967 2.10062 14.0435 2.10062 9.80634Z'
      />
    </svg>
  );
};

export default SearchIcon;