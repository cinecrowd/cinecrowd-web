
const SubscribeForm = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-md sm:text-center">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
          Stay Connected
        </h2>
        <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
          Submit your email address to subscribe to our newsletter and get the newest updates and exclusive offers.
        </p>
        <form action="#">
          <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div className="relative w-full">
              <div id="custom-substack-embed">
                <form className="custom-substack-widget csw-theme-orange">
                  <input className="custom-substack-widget csw-theme-orange-input" placeholder="example@gmail.com" value="" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SubscribeForm