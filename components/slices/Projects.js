import React from 'react';


const Projects = ({ slice }) => (
  <section className="section bg-bgc-dark">
      <div className="box flex-col content-center lg:flex-row my-16">
        {slice.items.map((project)=> {
          return (
         <div key={project.mobile.alt} className="flex flex-col justify-between h-ch w-mw bg-bgc my-16 shadow-2xl border-b-2 border-txc-red lg:m-auto transition duration-700 ease-in-out transform hover:scale-105">
             <div><img
                    className=""
                    src={project.mobile.url}
                    alt={project.mobile.alt}
                  /></div>
                  <p className="text-2xl text-center font-bold pb-8">{project.project_name}</p>
         </div>
          );
        })}
      </div>
  </section>
);

export default Projects;