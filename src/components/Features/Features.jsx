function Features({open, item}) {
    return (
        <>
        {open && (
            <div>
                <div>
                    <div>
                        <h3>{item.adults} adults</h3>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Features;