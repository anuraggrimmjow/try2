import './Projects.css'

function Projects() {
   
   return (
      
   <>
  <section className="projects ">
    <div className="container px-6 py-10 mx-auto">
    <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">explore some  awesome Projects</span>
          
        </h2>
        {/* <h1 className="maintext_projects text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-black">explore some  awesome Projects</h1> */}

       

        <div className="grid grid-cols-1 gap-10 mt-8 xl:mt-20 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-blue-700 dark:border-blue-700 rounded-xl">
                <span className="inline-block text-blue-500 dark:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-black">elegant Dark Mode</h1>

                <p className="text-black-500 dark:text-black-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>

         
        </div>
    </div>
</section>
    </>
    );
  }
  
  export default Projects;
  