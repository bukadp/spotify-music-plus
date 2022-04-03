function Navigation(props) {
  return (
    <div className="nav">
      <button className="nav__item active" id="home" onClick={props.changeTab}>
        <svg
          width="46"
          height="48"
          viewBox="0 0 46 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="home"
        >
          <path
            d="M24.6087 12L11.5652 24.5516H14.6957V36H21.4783V26.6331H27.7391V36H34.5217V24.5516H37.6522L24.6087 12Z"
            fill="#7F7F7F"
          />
        </svg>
      </button>
      <button className="nav__item" id="search" onClick={props.changeTab}>
        <svg
          width="46"
          height="48"
          viewBox="0 0 46 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="search"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.2504 21.7021C28.2504 26.0701 24.943 29.4043 21.1107 29.4043C17.2784 29.4043 13.971 26.0701 13.971 21.7021C13.971 17.3342 17.2784 14 21.1107 14C24.943 14 28.2504 17.3342 28.2504 21.7021ZM28.5216 27.3815C29.6093 25.785 30.2504 23.823 30.2504 21.7021C30.2504 16.3438 26.1584 12 21.1107 12C16.063 12 11.971 16.3438 11.971 21.7021C11.971 27.0605 16.063 31.4043 21.1107 31.4043C23.1086 31.4043 24.9569 30.7237 26.4609 29.5691L32.0448 35.4966C32.6128 36.0996 33.5621 36.128 34.1651 35.5599C34.7681 34.9919 34.7965 34.0425 34.2284 33.4395L28.5216 27.3815Z"
            fill="#7F7F7F"
          />
        </svg>
      </button>
      <button className="nav__item" id="library" onClick={props.changeTab}>
        <svg
          width="46"
          height="48"
          viewBox="0 0 46 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="library"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2174 35.8242V12H15.2174V35.8242H12.2174ZM19.0243 35.8242V12H22.0243V35.8242H19.0243ZM24.6968 13.7017L33.0861 36L35.894 34.9436L27.5046 12.6453L24.6968 13.7017Z"
            fill="#7F7F7F"
          />
        </svg>
      </button>
    </div>
  );
}

export default Navigation;
