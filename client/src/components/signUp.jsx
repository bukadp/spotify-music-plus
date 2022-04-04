function SignUp(props) {
  return (
    <div>
      <div className="overlay" onClick={props.closeSigns}></div>
      <div className="sign">
        <div className="sign__closeIcon">
          <svg
            onClick={props.closeSign}
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.292787 0.305288C0.480314 0.117817 0.734622 0.0125018 0.999786 0.0125018C1.26495 0.0125018 1.51926 0.117817 1.70679 0.305288L6.99979 5.59829L12.2928 0.305288C12.385 0.209778 12.4954 0.133596 12.6174 0.0811869C12.7394 0.0287779 12.8706 0.00119157 13.0034 3.77571e-05C13.1362 -0.00111606 13.2678 0.0241854 13.3907 0.0744663C13.5136 0.124747 13.6253 0.199 13.7192 0.292893C13.8131 0.386786 13.8873 0.498438 13.9376 0.621334C13.9879 0.744231 14.0132 0.87591 14.012 1.00869C14.0109 1.14147 13.9833 1.27269 13.9309 1.39469C13.8785 1.5167 13.8023 1.62704 13.7068 1.71929L8.41379 7.01229L13.7068 12.3053C13.8889 12.4939 13.9897 12.7465 13.9875 13.0087C13.9852 13.2709 13.88 13.5217 13.6946 13.7071C13.5092 13.8925 13.2584 13.9977 12.9962 14C12.734 14.0022 12.4814 13.9014 12.2928 13.7193L6.99979 8.42629L1.70679 13.7193C1.51818 13.9014 1.26558 14.0022 1.00339 14C0.741188 13.9977 0.490376 13.8925 0.304968 13.7071C0.11956 13.5217 0.0143906 13.2709 0.0121121 13.0087C0.00983372 12.7465 0.110629 12.4939 0.292787 12.3053L5.58579 7.01229L0.292787 1.71929C0.105316 1.53176 0 1.27745 0 1.01229C0 0.747124 0.105316 0.492816 0.292787 0.305288Z"
              fill="#595858"
            />
          </svg>
        </div>
        <div className="sign__title">Sign Up</div>
        <form action="#" className="sign__form">
          <input type="text" placeholder="Enter your nickname" />
          <input type="text" placeholder="Enter your password" />
          <input type="text" placeholder="Enter your email" />
        </form>
        <div className="sign__buttons">
          <button className="sign__buttonNext">
            <p>Continue</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
