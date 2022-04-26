function More(props) {
  // console.log(typeof props.setToggleCom_addTrackToPlaylist);
  return (
    <div className="search__history-more">
      <ul
        style={{
          margin: '0',
          padding: '17px',
          color: '#fff',
          fontSize: '12px',
        }}
      >
        <li
          className="search__history-more_item"
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={() => props.setToggleCom_addTrackToPlaylist(true)}
        >
          Add to playlist
          <svg
            style={{ paddingLeft: '10px' }}
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5C3.73478 5 3.48043 5.10536 3.29289 5.29289C3.10536 5.48043 3 5.73478 3 6C3 6.26522 3.10536 6.51957 3.29289 6.70711C3.48043 6.89464 3.73478 7 4 7H20C20.2652 7 20.5196 6.89464 20.7071 6.70711C20.8946 6.51957 21 6.26522 21 6C21 5.73478 20.8946 5.48043 20.7071 5.29289C20.5196 5.10536 20.2652 5 20 5H4ZM3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11H20C20.2652 11 20.5196 11.1054 20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12C21 12.2652 20.8946 12.5196 20.7071 12.7071C20.5196 12.8946 20.2652 13 20 13H4C3.73478 13 3.48043 12.8946 3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12ZM3 18C3 17.7348 3.10536 17.4804 3.29289 17.2929C3.48043 17.1054 3.73478 17 4 17H20C20.2652 17 20.5196 17.1054 20.7071 17.2929C20.8946 17.4804 21 17.7348 21 18C21 18.2652 20.8946 18.5196 20.7071 18.7071C20.5196 18.8946 20.2652 19 20 19H4C3.73478 19 3.48043 18.8946 3.29289 18.7071C3.10536 18.5196 3 18.2652 3 18Z"
              fill="#fff"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
}

export default More;