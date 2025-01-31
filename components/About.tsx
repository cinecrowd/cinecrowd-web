import React from 'react'

const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col gap-6 text-center md:text-start lg:flex-row lg:gap-16 xl:gap-32 max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 py-8 sm:py-16 lg:py-24"
    >
      <div className="flex w-full min-w-full max-w-lg flex-1 items-center justify-center rounded-2xl lg:min-w-[370px]">
        <div className="flex max-w-lg flex-col gap-4">
          <h3 className="text-white text-3xl sm:text-4xl font-extrabold">Beyond Engagement</h3>
        </div>
        <img
          src="/images/Gradients.svg"
          alt=""
          width="183"
          height="345"
          sizes="100vw"
          className="md:h-[350px] md:w-[800px]"
        />
      </div>
      <div className="flex flex-col gap-6 lg:gap-12">
        <div className="flex max-w-lg flex-col gap-4">
          <h3 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">
            Revolutionizing Film Funding with Ordinals and Runes
          </h3>
          <h4 className="text-lg font-normal tracking-tight text-slate-500">
            At the heart of CineCrowd lies a bold vision to revolutionize the way films are funded and brought to life. We believe that the power of community, combined with the innovative capabilities of Bitcoin&apos;s Ordinals and Runes, can unlock new avenues for filmmakers to connect with their audience and secure the resources they need to turn their creative visions into reality.
          </h4>
        </div>
        <div className="grid w-full grid-flow-row justify-items-start gap-12 md:grid-cols-2 xl:gap-x-32">
          <div className="flex w-full flex-col items-center gap-6 md:max-w-[280px] md:items-start">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40"
              viewBox="-5.0 -10.0 110.0 135.0">
              <path
                d="m59.762 38.812-9.7617 3.5742-9.7617-3.5742-2.082-0.76953 11.262-5.0312c0.37891-0.16406 0.80859-0.16406 1.1875 0l11.262 5.0312-2.082 0.76953zm-47.262 48.918 3.2305-12.5c0.078125-0.33594 0.33203-0.60156 0.66406-0.6875 0.32812-0.097657 0.67578 0 0.90625 0.25l3.3242 3.4375 10.418-10.863v-0.003907c0.27734-0.28516 0.66406-0.44922 1.0664-0.44922s0.78906 0.16406 1.0664 0.44922c0.59766 0.625 0.59766 1.6055 0 2.2305l-10.418 10.855 3.3438 3.4805 0.003907-0.003907c0.23047 0.25781 0.32031 0.61328 0.23828 0.94922-0.074219 0.33984-0.33203 0.60938-0.66797 0.69922l-12.051 3.3633c-0.32812 0.09375-0.67969-0.007812-0.90625-0.26172-0.24219-0.25-0.33594-0.60938-0.23828-0.94531zm73.895 1.207-12.07-3.3633c-0.33594-0.089844-0.59375-0.35938-0.66797-0.69922-0.082031-0.33594 0.007812-0.69141 0.23828-0.94922l3.3438-3.4805-10.418-10.855 0.003907 0.003906c-0.59766-0.625-0.59766-1.6055 0-2.2305 0.57812-0.56641 1.5039-0.56641 2.082 0l10.418 10.863 3.3438-3.4883c0.23047-0.24609 0.57812-0.34375 0.90625-0.25 0.33203 0.089844 0.58594 0.35547 0.66406 0.6875l3.2305 12.5c0.09375 0.33594 0.003906 0.69922-0.23828 0.94922-0.22656 0.25391-0.58203 0.35547-0.90625 0.26172zm1.1055-76.98-3.2305 12.551v0.003907c-0.078125 0.33203-0.33203 0.59766-0.66406 0.6875-0.32812 0.097656-0.67969 0-0.90625-0.25l-3.3242-3.4805-10.418 10.824c-0.27344 0.27734-0.64844 0.43359-1.0391 0.43359s-0.76562-0.15625-1.043-0.43359c-0.59375-0.625-0.59375-1.6055 0-2.2305l10.418-10.855-3.3438-3.4805v0.003907c-0.23438-0.25781-0.32422-0.61328-0.24219-0.94922 0.074219-0.33984 0.33203-0.60938 0.66797-0.69922l12.051-3.3633c0.32812-0.09375 0.67969 0.007812 0.90625 0.26172 0.24609 0.25 0.33594 0.60938 0.24219 0.94531zm-73.875-1.207 12.051 3.3633c0.33594 0.089844 0.59375 0.35938 0.66797 0.69922 0.082031 0.33594-0.007812 0.69141-0.23828 0.94922l-3.3438 3.4805 10.418 10.855-0.003907-0.003906c0.59766 0.625 0.59766 1.6055 0 2.2305-0.27734 0.29297-0.66406 0.45703-1.0664 0.45703s-0.78906-0.16406-1.0664-0.45703l-10.418-10.855-3.3438 3.5312c-0.22656 0.25391-0.58203 0.35156-0.90625 0.25-0.33203-0.085938-0.58984-0.35156-0.66797-0.6875l-3.2305-12.5h0.003907c-0.097657-0.33594-0.003907-0.69922 0.23828-0.94922 0.22656-0.25391 0.57812-0.35547 0.90625-0.25781zm4.6055 37.676c-0.63672-3.1758-3.4062-5.4805-6.6484-5.5312-3.7734 0.20703-6.7266 3.3242-6.7266 7.1055s2.9531 6.8984 6.7266 7.1055c3.2422-0.050781 6.0117-2.3555 6.6484-5.5312h11.977c0.79297-0.09375 1.3945-0.76562 1.3945-1.5625 0-0.80078-0.60156-1.4727-1.3945-1.5625zm30.258 34.668c-3.1523 0.80859-5.3438 3.6719-5.3008 6.9258-0.10547 1.875 0.56641 3.707 1.8555 5.0664 1.2891 1.3633 3.082 2.1328 4.957 2.1328s3.668-0.76953 4.957-2.1328c1.2891-1.3594 1.9609-3.1914 1.8555-5.0664 0.042969-3.2539-2.1484-6.1172-5.3008-6.9258v-12.5c0-0.83594-0.67578-1.5117-1.5117-1.5117s-1.5117 0.67578-1.5117 1.5117zm33.332-31.52h0.003907c0.63672 3.1758 3.4023 5.4805 6.6445 5.5312 3.7734-0.20703 6.7305-3.3242 6.7305-7.1055s-2.957-6.8984-6.7305-7.1055c-3.2422 0.050781-6.0078 2.3555-6.6445 5.5312h-12.031c-0.79297 0.09375-1.3945 0.76562-1.3945 1.5625 0 0.80078 0.60156 1.4727 1.3945 1.5625zm-30.207-34.668c3.1562-0.80859 5.3477-3.6719 5.3047-6.9258 0.10156-1.875-0.57031-3.707-1.8594-5.0664-1.2891-1.3633-3.0781-2.1328-4.9531-2.1328s-3.668 0.76953-4.957 2.1328c-1.2891 1.3594-1.9609 3.1914-1.8555 5.0664-0.046875 3.2539 2.1445 6.1172 5.3008 6.9258v12.5c0 0.83594 0.67578 1.5117 1.5117 1.5117 0.83203 0 1.5078-0.67578 1.5078-1.5117zm12.242 23.719-13.855 5.0938-13.855-5.0938v18.832c-0.011719 0.41406 0.24219 0.78516 0.625 0.92969l12.918 4.7305v-0.003907c0.19922 0.085938 0.42578 0.085938 0.625 0l12.918-4.6953c0.38281-0.14453 0.63672-0.51562 0.625-0.92969z"
                fill="#E0822D" />
            </svg>
            <div
              className="flex max-w-[280px] flex-col items-center gap-4 text-center md:items-start md:gap-6 md:text-start">
              <p className="text-white text-xl font-semibold tracking-tight">Community-Driven Approach</p>
              <p className="text-slate-500">CineCrowd empowers filmmakers to engage directly with their audience, fostering a collaborative environment for film development and funding.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-6 md:max-w-[280px] md:items-start">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40"
              viewBox="-5.0 -10.0 110.0 135.0">
              <path
                d="m50.762 9.3789c-0.039063 0-0.074219 0.003906-0.10938 0.003906-0.35156 0.050782-0.67578 0.21094-0.92188 0.46484l-20.184 20.758c-0.44141 0.4375-0.58594 1.0859-0.375 1.668l7.4062 19.902-3.1836 5.4922-4.0156-2.3281v-10.195c0.007813-0.67188-0.41016-1.2773-1.043-1.5078-0.63281-0.23047-1.3438-0.035157-1.7695 0.48828l-7.6836 9.4141c-0.22266 0.28125-0.34375 0.63281-0.34375 0.99219v14.352c0 0.52344 0.25781 1.0156 0.69141 1.3125l29.875 20.16c0.58203 0.39062 1.3516 0.35156 1.8945-0.09375l27.703-22.559c0.30859-0.26172 0.50391-0.63281 0.55078-1.0352l2.1953-16.402c0.046875-0.41016-0.070313-0.82422-0.32422-1.1523l-9.9648-13.082c-0.42969-0.56641-1.1875-0.77734-1.8516-0.51562-0.66016 0.26562-1.0664 0.9375-0.98828 1.6445l1.1055 10.035-2.9727 11.953-1.7773 1.0781-0.80469-2 3.1797-12c0.15625-0.56641-0.015625-1.168-0.4375-1.5703l-16.867-15.637 3.0977-12.531c0.039062-0.16406 0.054688-0.33594 0.042969-0.50391l-0.46094-5.1641c-0.074219-0.85156-0.8125-1.4883-1.6641-1.4414zm7.3672 9.3945c-0.035156 0-0.066406 0-0.097656 0.003906-0.52734 0.058594-0.94531 0.46484-1.0156 0.98828l-1.0625 7.6367c-0.058594 0.49219 0.20312 0.96484 0.64844 1.1797l4.3398 2.0977c0.41797 0.20312 0.91797 0.13672 1.2656-0.17188 0.34766-0.30859 0.47656-0.79687 0.32031-1.2383l-3.293-9.7344c-0.16797-0.46484-0.61328-0.77344-1.1055-0.76172zm-28.332 2.5234c-0.070313 0-0.14062 0.003906-0.21094 0.015625-0.16797 0.035156-0.32813 0.11328-0.45703 0.23047l-8.9531 7.6094c-0.22266 0.19531-0.35156 0.47656-0.34375 0.76953 0.003907 0.29688 0.14062 0.57422 0.36719 0.75781l5.5859 4.5664c0.36719 0.27734 0.875 0.26953 1.2305-0.023438 0.35156-0.28906 0.46484-0.78516 0.26562-1.1992l-1.7539-3.2539 5.0742-7.957c0.18359-0.30078 0.19531-0.67578 0.03125-0.98828-0.16797-0.3125-0.48437-0.51172-0.83594-0.52734z"
                fill="#E0822D" />
            </svg>
            <div
              className="flex max-w-[280px] flex-col items-center gap-4 text-center md:items-start md:gap-6 md:text-start">
              <p className="text-white text-xl font-semibold tracking-tight">Ordinal-Based Tokens</p>
              <p className="text-slate-500">
                Leverage the unique capabilities of Bitcoin Ordinals to create and distribute digital tokens that represent ownership or access to your film projects.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-6 md:max-w-[280px] md:items-start">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
              width="40" height="40" viewBox="0 0 100 125"
            // style="enable-background:new 0 0 100 100;"
            // xml:space="preserve"
            >
              <path d="M41.797,64.596L38,68.214l-3.797-3.618L38,59.173L41.797,64.596z" />
              <path
                d="M83.086,70.291c-0.197-0.583-0.222-1.21-0.07-1.807l2.834-11.18c0.14-0.55,0.13-1.127-0.028-1.672L79.857,35.04  c-0.225-0.778-0.147-1.611,0.22-2.334l5.135-10.13c0.526-1.038,0.448-2.274-0.205-3.24l-4.713-6.973  c-0.503-0.744-1.295-1.249-2.189-1.396L60.511,8.075c-0.443-0.073-0.898-0.055-1.334,0.053l-11.524,2.842  c-0.605,0.149-1.24,0.125-1.832-0.069l-7.789-2.561c-0.736-0.242-1.534-0.219-2.254,0.065l-14.33,5.654  c-0.616,0.243-1.142,0.664-1.51,1.208l-5.441,8.05c-0.359,0.531-0.55,1.155-0.55,1.794v8.098c0,0.411,0.079,0.819,0.234,1.201  l5.681,14.009c0.401,0.989,0.283,2.108-0.316,2.994l-4.795,7.095c-0.512,0.758-0.677,1.694-0.453,2.578l2.728,10.761  c0.131,0.515,0.131,1.054,0,1.568l-2.442,9.633c-0.373,1.47,0.34,2.998,1.714,3.676l10.068,4.965  c0.455,0.224,0.957,0.341,1.466,0.341H66.07c0.216,0,0.431-0.021,0.643-0.063l14.206-2.802c1.153-0.228,2.095-1.047,2.467-2.148  l2.331-6.897c0.224-0.664,0.224-1.381,0-2.045L83.086,70.291z M30.283,36.292l5.467-2.603V22.25c0-1.242,1.008-2.25,2.25-2.25  s2.25,1.008,2.25,2.25v6.08l3.533-1.682c1.121-0.539,2.464-0.062,2.999,1.063c0.535,1.122,0.057,2.464-1.065,2.997l-5.467,2.603  V44.75c0,1.242-1.008,2.25-2.25,2.25s-2.25-1.008-2.25-2.25v-6.08l-3.533,1.682c-0.312,0.149-0.642,0.22-0.965,0.22  c-0.841,0-1.648-0.472-2.033-1.283C28.684,38.167,29.161,36.825,30.283,36.292z M46.379,79.303C45.937,79.766,45.343,80,44.75,80  c-0.558,0-1.116-0.205-1.551-0.621L38,74.428l-5.199,4.951c-0.896,0.858-2.323,0.82-3.18-0.076  c-0.857-0.899-0.823-2.326,0.078-3.182l5.039-4.799l-5.039-4.802c-0.806-0.768-0.93-2.007-0.292-2.918l6.75-9.642  c0.841-1.207,2.845-1.207,3.686,0l6.75,9.642c0.639,0.911,0.514,2.15-0.292,2.918l-5.039,4.802l5.039,4.799  C47.202,76.977,47.236,78.403,46.379,79.303z M56.899,29.674C56.334,29.249,56,28.584,56,27.875s0.334-1.374,0.899-1.799l7.5-5.625  c0.996-0.747,2.405-0.545,3.151,0.448c0.746,0.996,0.543,2.405-0.45,3.149L62,27.875l5.101,3.826C67.666,32.126,68,32.791,68,33.5  s-0.334,1.374-0.899,1.799L62,39.125l5.101,3.826c0.993,0.744,1.195,2.153,0.45,3.149C67.108,46.689,66.433,47,65.749,47  c-0.47,0-0.943-0.146-1.349-0.451l-7.5-5.625C56.334,40.499,56,39.834,56,39.125s0.334-1.374,0.899-1.799L62,33.5L56.899,29.674z   M70.301,63.307l-6.051,5.765v8.678c0,1.242-1.008,2.25-2.25,2.25s-2.25-1.008-2.25-2.25v-8.678l-6.051-5.765  c-0.901-0.858-0.935-2.282-0.078-3.182c0.858-0.896,2.282-0.935,3.18-0.076l2.949,2.808V55.25c0-1.242,1.008-2.25,2.25-2.25  s2.25,1.008,2.25,2.25v7.607l2.949-2.808c0.896-0.858,2.323-0.823,3.18,0.076S71.202,62.448,70.301,63.307z"
                fill="#E0822D" />
            </svg>
            <div
              className="flex max-w-[280px] flex-col items-center gap-4 text-center md:items-start md:gap-6 md:text-start">
              <p className="text-white text-xl font-semibold tracking-tight">Rune-Powered Fundraising</p>
              <p className="text-slate-500">
                Utilize the versatility of Bitcoin Runes to design and execute sophisticated fundraising campaigns, unlocking new avenues for film financing.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-6 md:max-w-[280px] md:items-start">

            {/* <?xml version="1.0" ?> */}
            <svg width="30" height="30" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21ZM14,7V6a1,1,0,0,0-2,0V7H11V6A1,1,0,0,0,9,6V7H8A1,1,0,0,0,8,9H9v6H8a1,1,0,0,0,0,2H9v1a1,1,0,0,0,2,0V17h1v1a1,1,0,0,0,2,0V17a3,3,0,0,0,3-3,3,3,0,0,0-.77-2A3,3,0,0,0,17,10,3,3,0,0,0,14,7Zm0,8H11V13h3a1,1,0,0,1,0,2Zm0-4H11V9h3a1,1,0,0,1,0,2Z"
                fill="#E0822D" />
            </svg>
            <div
              className="flex max-w-[280px] flex-col items-center gap-4 text-center md:items-start md:gap-6 md:text-start">
              <p className="text-white text-xl font-semibold tracking-tight">Secure and Transparent</p>
              <p className="text-slate-500">
                CineCrowd operates on the robust and decentralized Bitcoin blockchain, ensuring the safety and transparency of all transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About