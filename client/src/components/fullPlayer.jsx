function FullPlayer(props) {
  return (
    <div className="fullPlayer">
      <div className="fullPlayer__header">
        <div className="fullPlayer__header-trackName">Track name</div>
        <button
          className="fullPlayer__header-prev"
          onClick={props.togglePlayer}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="14" r="14" fill="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.21983 10.4792C8.36048 10.3386 8.55121 10.2596 8.75008 10.2596C8.94896 10.2596 9.13969 10.3386 9.28033 10.4792L14.0001 15.1992L18.7198 10.4792C18.789 10.4076 18.8718 10.3505 18.9633 10.3112C19.0548 10.2718 19.1532 10.2512 19.2528 10.2503C19.3524 10.2494 19.4511 10.2684 19.5433 10.3061C19.6355 10.3438 19.7192 10.3995 19.7896 10.4699C19.86 10.5404 19.9157 10.6241 19.9535 10.7163C19.9912 10.8085 20.0101 10.9072 20.0093 11.0068C20.0084 11.1064 19.9877 11.2048 19.9484 11.2963C19.9091 11.3878 19.852 11.4706 19.7803 11.5398L14.5303 16.7901C14.3897 16.9307 14.199 17.0097 14.0001 17.0097C13.8012 17.0097 13.6105 16.9307 13.4698 16.7901L8.21983 11.5398C8.07923 11.3991 8.00024 11.2084 8.00024 11.0095C8.00024 10.8106 8.07923 10.6199 8.21983 10.4792Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className="fullPlayer__main">
        <div className="fullPlayer__main-img">Track picture</div>
        <div className="fullPlayer__main-logic">
          <div className="fullPlayer__main-trackLine"></div>
          <div className="fullPlayer__main-buttons">
            <button className="fullPlayer__main-prevTrack">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.32576 12.8436C8.70826 12.4507 8.70825 11.5493 9.32575 11.1563L17.4631 5.978C18.1288 5.55436 19 6.03257 19 6.82166V17.1783C19 17.9674 18.1288 18.4456 17.4631 18.022L9.32576 12.8436Z"
                  fill="white"
                />
                <rect
                  width="2"
                  height="14"
                  rx="1"
                  transform="matrix(-1 0 0 1 7 5)"
                  fill="white"
                />
              </svg>
            </button>
            <button className="fullPlayer__main-like">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.5 7C7.11 7 6 8.113 6 9.467C6 10.991 6.882 12.617 8.246 14.21C9.392 15.547 10.784 16.753 12 17.726C13.216 16.753 14.608 15.546 15.754 14.21C17.118 12.617 18 10.99 18 9.467C18 8.113 16.89 7 15.5 7C14.11 7 13 8.113 13 9.467C13 9.73222 12.8946 9.98658 12.7071 10.1741C12.5196 10.3616 12.2652 10.467 12 10.467C11.7348 10.467 11.4804 10.3616 11.2929 10.1741C11.1054 9.98658 11 9.73222 11 9.467C11 8.113 9.89 7 8.5 7ZM12 6.659C11.5766 6.13976 11.0427 5.72143 10.4373 5.43445C9.83181 5.14747 9.17001 4.99905 8.5 5C6.024 5 4 6.99 4 9.467C4 11.718 5.267 13.807 6.727 15.511C8.208 17.24 10.024 18.729 11.386 19.789C11.5615 19.9256 11.7776 19.9997 12 19.9997C12.2224 19.9997 12.4385 19.9256 12.614 19.789C13.976 18.729 15.792 17.239 17.273 15.511C18.733 13.807 20 11.718 20 9.467C20 6.99 17.976 5 15.5 5C14.09 5 12.826 5.646 12 6.659Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="fullPlayer__main-play">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="25" r="25" fill="white" />
                <path
                  d="M32.6432 25.848C33.2699 25.4564 33.2699 24.5437 32.6432 24.152L19.53 15.9563C18.8639 15.54 18 16.0188 18 16.8043V33.1958C18 33.9812 18.864 34.4601 19.53 34.0438L32.6432 25.848Z"
                  fill="black"
                />
              </svg>
            </button>
            <button className="fullPlayer__main-mute">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 3.94317C17 3.1298 16.0806 2.65667 15.4188 3.12944L10 6.99998H7C5.89543 6.99998 5 7.89541 5 8.99998V15C5 16.1045 5.89543 17 7 17H7.22832L17 9.39978V3.94317ZM17 11.9335L10.2533 17.1809L15.4188 20.8705C16.0806 21.3433 17 20.8702 17 20.0568V11.9335Z"
                  fill="white"
                />
                <path
                  d="M21 5L3 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="fullPlayer__main-nextTrack">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6742 12.8436C15.2917 12.4507 15.2917 11.5493 14.6742 11.1563L6.53688 5.978C5.87115 5.55436 5 6.03257 5 6.82166V17.1783C5 17.9674 5.87115 18.4456 6.53688 18.022L14.6742 12.8436Z"
                  fill="white"
                />
                <rect x="17" y="5" width="2" height="14" rx="1" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullPlayer;
