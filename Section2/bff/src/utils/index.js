
const mergeObject = (baseConfig, overrideConfig) => {
    return Object.keys(overrideConfig).reduce(
      (acc, key) => {
        if (overrideConfig[key] !== undefined && overrideConfig[key] !== null) {
          if (Array.isArray(overrideConfig[key])) {
            acc[key] = overrideConfig[key].reduce((arrAcc, item, index) => {
              if (typeof item === 'object') {
                if (baseConfig[key]?.[index]) {
                  arrAcc.push(mergeObject(baseConfig[key][index], item))
                } else {
                  arrAcc.push(item)
                }
              } else {
                arrAcc.push(item)
              }
              return arrAcc
            }, [])
          } else if (typeof overrideConfig[key] === 'object') {
            acc[key] = mergeObject(baseConfig[key] || {}, overrideConfig[key])
          } else {
            acc[key] = overrideConfig[key]
          }
        }
        return acc
      },
      { ...baseConfig }
    )
  }
  
  export { mergeObject }