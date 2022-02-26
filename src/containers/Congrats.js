const Congrats = ({type}) =>{

    return(
        <h2 className="text-light text-center fs-1">
            Congratulations! 5 {type? "movies" : "shows"} nominated.
        </h2>
    )
}

export default Congrats;