function CreatePlayListBlock(props) {
  return (
    <div
      className="playListBlock"
      style={{ display: 'flex', alignItems: 'center', color: '#fff' }}
    >
      <div
        className="playListBlock__inner"
        onClick={() => props.enterPlaylist(props.namePlaylist)}
      >
        <div
          className="playListBlock__img"
          style={{ width: '85px', height: '85px', background: '#fff' }}
        ></div>
        <img src="" alt="imgPlayList" />
      
      <div className="playListBlock__info" style={{ marginLeft: '15px' }}>
        <div className="playListBlock__info-name">{props.namePlaylist}</div>
        <div className="playListBlock__info-length">{localStorage.getItem(props.namePlaylist) ? JSON.parse(localStorage.getItem(props.namePlaylist)).length : 0} tracks</div>
      </div>
      <div
        className="playListBlock__delete"
        id={props.id}
        onClick={props.deletePlayList}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id={props.id}
        >
          <path
            id={props.id}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8H18V18C18 18.7956 17.6839 19.5587 17.1213 20.1213C16.5587 20.6839 15.7956 21 15 21H9C8.20435 21 7.44129 20.6839 6.87868 20.1213C6.31607 19.5587 6 18.7956 6 18V8H5C4.73478 8 4.48043 7.89464 4.29289 7.70711C4.10536 7.51957 4 7.26522 4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H9V5ZM10 8H8V18C8 18.2652 8.10536 18.5196 8.29289 18.7071C8.48043 18.8946 8.73478 19 9 19H15C15.2652 19 15.5196 18.8946 15.7071 18.7071C15.8946 18.5196 16 18.2652 16 18V8H10ZM13 6H11V5H13V6ZM10 9C10.2652 9 10.5196 9.10536 10.7071 9.29289C10.8946 9.48043 11 9.73478 11 10V17C11 17.2652 10.8946 17.5196 10.7071 17.7071C10.5196 17.8946 10.2652 18 10 18C9.73478 18 9.48043 17.8946 9.29289 17.7071C9.10536 17.5196 9 17.2652 9 17V10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9ZM14 9C14.2652 9 14.5196 9.10536 14.7071 9.29289C14.8946 9.48043 15 9.73478 15 10V17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18C13.7348 18 13.4804 17.8946 13.2929 17.7071C13.1054 17.5196 13 17.2652 13 17V10C13 9.73478 13.1054 9.48043 13.2929 9.29289C13.4804 9.10536 13.7348 9 14 9Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
    </div>
  );
}

export default CreatePlayListBlock;
