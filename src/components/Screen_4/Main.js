let steps = [
    {header: "Planning", text: "The expedition will be given a briefing first."},
    {header: "Preparation", text: "Physical preparation, knowledge and skills to survive in the jungle."},
    {header: "Endurance Test", text: "Endurance test as a final requirement to be a part of the team."},
    {header: "Test", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {header: "Also test", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
]

function Main() {
    return(
        <div className="main_main_4">
            <div style={{fontSize: 20}}>03 - Expedition Timeline</div>
            <div className="main_text_4">
                <div className="wrapper_text_4">
                    <div className="tml_4">Timeline of Kalimantan Jungle Expedition</div>
                    <div className="text_4">The expedition is divided into several stages, starting from the <b>planning</b> stage, <b>preparation</b> stage, <b>endurance</b> test and finally the <b>implementation</b> stage.</div>
                </div>
                <div className="tasks_4">
                    {steps.map((steps) => 
                        <div className="task_4">
                            <div className="img_wrapper_4">
                                <img src="https://www.seekpng.com/png/full/13-133421_circulartimer-empty-white-circle-png.png" height={20}/>
                            </div>
                            <div className="wrapper_4">
                                <div className="task_head_4">{steps.header}</div>
                                <div className="task_text_4">{steps.text}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Main