export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action)
}

export const featuring = (store) => (next) => (action) => {
    const feacture =[{name: 'eddie'}, ...action.action.payload]
    const updateAction = {...action, action:{...action.action, payload: feacture}}
    next(updateAction)
}