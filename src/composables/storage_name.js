const storage_prefix = 'mfc'
let _component_name = ''

const get_name = ( var_name ) => `${ storage_prefix }.${ _component_name }.${ var_name }`

export const useStorageName = ( component_name ) => {

  _component_name = component_name

  return {
    storage_prefix,
    get_name,
    component_name,
  }
}