
const Sources = () => {
  const resources = [
    {
      name: 'LearnWeb3',
    url: ''
    },
    {
      name: 'Alchemy',
      url: ''
    },
    {
      name: 'GitHub Star',
      url: ''
    },
    {
      name: 'Udemy',
      url: ''
    },
    {
      name: 'Scrimba Router',
      url: ''
    },
    {
      name: 'Code Academy',
      url: ''
    },
  ]
  
  return (
    <section className="bg-mblack m-6 p-6 rounded-3xl w-full lg:max-w-[750px]">
      <h2 className="text-violet-600 font-semibold text-4xl pb-8">Resources</h2>
      <div className=" grid grid-cols-2 gap-6">
      { resources.map((app) => (
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

export default Sources
