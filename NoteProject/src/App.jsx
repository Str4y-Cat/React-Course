import React from 'react'

import Sidebar from './components/Sidebar';
import Mainbar from './components/Mainbar';

function App() {
  const [projectData, setProjectData]= React.useState(
    [
      {
        title:'my Notes',
        description: "this is a descriptioin",
        date:'December 2024',
        tasks:['abc','def','hig']

      },
      {
        title:'project 2',
        description: "this is a descriptioin",
        date:'December 2024',
        tasks:['abc','def','hig']
      }
    ]
    )
  const [toShow,setToShow]= React.useState({name:'home',index:null})

  function addProject(project){

    setProjectData(current=>
    {
      const projClone=structuredClone(project)
      const dataClone=structuredClone(current)
      dataClone.push(projClone)
      console.log(projClone)
      console.log(projClone)
      console.log(dataClone)
      return dataClone

    }
    )
   }

  function deleteProject(title){
    setProjectData(current=>
      {
        const dataClone=structuredClone(current)
        // dataClone.re
        // dataClone.push(projClone)
        return dataClone.filter((obj)=>
        {
          return obj.title!=title
        })
  
      })
      
  }

  function addTask(task,title){
    // console.log(task)
    // console.log(title)
    setProjectData(current=>
      {
        // console.log(current)
        const dataClone=structuredClone(current)
        // console.log(dataClone)
        // dataClone.re
        // dataClone.push(projClone)
        dataClone.forEach(proj=>
        {
          if(proj.title===title){
            proj.tasks.push(task)
          }
          return proj
        }
        )
        // console.log(dataClone)
        // console.log(dataClone[title])
        // dataClone.title.tasks[]=task
        return dataClone
      })
  }

  function removeTask(task,title){
    setProjectData(current=>
      {

        const dataClone=structuredClone(current)
        dataClone.forEach(proj=>
        {
          if(proj.title===title){

            proj.tasks= proj.tasks.filter((currentTask)=>
              {
                return currentTask!=task
              })
          }
          return proj
        }
        )

        return dataClone
      })
  }

  function updatePage(page,index)
  {
    console.log('updating page')
    const obj= {name:page,index:index}
    
    setToShow(obj)
  }

  


  return (
    <div className="flex w-screen h-screen align-middle justify-center">
        <Sidebar projects={projectData} updatePage={updatePage}></Sidebar>
        <Mainbar 
        addProject={addProject} 
        toShow={toShow} 
        updatePage={updatePage}
        data={projectData} 
        addTask={addTask} 
        removeTask={removeTask}>
          
        </Mainbar>
    </div>
   
    
  );
}

export default App;
