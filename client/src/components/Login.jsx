import React from 'react';

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = '1a50064e7bf64b30aaba104ea47d44bb';
const REDIRECT_URI = 'http://localhost:3000';
const SCOPE =
  'streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-library-read%20user-library-modify';
const RESPONSE_TYPE = 'code';

function Login() {
  return (
    <div className="login">
      <svg
        width="325"
        height="97"
        viewBox="0 0 325 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.5611 0C21.7568 0 0 21.7294 0 48.5C0 75.3286 21.7568 97 48.5611 97C75.4235 97 97.1222 75.2706 97.1222 48.5C97.1802 21.7294 75.4235 0 48.5611 0ZM70.84 69.9976C69.9698 71.4462 68.1132 71.8519 66.6627 70.9827C55.2332 64.0293 40.9027 62.4648 23.9615 66.2891C22.3369 66.6368 20.7124 65.6517 20.3643 64.0293C20.0162 62.4068 21.0025 60.7844 22.627 60.4367C41.1348 56.2067 57.0317 58.003 69.7957 65.8256C71.3042 66.6947 71.7683 68.549 70.84 69.9976ZM76.8159 56.7861C75.7135 58.5824 73.3928 59.1039 71.5943 58.0609C58.5402 50.0066 38.64 47.6888 23.2072 52.3823C21.1766 52.9618 19.0879 51.8608 18.5078 49.8907C17.9276 47.8626 19.0299 45.7766 21.0605 45.1971C38.698 39.8662 60.6288 42.4158 75.6555 51.629C77.338 52.672 77.9182 54.9898 76.8159 56.7861ZM77.3381 42.9952C61.6732 33.724 35.8551 32.8548 20.8865 37.3746C18.5078 38.1278 15.955 36.7372 15.2007 34.3614C14.4465 31.9857 15.8389 29.4361 18.2177 28.6828C35.391 23.4677 63.9359 24.5108 81.9215 35.1726C84.0681 36.4474 84.7644 39.2288 83.488 41.3728C82.2696 43.5747 79.4847 44.27 77.3381 42.9952Z"
          fill="white"
        />
        <path
          d="M132.452 44.7924C124.039 42.8223 122.589 41.3737 122.589 38.4185C122.589 35.6371 125.199 33.7829 129.087 33.7829C132.858 33.7829 136.629 35.2315 140.574 38.1287C140.69 38.2446 140.864 38.2446 140.98 38.2446C141.154 38.2446 141.27 38.1287 141.328 38.0129L145.448 32.2184C145.622 31.9866 145.564 31.6389 145.332 31.4651C140.632 27.6986 135.352 25.9023 129.203 25.9023C120.152 25.9023 113.828 31.3492 113.828 39.1138C113.828 47.4579 119.281 50.4131 128.738 52.673C136.745 54.5272 138.137 56.0917 138.137 58.8151C138.137 61.8862 135.411 63.7984 131.001 63.7984C126.128 63.7984 122.124 62.1759 117.657 58.2936C117.541 58.1777 117.367 58.1777 117.251 58.1777C117.077 58.1777 116.961 58.2357 116.903 58.3516L112.319 63.7984C112.145 64.0302 112.145 64.3778 112.377 64.5517C117.599 69.1873 123.981 71.621 130.885 71.621C140.632 71.621 146.956 66.29 146.956 58.0618C146.84 51.1084 142.721 47.2841 132.452 44.7924Z"
          fill="white"
        />
        <path
          d="M168.945 36.5059C164.709 36.5059 161.228 38.1863 158.385 41.6051V37.7807C158.385 37.491 158.153 37.2592 157.863 37.2592H150.379C150.089 37.2592 149.857 37.491 149.857 37.7807V80.4283C149.857 80.718 150.089 80.9498 150.379 80.9498H157.863C158.153 80.9498 158.385 80.718 158.385 80.4283V66.985C161.228 70.172 164.709 71.7365 168.945 71.7365C176.777 71.7365 184.784 65.7102 184.784 54.1212C184.784 42.5902 176.777 36.5059 168.945 36.5059ZM176.023 54.1212C176.023 60.0316 172.368 64.0878 167.204 64.0878C162.04 64.0878 158.211 59.7998 158.211 54.1212C158.211 48.4426 162.099 44.1547 167.204 44.1547C172.31 44.1547 176.023 48.3267 176.023 54.1212Z"
          fill="white"
        />
        <path
          d="M205.148 36.5059C195.053 36.5059 187.104 44.3285 187.104 54.2371C187.104 64.0878 194.995 71.7945 205.032 71.7945C215.185 71.7945 223.134 64.0298 223.134 54.1212C223.134 44.2706 215.243 36.5059 205.148 36.5059ZM205.148 64.2037C199.752 64.2037 195.691 59.8578 195.691 54.1792C195.691 48.4426 199.636 44.2706 205.032 44.2706C210.428 44.2706 214.547 48.6164 214.547 54.353C214.547 60.0316 210.602 64.2037 205.148 64.2037Z"
          fill="white"
        />
        <path
          d="M244.774 37.1991H236.535V28.7971C236.535 28.5074 236.303 28.2756 236.013 28.2756H228.529C228.239 28.2756 228.007 28.5074 228.007 28.7971V37.2571H224.41C224.119 37.2571 223.887 37.4889 223.887 37.7786V44.2105C223.887 44.5002 224.119 44.732 224.41 44.732H228.007V61.4202C228.007 68.1418 231.372 71.5606 237.986 71.5606C240.655 71.5606 242.917 70.9811 245.006 69.8222C245.18 69.7063 245.296 69.5325 245.296 69.3586V63.2165C245.296 63.0426 245.18 62.8688 245.064 62.7529C244.89 62.637 244.716 62.637 244.542 62.7529C243.091 63.5062 241.699 63.7959 240.132 63.7959C237.696 63.7959 236.651 62.695 236.651 60.2613V44.7899H244.89C245.18 44.7899 245.412 44.5582 245.412 44.2684V37.7786C245.296 37.4889 245.064 37.1991 244.774 37.1991Z"
          fill="white"
        />
        <path
          d="M273.552 37.2595V36.2165C273.552 33.1454 274.712 31.8127 277.323 31.8127C278.889 31.8127 280.166 32.1024 281.558 32.566C281.732 32.6239 281.906 32.566 282.08 32.508C282.196 32.3922 282.312 32.2183 282.312 32.0445V25.7285C282.312 25.4967 282.138 25.2649 281.906 25.207C280.398 24.7434 278.541 24.3378 275.64 24.3378C268.678 24.3378 265.023 28.2201 265.023 35.6371V37.2016H261.426C261.136 37.2016 260.846 37.4334 260.846 37.7231V44.2129C260.846 44.5027 261.078 44.7345 261.426 44.7345H265.023V70.4621C265.023 70.7518 265.255 70.9836 265.545 70.9836H273.029C273.32 70.9836 273.552 70.7518 273.552 70.4621V44.7924H280.572L291.305 70.52C290.087 73.2434 288.868 73.7649 287.244 73.7649C285.91 73.7649 284.517 73.3593 283.125 72.606C283.009 72.5481 282.835 72.5481 282.661 72.5481C282.544 72.606 282.37 72.7219 282.312 72.8378L279.76 78.4005C279.644 78.6903 279.76 78.98 279.992 79.0959C282.66 80.5445 285.039 81.1239 287.998 81.1239C293.568 81.1239 296.585 78.5164 299.312 71.621L312.366 38.0128C312.424 37.839 312.424 37.6652 312.308 37.4913C312.192 37.3175 312.018 37.2595 311.844 37.2595H304.011C303.779 37.2595 303.547 37.4334 303.489 37.6072L295.482 60.4376L286.896 37.6072C286.838 37.3754 286.606 37.2595 286.374 37.2595H273.552Z"
          fill="white"
        />
        <path
          d="M256.902 37.1985H249.417C249.127 37.1985 248.895 37.4302 248.895 37.72V70.4589C248.895 70.7486 249.127 70.9804 249.417 70.9804H256.902C257.192 70.9804 257.424 70.7486 257.424 70.4589V37.7779C257.424 37.4882 257.192 37.1985 256.902 37.1985Z"
          fill="white"
        />
        <path
          d="M253.127 22.3087C250.168 22.3087 247.732 24.7424 247.732 27.6976C247.732 30.6528 250.168 33.0865 253.127 33.0865C256.086 33.0865 258.523 30.6528 258.523 27.6976C258.523 24.7424 256.144 22.3087 253.127 22.3087Z"
          fill="white"
        />
        <path
          d="M318.978 47.7475C316.02 47.7475 313.699 45.3718 313.699 42.4745C313.699 39.5772 316.02 37.1436 319.036 37.1436C321.995 37.1436 324.316 39.5193 324.316 42.4166C324.258 45.3138 321.937 47.7475 318.978 47.7475ZM318.978 37.6651C316.252 37.6651 314.221 39.809 314.221 42.4745C314.221 45.082 316.252 47.226 318.978 47.226C321.705 47.226 323.736 45.082 323.736 42.4166C323.736 39.809 321.705 37.6651 318.978 37.6651ZM320.139 42.996L321.647 45.082H320.371L319.036 43.1698H317.876V45.082H316.832V39.5193H319.327C320.603 39.5193 321.473 40.1567 321.473 41.3156C321.473 42.1848 320.893 42.7642 320.139 42.996ZM319.269 40.5044H317.876V42.2427H319.269C319.965 42.2427 320.371 41.895 320.371 41.3735C320.371 40.7941 319.965 40.5044 319.269 40.5044Z"
          fill="white"
        />
      </svg>

      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
        className="login__link"
      >
        Login to Spotify
      </a>
    </div>
  );
}

export default Login;
