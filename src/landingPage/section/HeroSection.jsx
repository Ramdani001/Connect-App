function HeroSection(params) {
    return(
        <div className="h-screen w-full bg-gray-200 grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-14">
                <h1 className="text-3xl mb-2">EDITING VIDEO</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, suscipit accusantium, quo iste ipsum dolorem tenetur eaque, asperiores quod maxime fugiat deleniti. Ducimus, dolor perferendis!</p>
            </div>
            <div className="w-full">
                <img className="w-full" src={'images/bgHero.png'} alt="s" />
            </div>
        </div>
    )
}

export default HeroSection;