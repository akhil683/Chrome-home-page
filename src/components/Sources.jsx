
const Sources = () => {
  const resources = [
    {
      name: 'LearnWeb3',
      url: 'https://learnweb3.io/degrees/'
    },
    {
      name: 'Udemy',
      url: 'https://www.udemy.com/home/my-courses/learning/'
    },
    {
      name: 'Alchemy',
      url: 'https://university.alchemy.com/home'
    },
    {
      name: 'Scrimba Router',
      url: 'https://scrimba.com/learn/reactrouter6'
    },
    {
      name: 'Code Academy',
      url: 'https://www.codecademy.com/learn'
    },
    {
      name: 'GitHub Star',
      url: 'https://github.com/akhil683?tab=stars'
    },
  ]
  
  return (
    <section className="bg-mblack m-4 p-6 rounded-3xl">
      <h2 className="text-violet-600 font-semibold text-2xl pb-8">Resources</h2>
      <div className=" grid grid-cols-2 gap-6">
      { resources.map((app) => (
            <a 
              key={app.name}
              className="bg-lblack p-main text-center rounded-3xl text-gray-300 tracking-wide  duration-300 hover:bg-violet-800 hover:text-gray-200 text-base md:text-md lg:text-lg" 
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
