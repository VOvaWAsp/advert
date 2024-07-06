function Filter({onFilterChanges}) {
    const filterLocation = (event) => {
        onFilterChanges(event.target.value)
    }
    return (
        <>
        <input onChange={filterLocation} type="text" name="location" />
        </>
    )
}

export default Filter;