
 import "./Home.css"; 

const Home = () => {

    return (
      <div id="__next">
        <div
          style={{ backgroundColor: "black" }}
          class="jsx-9b34ce74bae27a8f landing_page_main custom_scrollbar"
        >
          <div class="jsx-b7442b5b9511eb8 navbar_wrapper">
            <div class="jsx-b7442b5b9511eb8 navbar">
              <div class="jsx-b7442b5b9511eb8 logo">Portfolio Generator</div>
              <button class="jsx-16fe40e67dad50c login_btn">
                <p class="jsx-16fe40e67dad50c icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                    enable-background="new 0 0 48 48"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </p>
                <p class="jsx-16fe40e67dad50c login_text">Sign In</p>
              </button>
            </div>
          </div>
          <div
            style={{ backgroundColor: "black" }}
            class="jsx-9e731121a2c5013a hero_wrapper"
          >
            <div class="jsx-9e731121a2c5013a tagline">
              <p class="jsx-9e731121a2c5013a">
                <span class="jsx-9e731121a2c5013a b">SIGN IN.</span>
                <span class="jsx-9e731121a2c5013a f f-1">SIGN IN.</span>
              </p>
              <p class="jsx-9e731121a2c5013a">
                <span class="jsx-9e731121a2c5013a b">CREATE.</span>
                <span class="jsx-9e731121a2c5013a f f-2">CREATE.</span>
              </p>
              <p class="jsx-9e731121a2c5013a">
                <span class="jsx-9e731121a2c5013a b">SHARE.</span>
                <span class="jsx-9e731121a2c5013a f f-3">SHARE.</span>
              </p>
            </div>
            <div class="jsx-9e731121a2c5013a tagline_secondary">
              Kickstart your software development voyage
            </div>
            <div class="jsx-af2ab08db80ae354 username_div">
              <div
                style={{ border: "2px solid #7555F1" }}
                class="jsx-af2ab08db80ae354 username_input"
              >
                <input
                  type="text"
                  placeholder="Username"
                  autocomplete="off"
                  class="jsx-af2ab08db80ae354"
                  value=""
                />
                <p class="jsx-af2ab08db80ae354"></p>
              </div>
              <div class="jsx-af2ab08db80ae354 availability_msg hidden"></div>
            </div>
            <div class="jsx-af2ab08db80ae354 btn">
              <button class="jsx-2351de3453acc426 button disabled">
                Create Portfolio
              </button>
            </div>
          </div>
          <div class="jsx-44bdf6eab199ab6b video_container">
            <video
              controls=""
              width="100%"
              loop=""
              autoplay=""
              class="jsx-44bdf6eab199ab6b video"
            >
              <source
                src="./Scam.mkv"
                type="video/mp4"
                class="jsx-44bdf6eab199ab6b"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="jsx-1c61ed74b89e72c1 footer_wrapper">
            <div class="jsx-1c61ed74b89e72c1 footer_container">
              <div class="jsx-1c61ed74b89e72c1 footer_links">
                <div class="jsx-1c61ed74b89e72c1 left_footer">
                  Built by Monu Singh{" "}
                  <span class="jsx-1c61ed74b89e72c1"> ©</span> 2023
                </div>
                <div class="jsx-1c61ed74b89e72c1 right_footer">
                  <a
                    href="https://github.com/monurajputrko"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="jsx-1c61ed74b89e72c1 link"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/monurajputrko/"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="jsx-1c61ed74b89e72c1 link"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
}

export default Home;