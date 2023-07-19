import Buttons from "./Buttons";

const ButtonList = () =>{

    const buttonlists = ["All", "Live", "News", "Music", "Stock Market", "Sport", "Gold" ];

    return(
        <div className="mt-4 ml-2">
            {
                buttonlists.map((item, index) => {
                   
                    return <Buttons key={index} name={item} />
                })
            }
            
        </div>
    )
}

export default ButtonList;