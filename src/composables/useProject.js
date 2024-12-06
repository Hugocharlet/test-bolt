import { ref } from 'vue'
import { projects } from '../data/projects'

export function useProject(projectId) {
  const project = ref(null)
  const error = ref(null)

  const fetchProject = () => {
    try {
      const foundProject = projects.find(p => p.id === projectId)
      if (!foundProject) {
        throw new Error(`Project ${projectId} not found`)
      }
      
      // Enhance project data with additional required fields
      project.value = {
        ...foundProject,
        subtitle: `${foundProject.typology} ${foundProject.year}`,
        dimension: foundProject.dimension || 'Dimensions available upon request',
        description: foundProject.description || 'Description coming soon',
        models: foundProject.models || []
      }
    } catch (e) {
      error.value = e.message
    }
  }

  // Fetch project data immediately
  fetchProject()

  return {
    project,
    error,
    fetchProject
  }
}