function MiniPlayer(props) {
  return (
    <div className="miniPlayer" onClick={props.togglePlayer}>
      <button className="miniPlayer__pause">
        <svg
          width="27"
          height="28"
          viewBox="0 0 27 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7837 22H7.96644C7.76773 22 7.60876 21.82 7.60876 21.6V6.4C7.60876 6.18 7.76773 6 7.96644 6H10.7837C10.9824 6 11.1414 6.18 11.1414 6.4V21.6C11.1414 21.82 10.9824 22 10.7837 22V22ZM18.5554 22H15.7382C15.5395 22 15.3805 21.82 15.3805 21.6V6.4C15.3805 6.18 15.5395 6 15.7382 6H18.5554C18.7541 6 18.9131 6.18 18.9131 6.4V21.6C18.9131 21.82 18.7541 22 18.5554 22Z"
            fill="white"
          />
        </svg>
      </button>
      <div className="miniPlayer__info">
        <div className="miniPlayer__info-nameTrack">Track name</div>
        <div className="miniPlayer__info-nameGroup">Group name</div>
      </div>
      <button className="miniPlayer__like">
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
    </div>
  );
}

export default MiniPlayer;
