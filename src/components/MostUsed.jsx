
const MostUsed = () => {

  const Used = [
    {
      name: 'React',
      url: 'https://react.dev/learn'
    },
    {
      name: 'Tailwind',
      url: 'https://tailwindcss.com/'
    },
    {
      name: 'Redux',
      url: 'https://react-redux.js.org/introduction/getting-started'
    },
    {
      name: 'NextJS',
      url: 'https://nextjs.org/docs'
    },
    {
      name: 'Router',
      url: 'https://reactrouter.com/en/main/start/tutorial'
    },
    {
      name: 'GSAP',
      url: 'https://greensock.com/docs/'
    },
  ];
  
  return (
    <section className="bg-mblack m-4 mr-0 p-6 rounded-3xl">
      <h2 className="text-violet-600 font-semibold text-2xl pb-8">Documentation</h2>
      <div className=" grid grid-cols-2 gap-6">
        { Used.map((app) => (
              <a
                key={app.name}
                className="bg-lblack p-main text-center rounded-3xl text-gray-300 tracking-wide  duration-300 hover:bg-violet-800 hover:text-gray-200 text-base md:text-md lg:text-lg" 
                href={app.url}
                >
                  {app.name}
              </a>
          ))
        }
    </div>
    </section>
   
  )
}

export default MostUsed;
