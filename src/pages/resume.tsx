import React from "react"
import styled from "styled-components"


const PolyDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const ResumePage: React.FC = () => {
    return (
        <PolyDiv>
            <p>
                Hello, my name is Josh Melton. I'm from small town in North Carolina. I've had an affinity for development since age 11, when I wrote my first line of HTML code.
            </p>
        </PolyDiv>
    )
}

export default ResumePage
