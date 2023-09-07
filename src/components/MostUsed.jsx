
const MostUsed = () => {

  const Used = [
    {
      name: 'React',
      url: 'www.google.com'
    },
    {
      name: 'Tailwind',
      url: 'www.udemy.com'
    },
    {
      name: 'Redux',
      url: 'www.youtube.com'
    },
    {
      name: 'NextJS',
      url: 'www.github.com'
    },
    {
      name: 'Router',
      url: 'www.github.com'
    },
    {
      name: 'GSAP',
      url: 'www.github.com'
    },
  ];
  return (
    <section className="bg-mblack m-6 p-6 rounded-3xl w-full lg:max-w-[750px]">
      <h2 className="text-violet-600 font-semibold text-4xl pb-8">Documentation</h2>
      <div className=" grid grid-cols-2 gap-6">
        { Used.map((app) => (
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

export default MostUsed;
