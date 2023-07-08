import { Project } from "../models/Project.js";
export const getProjects = async (req, res) => {
    try{
        //This function bring all the projects in PG
      const Projects = await Project.findAll();
      // console.log(Projects);
      res.json(Projects);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
};
export const getProject = async(req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findOne({
            where: {
                id,
            },
        });
        if(!project) return res.status(404).json({message: 'project does not exist'});
        res.json(project)
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
};
export const createProject = async (req, res) => {
    try{
        const { name, priority, description } = req.body;
        const newProject = await Project.create({
            name,
            description,
            priority,
        });
        //Here we return the project created
        res.json(newProject);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
    //In this const we store the body in local variables
};
export const updateProject = async(req, res) =>{
    try {
        const { id } = req.params;
        const {name, priority, description } = req.body;
        const project = await Project.findByPk(id)
        console.log(project);
        project.name = name ?? project.name;
        project.priority = priority ?? project.priority;
        project.description = description ?? project.description;         
        
        await  project.save();
        res.json(project);
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
};
export const deleteProject = async(req, res) =>{
    try {
        const { id } = req.params;
    
        await Project.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204);
        
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
};
export const getProjectTasks = async(req, res) =>{
    const { id } = req.params;
    const tasks = await Task.findAll({
        where:{ projectId: id },
    });
    res.json(tasks);
}