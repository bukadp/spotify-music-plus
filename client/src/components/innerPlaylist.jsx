function InnerPlaylist(props) {

  console.log(props)
  return (
    <div className="innerPlaylist">
      <div className="innerPlaylist__inner">
        <div className="innerPlaylist-top">
          <div className="innerPlaylist-top__title">{props.namePlaylist}</div>
          <div
            className="innerPlaylist-top__close"
            onClick={props.closePlaylist}
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
          </div>
        </div>
      </div>   
    </div>
  );
}

export default InnerPlaylist;
