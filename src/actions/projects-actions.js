export const PROJECTS_FILTER = 'PROJECTS_FILTER';

export function projectsSetFilter(value) {
  return {type: PROJECTS_FILTER, value};
}