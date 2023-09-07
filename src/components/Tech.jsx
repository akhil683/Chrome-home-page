
const Tech = () => {
  const Tech = [
    {
      name: 'Github',
      url: 'https://github.com/akhil683'
    },
    {
      name: 'Redux Toolkit',
      url: 'https://redux-toolkit.js.org/introduction/getting-started'
    },
    {
      name: 'Typing',
      url: 'https://www.keybr.com/'
    },
    {
      name: 'Netlify',
      url: 'https://app.netlify.com/teams/akhil683/overview'
    },
    {
      name: 'Firebase',
      url: 'https://console.firebase.google.com/'
    },
    {
      name: 'Toastify',
      url: 'https://fkhadra.github.io/react-toastify/introduction/'
    },
    {
      name: 'Loader Spinner',
      url: 'https://mhnpd.github.io/react-loader-spinner/'
    },
    {
      name: 'Swiper JS',
      url: 'https://swiperjs.com/demos#effect-coverflow'
    },
    {
      name: 'Remix IDE',
      url: 'https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null'
    },
  
    {
      name: 'Tailwind Comp',
      url: 'https://tailwindcomponents.com/'
    },
  ]
  return (
    <section className="bg-mblack m-6 mt-0 p-6 rounded-3xl lg:min-w-[600px] w-full">
      <h2 className="text-violet-600 font-semibold text-4xl pb-8">Technology</h2>
      <div className=" grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
        { Tech.map((app) => (
              <a 
                className="bg-lblack p-main text-center rounded-3xl text-slate-300 tracking-wide  duration-300 hover:bg-violet-800 font-semibold text-lg md:text-xl lg:text-2xl" 
                href={app.url}>
                  {app.name}
              </a>
          ))
        }
    </div>
    </section>
  )
}

export default Tech
