function Me() {
    return (
        <div>
            <div className="flex">
                <img src="https://images.unsplash.com/photo-1621157281974-e926449624e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwZ3JlZW58ZW58MHx8MHx8&w=1000&q=80" alt="" className="w-60 ml-40 mt-10"/>
                
                <div className="m-20 mr-40">
                    <h3 className="font-bold mb-5 text-2xl">My name</h3>
                    <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae qui, voluptates est a blanditiis consequatur autem unde cupiditate perferendis molestias!</p>
                    <p className="mb-5">Some websites I frequently use:</p>
                    <div className="flex flex-col">
                    <a href="www.google.com" target="_blank">Google</a>
                    <a href="www.amazon.com" target="_blank">Amazon</a>
                    <a href="www.youtube.com" target="_blank">Youtube</a>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Me;