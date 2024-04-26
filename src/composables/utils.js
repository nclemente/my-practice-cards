const compare_arrays_all = ( arr1, arr2 ) => {
  console.log('compare_arrays_all', arr1, arr2)
  if ( arr1.length !== arr2.length ) return false

  return arr1.every ( item1 => {
    console.log(`"${item1}"`)
    return arr2.some ( item2 => {
      const regex = new RegExp ( item2, 'ig' )
      console.log('\t', item2 )
      // console.log('\t', item2, regex.exec ( item1.toLowerCase ().trim () ) )
      return regex.exec ( item1.toLowerCase ().trim () )
    }) })
}

const compare_arrays_any = ( arr1, arr2 ) => {
  console.log('compare_arrays_any', arr1, arr2)
  return arr1.some ( item1 => {
    console.log(`"${item1}"`)
    return arr2.some ( item2 => {
      const regex = new RegExp ( item2, 'ig' )
      console.log('\t', item2 )
      return regex.exec ( item1.toLowerCase ().trim () )
    }) })
}

export const useUtils = () => {

  return {
    compare_arrays_all,
    compare_arrays_any,
  }
}