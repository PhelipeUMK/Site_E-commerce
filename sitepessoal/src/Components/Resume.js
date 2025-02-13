import styled from "styled-components"

const ResumeArea = styled.table`
    height: 300px;
    width: 200px;
    margin: 100px 50px;
    background-color: gray;
    padding: 4px;
`

const ResumeHead = styled.thead`
    background-color: white;
`

const CustomTr = styled.tr`
    background-color: white;
`

function Resume() {
    return (
        <ResumeArea>
            <ResumeHead>Resumo da Compra</ResumeHead>
            <CustomTr>Subtotal</CustomTr>
            <CustomTr>Frete</CustomTr>
            <CustomTr>Link</CustomTr>
            <CustomTr>Total</CustomTr>
        </ResumeArea>
    )
}

export default Resume;
